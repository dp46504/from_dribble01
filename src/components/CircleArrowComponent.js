import React from "react";

function CircleArrowComponent(props) {
  const circle1r = props.r;
  const text = ` ${props.text}  ${props.text} `;
  const circle1Path = `M 50, 50 m -${circle1r}, 0 a ${circle1r},${circle1r} 0 1,1 ${
    2 * circle1r
  },0 a ${circle1r},${circle1r} 0 1,1 -${2 * circle1r},0`;
  return (
    <svg id="circleSvg" viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <path id="circle" d={circle1Path} />
      </defs>
      <circle cx="50" cy="50" r={circle1r / 20} fill="black"></circle>
      <text fontSize={(circle1r * 2.05 * 2 * 3.14) / text.length}>
        <textPath href="#circle">{text}</textPath>
      </text>
    </svg>
  );
}

export default CircleArrowComponent;
