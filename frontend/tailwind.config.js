module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            red: "rgb(156, 0, 60)",
            reddark: "rgb(126, 0, 48)",
            dark: "rgb(33, 33, 33)",
            lightdark: "rgba(33, 33, 33, 0.711)",
            pink: "rgb(255, 239, 239)",
         },
      },
   },
   plugins: [require("daisyui")],
};
