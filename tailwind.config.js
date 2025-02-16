// tailwind.config.mjs
import animations from '@midudev/tailwind-animations'

export default {
  // rest of the options
  plugins: [
    animations
    
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FFA726',
          DEFAULT: '#FF9800',
          dark: '#FB8C00',

        },
        
      },
    },
  },
  variants: {},
  plugins: [],
}