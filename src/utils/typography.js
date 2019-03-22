import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Yozakura JP', 'Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'Georgia', 'serif'],
  scaleRatio: 3.3,
  bodyGray: 10,
  letterSpacing: 3,
  bodyWeight: 400,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '300',
        '400',
        '700',
        '900',
      ],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 2,
      letterSpacing: '4px',
    },
  })
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const { rhythm, scale } = typography
