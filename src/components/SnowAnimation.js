import React, { useEffect, useRef } from 'react';

const SnowAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let snowflakes = [];

    const createSnowflake = () => {
      const x = Math.random() * canvas.width;
      const y = -10;
      const size = Math.random() * 4 + 2;
      const speedY = Math.random() * 2 + 1;

      snowflakes.push({ x, y, size, speedY });
    };

    const updateSnowflakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((snowflake) => {
        snowflake.y += snowflake.speedY;

        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.closePath();

        if (snowflake.y >= canvas.height) {
          snowflakes = snowflakes.filter((fl) => fl !== snowflake);
        }
      });

      requestAnimationFrame(updateSnowflakes);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    handleResize();
    setInterval(createSnowflake, 100); // 雪の生成間隔を調整する

    updateSnowflakes();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default SnowAnimation;