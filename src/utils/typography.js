import Typography from 'tyjs'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Shojumaru', 'Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'Georgia', 'serif'],
  scaleRatio: 3,
  bodyGray: 10,
  letterSpacing: 3,
  bodyWeight: 400,
  breakpoints: {
    "@media only screen and (max-width:768px)": { // any valid media query.
      baseFontSize: '15px',
    },
    "@media only screen and (max-width:480px)": { // any valid media query.
      baseFontSize: '10px',
    },
  },
  overrideStyles: () => ({
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 2,
      letterSpacing: '5px',
    },
  })
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const { rhythm, scale } = typography
