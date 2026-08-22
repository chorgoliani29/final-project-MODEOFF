/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}", // მიუთითეთ თქვენი ფაილების მდებარეობა
    "./*.{html,js}", // თუ ყველა ფაილი მთავარ საქაღალდეშია
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
