import { useEffect, useRef } from 'react';
import { styWrapper } from './styles';

function createHeart(container) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  const x = Math.random() * window.innerWidth;
  heart.style.left = `${x}px`;
  heart.style.animationDuration = 2 + Math.random() * 3 + 's';
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
      if (Math.random() < 0.3) createHeart(container);
    }, 500);

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
