/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "page-bg-light": "#ffffff",
        "page-bg-dark": "#171717",
        "page-bg-hc": "#000000",

        "card-bg-light": "#ffffff",
        "card-bg-dark": "#404040",
        "card-bg-hc": "#000000",

        "primary-text-light": "#171717",
        "primary-text-dark": "#fafafa",
        "primary-text-hc": "#ffffff",

        "secondary-text-light": "#737373",
        "secondary-text-dark": "#a3a3a3",
        "secondary-text-hc": "#ffffff",

        "link-light": "#2563eb",
        "link-dark": "#60a5fa",
        "link-hc": "#facc15",

        "icon-link-light": "#171717",
        "icon-link-dark": "#fafafa",
        "icon-link-hc": "#facc15",

        "card-stroke-light": "transparent",
        "card-stroke-dark": "transparent",
        "card-stroke-hc": "#ffffff",

        "location-icon-light": "#a3a3a3",
        "location-icon-dark": "#a3a3a3",
        "location-icon-hc": "#ffffff",

        "tag-stroke-light": "#e5e5e5",
        "tag-stroke-dark": "#404040",
        "tag-stroke-hc": "#ffffff",

        "tag-bg-light": "#fafafa",
        "tag-bg-dark": "#525252",
        "tag-bg-hc": "transparent",
      },
      backgroundColor: {
        page: "var(--page-background-color)",
        card: "var(--card-background-color)",
        tag: "var(--tag-background-color)",
      },
      textColor: {
        primary: "var(--primary-text-color)",
        secondary: "var(--secondary-text-color)",
        link: "var(--link-color)",
        "icon-link": "var(--icon-link-color)",
        location: "var(--location-icon-color)",
      },
      borderColor: {
        card: "var(--card-stroke-color)",
        tag: "var(--tag-stroke-color)",
      },
    },
  },
  plugins: [],
}
