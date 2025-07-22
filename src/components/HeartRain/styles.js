import { css, keyframes } from '@emotion/core';
import heartImg from '@assets/images/heart.png';

const fall = keyframes`
  0% {
    transform: translateX(0px) translateY(0px) scale(0.8);
    opacity: 1;
  }
  30% {
    transform: translateX(15px) translateY(30vh) scale(0.95);
  }
  60% {
    transform: translateX(-20px) translateY(60vh) scale(1.05);
  }
  100% {
    transform: translateX(10px) translateY(100vh) scale(1.2);
    opacity: 0;
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
    top: -70px;
    width: 16px;
    height: 16px;
    background-image: url(${heartImg});
    background-size: contain;
    background-repeat: no-repeat;
    animation-name: ${fall};
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    opacity: 0.8;
  }
`;
