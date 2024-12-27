const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add your paths here
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Enable dark mode using 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Extending default font family
      },
      animation: {
        aurora: "aurora 60s linear infinite", // Adding 'aurora' animation
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%", // Initial background position
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%", // Final background position for animation
          },
        },
      },
      
    },
    screens:{
      xs: "320px",
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    
  },
  plugins: [
    addVariablesForColors, // Plugin to generate CSS variables for colors
  ],
};

// Function to generate CSS variables for colors
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors")); // Flatten the color palette
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]) // Map each color to a CSS variable
  );

  // Inject the CSS variables into the root
  addBase({
    ":root": newVars,
  });
}
