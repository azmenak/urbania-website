import React, { PropTypes } from 'react';
import { assign } from 'lodash';

const VidhubLogo = props => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeMiterlimit="10"
    viewBox="0 0 940 203"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#7D7B3C"
      d="M834.578 129.05c2.84-7.808 22.953-75.718 25.32-84.946h1.42c2.128 9.466 19.165 67.91 22.004 75.48h-33.718l-5.115 18.93h43.8l14.438 46.144h25.554L875.75 21.388h-28.396l-53.473 163.27h23.667l17.03-55.61zm-715.21 39.04c-8.277 10.178-21.764 19.167-46.847 19.167-24.606 0-40.938-7.806-49.22-22.717-4.256-7.572-5.207-12.067-5.207-29.1V21.624h22.96V126.92c0 11.83 1.176 26.264 5.91 31.707 4.494 5.207 12.776 9.226 25.794 9.226 12.306 0 21.297-3.782 26.5-10.643 4.023-5.21 5.917-13.964 5.917-26.98V21.626h22.713v111.92c0 20.586-1.182 25.554-8.52 34.546z"
    />
    <path
      fill="#C08348"
      d="M677.96 184.657l-42.83-86.605c-8.282-16.802-16.8-35.257-19.88-44.72l-1.42.238c1.19 13.958 1.66 30.286 1.9 45.43l.94 85.658h-22.95V21.625h26.508l45.428 89.915c6.86 13.487 14.905 34.548 16.09 39.043l1.42-.477c-.477-4.73-2.367-30.522-2.367-48.506l-.477-79.975h22.01v163.032h-24.37z"
    />
    <path
      fill="#928883"
      d="M749.404 184.657V21.625h23.187v163.032h-23.186z"
    />
    <path
      fill="#7D7B3C"
      d="M385.776 97.813c19.876-5.915 29.576-18.927 29.576-35.965 0-14.908-7.57-26.5-22.003-34.072-10.175-5.442-17.513-6.15-44.96-6.15h-34.546v163.03h49.69c8.52 0 18.452-.71 25.79-2.602 18.928-4.97 32.895-19.405 32.895-42.122 0-21.294-11.834-36.672-36.444-42.12zM368.5 166.2h-32.414V40.792h22.24c8.287 0 12.78.472 16.564 1.653 9.467 2.84 15.855 11.832 15.855 23.19 0 5.44-1.658 11.592-4.734 15.853-4.73 6.39-9.7 8.993-24.13 8.993h-14.674v18.93h15.377c8.053 0 12.783.47 17.037 1.42 10.178 2.367 17.512 13.25 17.512 26.498 0 20.826-15.145 28.872-28.632 28.872z"
    />
    <path
      fill="#C08348"
      d="M197.208 184.657H174.49V21.625h45.665c19.405 0 30.767 4.495 38.575 11.83 7.33 6.86 14.427 17.747 14.427 33.6 0 25.316-16.327 45.668-43.536 44.722 7.57 6.15 11.357 11.357 14.2 15.143 3.312 4.496 8.278 11.595 13.72 20.11 7.104 11.124 20.35 32.42 23.666 37.627H253.52c-4.734-9.23-6.857-13.016-13.49-24.136-12.537-20.822-16.563-27.684-28.153-40.7-1.61-1.785-3.112-3.23-4.732-4.356V97.106h5.917c14.432 0 22.474-2.366 28.153-7.81 4.968-4.73 8.046-12.543 8.046-22.004 0-11.358-6.15-20.35-15.142-23.9-4.73-1.892-11.355-3.076-19.876-3.076H197.21v144.34z"
    />
    <path
      fill="#928883"
      d="M475.673 129.05c2.84-7.808 22.95-75.718 25.32-84.946h1.42c2.128 9.466 19.164 67.91 22.002 75.48h-33.718l-5.114 18.93h43.802l14.437 46.144h25.554l-52.532-163.27h-28.396l-53.476 163.27h23.666l17.035-55.61z"
    />
  </svg>
);

const LogoSvg = ({ size, style, ...props }) => {
  const dimentions = (() => {
    switch (size) {
      case 'md':
      case 'medium':
        return '3rem';
      case 'lg':
      case 'large':
        return '4rem';
      case 'full-width':
        return null;
      default:
        return '2rem';
    }
  })();
  const svgStyle = assign({}, {
    display: 'inline-block',
    height: dimentions,
    width: dimentions === null ? '100%' : null,
  }, style);

  return <VidhubLogo {...props} style={svgStyle} />;
};

LogoSvg.propTypes = {
  size: PropTypes.oneOf([
    'md', 'medium',
    'lg', 'large',
    'sm', 'small',
    'full-width',
  ]),
};

export default LogoSvg;
