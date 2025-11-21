(function() {
    // 1. Inject CSS for the UI
    const style = document.createElement('style');
    style.textContent = `
        #particleUI {
            position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
            background: rgba(0,0,0,0.6); color: #fff; padding: 10px 15px;
            border-radius: 8px; font-family: Arial, sans-serif; font-size: 12px;
            display: flex; gap: 12px; align-items: center; z-index: 20;
            pointer-events: auto;
            flex-wrap: wrap;
            justify-content: center;
            width: 90%;
            max-width: 600px;
        }
        #particleUI label { cursor: pointer; display: flex; align-items: center; gap: 5px; white-space: nowrap; }
        #particleUI input[type=range] { width: 80px; }
        #particleUI select { background: #333; color: #fff; border: none; padding: 2px; border-radius: 4px; }
        @media (max-width: 640px) {
            #particleUI { bottom: 10px; padding: 8px; gap: 8px; }
            #particleUI input[type=range] { width: 60px; }
        }
    `;
    document.head.appendChild(style);

    // 2. Inject UI HTML into the Hero Section
    const heroSection = document.getElementById('home');
    // Remove existing UI if present
    const existingUI = document.getElementById('particleUI');
    if (existingUI) existingUI.remove();

    const uiContainer = document.createElement('div');
    uiContainer.id = 'particleUI';
    // Updated values to match CodePen exactly
    uiContainer.innerHTML = `
        <label>Particles: <input type="range" id="pCount" min="500" max="4000" step="100" value="2000"></label>
        <label>Speed: <input type="range" id="speed" min="0.2" max="3" step="0.1" value="1"></label>
        <label>Trail: <input type="range" id="trail" min="0.3" max="0.95" step="0.01" value="0.85"></label>
        <label>Palette:
            <select id="palette">
                <option value="default">Default</option>
                <option value="neon">Neon</option>
                <option value="pastel">Pastel</option>
                <option value="monochrome">Monochrome</option>
                <option value="blue">Blue (Theme)</option>
            </select>
        </label>
    `;
    heroSection.appendChild(uiContainer);

    // 3. Visualization Logic
    const canvas = document.getElementById('heroCanvas');
    const ctx = canvas.getContext('2d');

    // Resize to container
    const resize = () => {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // UI Elements
    const pCountInput = document.getElementById('pCount');
    const speedInput  = document.getElementById('speed');
    const trailInput  = document.getElementById('trail');
    const paletteSel  = document.getElementById('palette');

    // Particle System
    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 0.5 + 0.5;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.size = Math.random() * 1.5 + 0.5;
        }
        update(gx, gy, dt, speedFactor) {
            const dx = gx - this.x, dy = gy - this.y;
            const distSq = dx*dx + dy*dy;
            const G = 100 * speedFactor;
            const force = G / (distSq + 1000);
            this.vx += dx * force * dt;
            this.vy += dy * force * dt;
            this.vx *= 0.99; this.vy *= 0.99; // Damping
            this.x += this.vx * dt;
            this.y += this.vy * dt;
            // Wrap
            if (this.x < -10) this.x = canvas.width + 10;
            if (this.x > canvas.width + 10) this.x = -10;
            if (this.y < -10) this.y = canvas.height + 10;
            if (this.y > canvas.height + 10) this.y = -10;
        }
        draw(col) {
            ctx.fillStyle = col;
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }

    let particles = [];
    const createParticles = (count) => {
        particles = new Array(count).fill().map(() => new Particle());
    };
    createParticles(+pCountInput.value);

    // Mouse/Touch
    const pointer = { x: canvas.width/2, y: canvas.height/2 };
    const setPointer = (x, y) => {
        const rect = canvas.getBoundingClientRect();
        pointer.x = x - rect.left;
        pointer.y = y - rect.top;
    };
    heroSection.addEventListener('mousemove', e => setPointer(e.clientX, e.clientY));
    heroSection.addEventListener('touchmove', e => {
        const t = e.touches[0];
        setPointer(t.clientX, t.clientY);
        e.preventDefault();
    }, {passive:false});

    // Palettes
    const palettes = {
        default: ['#ff6b6b','#f7d794','#ffb142','#c7ecee','#f5d9b3'],
        neon:    ['#0ff','#f0f','#ff0','#0f0','#f00'],
        pastel:  ['#ffb3ba','#ffdfba','#ffffba','#baffc9','#bae1ff'],
        monochrome: ['#fff'],
        blue: ['#2563EB', '#1E40AF', '#60A5FA', '#93C5FD', '#DBEAFE']
    };
    const pickColor = (() => {
        let idx = 0;
        return (scheme) => {
            const arr = palettes[scheme] || palettes.default;
            const col = arr[idx % arr.length];
            idx++;
            return col;
        };
    })();

    // Loop
    let last = performance.now();
    const render = (now) => {
        const dt = (now - last) / 16;
        last = now;

        // Trail effect
        ctx.fillStyle = `rgba(0,0,0,${trailInput.value})`;
        ctx.fillRect(0,0,canvas.width,canvas.height);

        const speedFactor = +speedInput.value;
        const scheme = paletteSel.value;

        particles.forEach(p => {
            p.update(pointer.x, pointer.y, dt, speedFactor);
            p.draw(pickColor(scheme));
        });
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    // Events
    pCountInput.addEventListener('input', () => createParticles(+pCountInput.value));
    paletteSel.addEventListener('change', () => pickColor(paletteSel.value));
})();
