/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: [
    "col-span-full",
    "border-transparent",
    "line-clamp-2",
    "flex",
    "hidden",
    "group-hover:opacity-0",
    "group-hover:opacity-100",
    "z-[1]",
    "z-[2]"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
