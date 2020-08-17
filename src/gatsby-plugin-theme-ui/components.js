import Prism from '@theme-ui/prism';
import React from 'react';
import VisuallyHidden from '@reach/visually-hidden'
/** @jsx jsx */
import { jsx } from 'theme-ui'

const AnchorTag = (props) => {
  const tooltipRef = React.useRef(null);

  const onMouseEnter = (e) => {
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

const heading = Tag => props => {
  if (!props.id) return <Tag {...props} />


  return (
    <Tag {...props} sx={{
      ':hover a': {
        position: 'relative'
      }
    }}>
      <a href={`#${props.id}`} sx={{

        ':focus': {
          backgroundColor: 'black',
          position: "relative",
          'span': {
            outline: 'auto 1px'
          }
        }
      }}
      >
        <span sx={{
          position: "absolute",
          top: '50%',
          left: 0,
          transform: "translateX(-100%) translateY(-50%)",
          paddingRight: "4px",
          fontSize: 1
        }}>🔗</span>
        <VisuallyHidden>{props.children}</VisuallyHidden></a>
      {props.children}
    </Tag >
  )
}




const components = {
  pre: props => props.children,
  code: Prism,
  a: AnchorTag,
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
};
export default components;
