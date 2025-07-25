import { useEffect, useRef } from 'react';
import { styWrapper } from './styles';

function createHeart(container) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  const x = Math.random() * window.innerWidth;
  heart.style.left = `${x}px`;
  heart.style.animationDuration = 5 + Math.random() * 2 + 's';
  const size = Math.floor(Math.random() * 16) + 16;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';

  heart.addEventListener('animationend', () => {
    heart.remove();
  });

  container.appendChild(heart);
  // setTimeout(() => heart.remove(), 5000);
}

function HeartRain() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (Math.random() < 0.1) createHeart(container);
    }, 700);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div css={styWrapper}>
      <div className="heart-container" ref={containerRef}></div>
    </div>
  );
}

export default HeartRain;
