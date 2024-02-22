// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
    theme: {
      extend: {
        colors: {
          muted: {
            DEFAULT: 'hsl(210, 40%, 96.1%)', // Default color for muted
            foreground: 'hsl(215.4, 16.3%, 46.9%)', // Foreground color for muted
          },
          primary: {
            DEFAULT: 'hsl(222.2, 47.4%, 11.2%)', // Default primary color
            foreground: 'hsl(210, 40%, 98%)', // Foreground color for primary
          },
          secondary: {
            DEFAULT: 'hsl(210, 40%, 96.1%)', // Default secondary color
            foreground: 'hsl(222.2, 47.4%, 11.2%)', // Foreground color for secondary
          },
          accent: {
            DEFAULT: 'hsl(210, 40%, 96.1%)', // Default accent color
            foreground: 'hsl(222.2, 47.4%, 11.2%)', // Foreground color for accent
          },
          destructive: {
            DEFAULT: 'hsl(0, 84.2%, 60.2%)', // Default destructive color
            foreground: 'hsl(210, 40%, 98%)', // Foreground color for destructive
          },
          border: 'hsl(214.3, 31.8%, 91.4%)',
          input: 'hsl(214.3, 31.8%, 91.4%)',
          ring: 'hsl(222.2, 84%, 4.9%)',
        },
      },
    },
    plugins: [],
  }