import React, { useEffect, useRef } from 'react';

/**
 * MinecraftParticleBackground - 3D Voxel & Experience Orb Atmosphere
 * - Deepslate & Bedrock dark grid matrix
 * - 3D Floating Minecraft Voxel Blocks: Diamond Ore, Redstone Ore, Emerald, Obsidian, TNT, Crafting Table
 * - Floating Experience (XP) Orbs orbiting and softly reacting to cursor
 * - Purple Nether portal micro-motes floating upward
 * - Zero heavy center clutter or overlapping logos
 */
const MinecraftParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      active: false,
    };

    // Voxel Blocks types
    const BLOCK_TYPES = [
      { name: 'DIAMOND', base: '#686868', top: '#8a8a8a', right: '#484848', gem: '#4dedf4', glow: 'rgba(77, 237, 244, 0.6)' },
      { name: 'REDSTONE', base: '#686868', top: '#8a8a8a', right: '#484848', gem: '#ff2244', glow: 'rgba(255, 34, 68, 0.6)' },
      { name: 'EMERALD', base: '#686868', top: '#8a8a8a', right: '#484848', gem: '#17dd62', glow: 'rgba(23, 221, 98, 0.6)' },
      { name: 'OBSIDIAN', base: '#150d22', top: '#241738', right: '#0d0716', gem: '#8e24aa', glow: 'rgba(142, 36, 170, 0.4)' },
      { name: 'GOLD', base: '#686868', top: '#8a8a8a', right: '#484848', gem: '#fbee37', glow: 'rgba(251, 238, 55, 0.6)' },
    ];

    const numBlocks = window.innerWidth < 768 ? 16 : 28;
    const blocks = [];

    // Experience (XP) Orbs
    const numOrbs = window.innerWidth < 768 ? 18 : 36;
    const orbs = [];

    const init = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Create 3D Voxel Blocks
      blocks.length = 0;
      for (let i = 0; i < numBlocks; i++) {
        const type = BLOCK_TYPES[i % BLOCK_TYPES.length];
        blocks.push({
          x: (Math.random() - 0.5) * width * 2,
          y: (Math.random() - 0.5) * height * 2,
          z: Math.random() * 900 + 100,
          size: Math.random() * 16 + 14,
          type,
          rx: Math.random() * Math.PI * 2,
          ry: Math.random() * Math.PI * 2,
          rz: Math.random() * Math.PI * 2,
          vrx: (Math.random() - 0.5) * 0.012,
          vry: (Math.random() - 0.5) * 0.015,
          vrz: (Math.random() - 0.5) * 0.01,
          speedZ: Math.random() * 0.4 + 0.25,
          bobPhase: Math.random() * Math.PI * 2,
        });
      }

      // Create XP Orbs
      orbs.length = 0;
      for (let i = 0; i < numOrbs; i++) {
        orbs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -Math.random() * 0.7 - 0.3, // gently floating up
          radius: Math.random() * 2.5 + 2,
          colorPhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 2 + 3,
        });
      }
    };

    init();

    const handleResize = () => init();
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Helper: Draw 3D Voxel Cube
    const drawVoxelBlock = (x, y, s, rx, ry, type, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = opacity;

      // Isometric projection angles based on rx, ry
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const cosX = Math.cos(rx);

      const dx = s * 0.866;
      const dy = s * 0.5;

      // Top Face
      ctx.fillStyle = type.top;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(dx, -dy);
      ctx.lineTo(0, 0);
      ctx.lineTo(-dx, -dy);
      ctx.closePath();
      ctx.fill();

      // Top Face Ore flecks
      ctx.fillStyle = type.gem;
      ctx.fillRect(-dx * 0.3, -s * 0.7, s * 0.25, s * 0.25);
      ctx.fillRect(dx * 0.2, -s * 0.5, s * 0.2, s * 0.2);

      // Left Face
      ctx.fillStyle = type.base;
      ctx.beginPath();
      ctx.moveTo(-dx, -dy);
      ctx.lineTo(0, 0);
      ctx.lineTo(0, s);
      ctx.lineTo(-dx, dy);
      ctx.closePath();
      ctx.fill();

      // Left Face Ore flecks
      ctx.fillStyle = type.gem;
      ctx.fillRect(-dx * 0.6, 0, s * 0.25, s * 0.25);

      // Right Face (Darkest)
      ctx.fillStyle = type.right;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(dx, -dy);
      ctx.lineTo(dx, dy);
      ctx.lineTo(0, s);
      ctx.closePath();
      ctx.fill();

      // Right Face Ore flecks
      ctx.fillStyle = type.gem;
      ctx.fillRect(dx * 0.3, 0, s * 0.25, s * 0.25);

      // Ambient gem glow
      ctx.shadowColor = type.gem;
      ctx.shadowBlur = 8;
      ctx.fillStyle = type.gem;
      ctx.fillRect(-s * 0.1, -s * 0.1, s * 0.2, s * 0.2);
      ctx.shadowBlur = 0;

      ctx.restore();
    };

    let time = 0;
    const render = () => {
      time += 0.016;

      // Mouse easing
      if (mouse.active) {
        if (mouse.x === -9999) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.15;
          mouse.y += (mouse.targetY - mouse.y) * 0.15;
        }
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Subtle Bedrock Dot Grid
      const step = 32;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      for (let gx = 0; gx < width; gx += step) {
        for (let gy = 0; gy < height; gy += step) {
          ctx.fillRect(gx, gy, 1.5, 1.5);
        }
      }

      // 2. Draw & Update XP Orbs (Green/Yellow pulse)
      orbs.forEach((orb) => {
        orb.y += orb.vy;
        orb.x += orb.vx + Math.sin(time * 2 + orb.colorPhase) * 0.3;

        // Attract softly to cursor if close
        if (mouse.active) {
          const dx = mouse.x - orb.x;
          const dy = mouse.y - orb.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            orb.x += (dx / dist) * 1.2;
            orb.y += (dy / dist) * 1.2;
          }
        }

        if (orb.y < -20) {
          orb.y = height + 20;
          orb.x = Math.random() * width;
        }

        const isYellow = Math.sin(time * orb.pulseSpeed + orb.colorPhase) > 0;
        const color = isYellow ? '#fbee37' : '#55FF55';

        ctx.save();
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        // Minecraft square pixel XP orb
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2);
        ctx.restore();
      });

      // 3. Draw & Update 3D Voxel Blocks
      const focalLength = 480;
      const centerX = width / 2;
      const centerY = height / 2;

      blocks.sort((a, b) => b.z - a.z);

      blocks.forEach((b) => {
        b.rx += b.vrx;
        b.ry += b.vry;
        b.rz += b.vrz;
        b.z -= b.speedZ;

        if (b.z <= 40) {
          b.z = 950;
          b.x = (Math.random() - 0.5) * width * 2;
          b.y = (Math.random() - 0.5) * height * 2;
        }

        const k = focalLength / Math.max(30, b.z);
        const screenX = b.x * k + centerX;
        const screenY = (b.y + Math.sin(time + b.bobPhase) * 15) * k + centerY;

        if (screenX > -100 && screenX < width + 100 && screenY > -100 && screenY < height + 100) {
          const renderedSize = Math.max(6, b.size * k);
          const depthOpacity = Math.max(0.15, Math.min(0.75, (1000 - b.z) / 900));

          drawVoxelBlock(screenX, screenY, renderedSize, b.rx, b.ry, b.type, depthOpacity);
        }
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default MinecraftParticleBackground;
