(function() {
    const canvas = document.getElementById('heroCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    
    // Configuration
    const config = {
        particleCount: 100,
        mouseRadius: 100,
        gravity: 0.05,
        friction: 0.98,
        color: '#2563EB' // Primary blue
    };

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.size = Math.random() * 2 + 1;
            this.color = `rgba(37, 99, 235, ${Math.random() * 0.5 + 0.2})`; // Blue with varying opacity
        }

        update(mouseX, mouseY) {
            // Mouse interaction (Gravity Well)
            if (mouseX && mouseY) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 300) {
                    const force = (300 - distance) / 300;
                    this.vx += (dx / distance) * force * 0.5;
                    this.vy += (dy / distance) * force * 0.5;
                }
            }

            // Physics
            this.vx *= config.friction;
            this.vy *= config.friction;
            
            this.x += this.vx;
            this.y += this.vy;

            // Boundary check (bounce)
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function init() {
        resize();
        createParticles();
        animate();
        
        window.addEventListener('resize', resize);
        
        // Mouse tracking
        let mouseX = null;
        let mouseY = null;
        
        const heroSection = document.getElementById('home');
        heroSection.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });
        
        heroSection.addEventListener('mouseleave', () => {
            mouseX = null;
            mouseY = null;
        });

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw connecting lines
            ctx.strokeStyle = 'rgba(37, 99, 235, 0.1)';
            ctx.lineWidth = 0.5;
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update(mouseX, mouseY);
                particles[i].draw();
                
                // Connect nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        }
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function resize() {
        const heroSection = document.getElementById('home');
        width = heroSection.offsetWidth;
        height = heroSection.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        // Re-create particles on resize to prevent stretching/loss
        if(particles.length === 0) createParticles();
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
