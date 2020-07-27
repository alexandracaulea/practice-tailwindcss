module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1992d4",
      },
      spacing: {
        "72": "18rem",
      },
      gridTemplateColumns: {
        layout: "repeat(auto-fill, minmax(280px, 1fr))",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
