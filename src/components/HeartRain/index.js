import { useEffect } from 'react';
import { styWrapper } from './styles';

function createHeart(container) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 2 + Math.random() * 3 + 's';
  heart.style.opacity = Math.random();
  const size = Math.floor(Math.random() * 16) + 16;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';

  container.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

function HeartRain() {
  useEffect(() => {
    if (window.heartRainStarted) return;
    window.heartRainStarted = true;

    const container = document.createElement('div');
    container.className = 'heart-container';

    // Gắn Emotion style
    const wrapper = document.createElement('div');
    wrapper.setAttribute('css', styWrapper.styles); // emotion-in-js style
    wrapper.appendChild(container);
    document.body.appendChild(wrapper);

    const interval = setInterval(() => {
      if (Math.random() < 0.7) createHeart(container);
    }, 500);

    return () => {
      clearInterval(interval);
      wrapper.remove();
    };
  }, []);

  return null;
}

export default HeartRain;
