/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './content/**/*.{md,mdx}'
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#1d4ed8",
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
            950: "#172554",
          },
          dark: "#121212",
          light: "#fafafa"
        },
        fontFamily: {
          sans: ['var(--font-inter)'],
          mono: ['var(--font-roboto-mono)'],
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              a: {
                color: theme('colors.primary.700'),
                '&:hover': {
                  color: theme('colors.primary.500'),
                },
              },
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
            },
          },
          dark: {
            css: {
              color: theme('colors.gray.300'),
              a: {
                color: theme('colors.primary.400'),
                '&:hover': {
                  color: theme('colors.primary.300'),
                },
              },
              h1: {
                color: theme('colors.gray.100'),
              },
              h2: {
                color: theme('colors.gray.100'),
              },
              h3: {
                color: theme('colors.gray.100'),
              },
              h4: {
                color: theme('colors.gray.100'),
              },
              h5: {
                color: theme('colors.gray.100'),
              },
              h6: {
                color: theme('colors.gray.100'),
              },
              strong: {
                color: theme('colors.gray.100'),
              },
              code: {
                color: theme('colors.gray.300'),
              },
              blockquote: {
                color: theme('colors.gray.300'),
              },
            },
          },
        }),
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }