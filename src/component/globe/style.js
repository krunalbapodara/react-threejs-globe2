import styled from "styled-components";

const GlobeContainer = styled.div`
  // Globe

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: scale(2);
    }
  }

  .globe {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #050505;
    background: radial-gradient(
      ellipse at center,
      rgba(43, 45, 48, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );

    .globe-canvas {
      z-index: 0;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .globe-list {
    z-index: 10;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    list-style: none;
    transition: opacity 3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &.active {
      opacity: 1;
    }

    $dotSize: 16px;
    $dotSizeLarge: $dotSize + ($dotSize / 2);

    > li {
      opacity: 0.4;
      position: absolute;
      margin-left: -($dotSize / 2);
      margin-top: -($dotSize / 2);
      width: $dotSize;
      height: $dotSize;
      border-radius: 50%;
      background: $colour-cyan;
      transition: opacity 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:before {
        content: "";
        opacity: 0.5;
        pointer-events: none;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -($dotSize / 2);
        margin-top: -($dotSize / 2);
        width: $dotSize;
        height: $dotSize;
        border-radius: 50%;
        background: $colour-cyan;
        animation: 2s pulse infinite linear;
      }

      &.active {
        opacity: 1;
        margin-left: -($dotSizeLarge / 2);
        margin-top: -($dotSizeLarge / 2);
        width: $dotSizeLarge;
        height: $dotSizeLarge;
        background: $colour-white;

        &:before {
          margin-left: -($dotSizeLarge / 2);
          margin-top: -($dotSizeLarge / 2);
          width: $dotSizeLarge;
          height: $dotSizeLarge;
          background: $colour-white;
        }

        .text {
          opacity: 1;
          right: $dotSizeLarge + 5px;
          font-size: 20px;
          line-height: 20px;
          font-weight: 700;
        }
      }
    }

    .text {
      position: absolute;
      opacity: 0.8;
      right: $dotSize + 5px;
      top: 50%;
      display: block;
      font-size: 14px;
      line-height: 14px;
      font-weight: 600;
      text-align: right;
      text-shadow: -1px -1px 0 $colour-black, 1px -1px 0 $colour-black,
        -1px 1px 0 $colour-black, 1px 1px 0 $colour-black;
      color: $colour-white;
      white-space: nowrap;
      transform: translateY(-50%);
    }
  }
`;

export default GlobeContainer;
