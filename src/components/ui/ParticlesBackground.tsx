import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.size = 0;
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.5 + 0.5;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update(gx: number, gy: number, dt: number) {
        const dx = gx - this.x;
        const dy = gy - this.y;
        const distSq = dx * dx + dy * dy;
        const force = 100 / (distSq + 1000); // Default speed factor 1
        
        this.vx += dx * force * dt;
        this.vy += dy * force * dt;
        
        this.vx *= 0.99;
        this.vy *= 0.99;
        
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        
        if (this.x < -10) this.x = canvas!.width + 10;
        if (this.x > canvas!.width + 10) this.x = -10;
        if (this.y < -10) this.y = canvas!.height + 10;
        if (this.y > canvas!.height + 10) this.y = -10;
      }

      draw(col: string) {
        if (!ctx) return;
        ctx.fillStyle = col;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const createParticles = (count: number) => {
      particles = Array.from({ length: count }, () => new Particle());
    };

    createParticles(100); // Default count

    const pointer = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMove = (x: number, y: number) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = x - rect.left;
      pointer.y = y - rect.top;
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      handleMove(t.clientX, t.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    let last = performance.now();
    const render = (now: number) => {
      const dt = (now - last) / 16;
      last = now;

      ctx.fillStyle = 'rgba(0,0,0,0.85)'; // Default trail
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update(pointer.x, pointer.y, dt);
        p.draw('#2563EB'); // Default blue color
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render(performance.now());

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}
