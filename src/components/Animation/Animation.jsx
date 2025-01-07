import React, { useEffect, useRef } from 'react';
import '../Animation/Animation.css';

const DissolvingShapesAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 50;

    // Set canvas size to full-screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Adjust canvas on window resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);

    // Particle class for various shapes
    class Particle {
      constructor(x, y, size, speedY, opacity, type) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedY = speedY;
        this.opacity = opacity;
        this.type = type; // 'circle', 'square', 'triangle'
      }

      update() {
        this.y += this.speedY;
        if (this.y > canvas.height) {
          this.y = 0 - this.size;
          this.x = Math.random() * canvas.width; // Reset x position randomly
        }
      }

      draw() {
        ctx.beginPath();
        ctx.globalAlpha = this.opacity;

        switch (this.type) {
          case 'circle':
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            break;
          case 'square':
            ctx.rect(this.x, this.y, this.size, this.size);
            break;
          case 'triangle':
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - this.size, this.y + this.size * 1.5);
            ctx.lineTo(this.x + this.size, this.y + this.size * 1.5);
            ctx.closePath();
            break;
          default:
            break;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create particles with different shapes
    const createParticles = () => {
      particles = [];
      const shapes = ['circle', 'square', 'triangle'];
      for (let i = 0; i < maxParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 10 + 5; // Random size
        const speedY = Math.random() * 2 + 1; // Random speed
        const opacity = Math.random() * 0.5 + 0.2; // Random opacity
        const type = shapes[Math.floor(Math.random() * shapes.length)];
        particles.push(new Particle(x, y, size, speedY, opacity, type));
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with a fading background
      ctx.fillStyle = 'rgba(41, 34, 36, 0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    // Initialize particles and start animation
    createParticles();
    animate();

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="dissolving-canvas" />;
};

export default DissolvingShapesAnimation;
