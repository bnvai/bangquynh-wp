import { css, keyframes } from '@emotion/core';
import heartImg from '@assets/images/heart.png';

const fall = keyframes`
  0% {
    transform: translateX(0px) translateY(0px) scale(0.9) rotate(0deg);
  }
  25% {
    transform: translateX(15px) translateY(25vh) scale(1.0) rotate(10deg);
  }
  50% {
    transform: translateX(-15px) translateY(50vh) scale(1.05) rotate(-10deg);
  }
  75% {
    transform: translateX(10px) translateY(75vh) scale(1.1) rotate(5deg);
  }
  100% {
    transform: translateX(0px) translateY(100vh) scale(1.15) rotate(0deg);
  }
`;

export const styWrapper = css`
  .heart-container {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    overflow: hidden;
  }

  .heart {
    position: absolute;
    top: 0px;
    width: 16px;
    height: 16px;
    background-image: url(${heartImg});
    background-size: contain;
    background-repeat: no-repeat;
    animation-name: ${fall};
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    pointer-events: none;
    opacity: 1;

    @media screen and (max-width: 768px) {
      width: 36px;
      height: 36px;
    }
  }
`;
