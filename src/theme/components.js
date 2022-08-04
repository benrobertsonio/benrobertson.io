import React from 'react';
import VisuallyHidden from '@reach/visually-hidden'

export const AnchorTag = (props) => {
  const tooltipRef = React.useRef(null);

  const onMouseEnter = (e) => {
    console.log('test');
    tooltipRef.current = document.getElementById(props.href.replace(/^\//, ''));
    if (tooltipRef.current) {
      const { right, top, height } = e.target.getBoundingClientRect();
      const tooltipHeight = 150;
      tooltipRef.current.style.top = top + height / 2 - tooltipHeight / 2 + 'px';
      tooltipRef.current.style.left = right + 8 + 'px';
      tooltipRef.current.style.display = 'block';
    }
  };
  const onMouseLeave = (e) => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'none';
    }
  };

  return <a {...props} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onFocus={onMouseEnter} onBlur={onMouseLeave} />;
};

export const heading = Tag => props => {
  if (!props.id) return <Tag {...props} />

  // add heading level signifiers (##) to each heading
  const level = parseInt(Tag.slice(1));
  let prefix = '';
  for (let index = 0; index < level; index++) {
    prefix = prefix.concat('#')
  }

  return (
    <Tag {...props}>
      <span>{prefix} </span>
      <a href={`#${props.id}`}>{props.children}</a>
    </Tag >
  )
}




// const components = {
//   pre: props => props.children,
//   a: AnchorTag,
//   h2: heading('h2'),
//   h3: heading('h3'),
//   h4: heading('h4'),
//   h5: heading('h5'),
//   h6: heading('h6'),
// };
// export default components;
