/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryText: "#051323",
        primaryGradient: {
          light: '#FF772C',
          dark: '#FFAC00'
        },
        footerBg: "#141414",
      },
      fontFamily: {
        raleway: "var(--font-raleway)",
        bubblegum: "var(--font-bubblegum)",
      },
      keyframes: {
				comeout: {
          '0%' : { left: '-100%' },
          '100%' : { left: '0%' }
        },
        goout: {
          '0%' : { left: '0%' },
          '100%' : { left: '-100%' }
        },
			},
      backgroundImage: {
        navBg: "url('/navbg.png')",
        mobileBodyBg: "url('/mobileBg.png')",
        desktopLowerBodyBg: "url('/desktopLowerBg.png')",
        desktopUpperBodyBg: "url('/desktopUpperBg.png')",
      },
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
      },
      textStrokeColor: {
        black: '#000000',
        white: '#ffffff',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function ({ addUtilities }: any) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '2.5px #051323',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '2px white',
        },
      });
    },
    require('tailwindcss-textshadow'),
  ],
} satisfies Config;
