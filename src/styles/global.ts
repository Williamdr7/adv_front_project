import { createGlobalStyle } from "styled-components";
import "@/assets/fonts/axiforma/stylesheet.css";

export const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Axiforma', sans-serif !important;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  input {
    border-radius: 8px !important;
    border: none;
    box-shadow: 0px 2px 3.9px rgba(0, 0, 0, 0.1);
  }


  button {
    border-radius: 32px !important;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    .container {
        padding: 0 1.5rem;
    }
  }

  .rc-slider-dot {
    background: #ffffff !important;
    border: 2px solid #cce8fe !important;
    width: 12px !important;
    height: 12px !important;
    top: -4px !important;
  }
  .rc-slider-dot-active {
    background: #ffffff !important;
    border-color: #0065ff !important;
  }


  .rc-slider-mark-text {
    top: 5px !important;
    font-size: 14px !important;
    color: #A3A3A3;
  }

  .rc-slider-mark-text-active {
      font-size: 16px !important;
      color: #000;
  }

  .rc-slider-handle {
    border: 4px solid #fff !important;
    box-shadow: 0px 2px 3.9px rgba(0, 0, 0, 0.1) !important;
    background: #0065ff !important;
    width: 20px !important;
    height: 20px !important;
    margin-top: -8px !important;
    cursor: pointer !important;
    filter: drop-shadow(0px 2px 3.9px rgba(0, 0, 0, 0.1)) !important;
  }

  .rc-slider-handle::before {
    position: absolute !important;
    white-space: nowrap !important;
    color: #0065ff !important;
    top: -30px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    content: attr(aria-valuetext) '' !important;
    font-size: 14px !important;
  }

  .rc-slider-track {
    background: #0065ff !important;
  }
  .rc-slider-rail {
    background: #D8E5F6 !important;
  }

`;
