import preTheme from '@theme-ui/prism/presets/oceanic-next';

export default {
  colors: {
    primary: '#ed6a5a',
    secondary: 'rgb(0, 100, 93)',
    background: '#fffff8',
    text: '#000',
    headings: '#4a4455'
  },
  fonts: {
    body: '"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: '"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monospace: ''
  },
  breakpoints: [
    '544px', '768px', '992px', '1200px',
  ],
  fontSizes: [
    16, 18, 20, 22, 28, 32, 48, 60, 66
  ],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  lineHeights: {
    body: 1.4,
    heading: 1.2
  },
  text: {
    heading: {
      color: 'headings'
    }
  },
  layout: {
    narrow: {
      width: '90%',
      maxWidth: '748px',
      margin: '0 auto'
    },
    container: {
      width: '90%',
      maxWidth: '1210px',
      margin: '0 auto'
    },
    narrowLeft: {
      width: '90%',
      maxWidth: '748px'
    }
  },
  buttons: {
    primary: {
      color: 'background',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      bg: 'primary',
      borderColor: 'primary',
      border: '1px solid',
      transition: '200ms background-color',
      fontSize: [2, 2, 2, 2, 3],
      '&:hover': {
        bg: 'secondary',
        cursor: 'pointer',
      }
    },
  },
  forms: {
    input: {
      bg: 'white',
      border: '2px solid',
      borderColor: '#777',
      '&:focus': {
        borderColor: 'primary'
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontSize: [0, 0, 0, 2, 3]
    },
    h1: {
      color: 'headings',
    },
    h2: {
      color: 'headings'
    },
    h3: {
      color: 'headings'
    },
    h4: {
      color: 'headings'
    },
    h5: {
      color: 'headings'
    },
    h6: {
      color: 'headings'
    },
    a: {
      fontWeight: 'bold',
      textDecoration: 'none',
      backgroundSize: '100% 200%',
      backgroundPositionY: '10%',
      transition: '200ms background-position-y',
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #ed6a5a 50%)',
      color: 'secondary',
      '&:hover': {
        backgroundPositionY: '20%'
      },
      '&:focus': {
        backgroundPositionY: '20%'
      }
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
    blockquote: {
      my: 3,
      mr: 0,
      ml: 4,
      backgroundColor: '#eeeeee',
      py: 4,
      px: 4,
      borderLeft: '10px solid #ed6a5a',
      borderRadius: '3px',
      'p:first-of-type': {
        mt: 0
      },
      'p:last-of-type': {
        mb: 0
      }
    },
    pre: {
      p: 3,
      overflowX: 'scroll',
      fontSize: 1,
      borderRadius: '3px',
      ...preTheme,
    },
  }
};
