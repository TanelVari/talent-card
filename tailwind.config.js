/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffffff", // Light theme primary color
          dark: "#1a202c", // Dark theme primary color
          "high-contrast": "#000000", // High-contrast theme primary color
        },
        secondary: {
          light: "#f7fafc", // Light theme secondary color
          dark: "#2d3748", // Dark theme secondary color
          "high-contrast": "#ffffff", // High-contrast theme secondary color
        },
        // Add more color definitions as needed
      },
    },
  },
  plugins: [],
}
