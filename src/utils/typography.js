import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '25px',
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
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const { rhythm, scale } = typography
