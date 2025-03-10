/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ["var(--font-jost)", "sans-serif"],
      },      
      extend: {
        colors: {
          // 基础背景色
          backgroundLight: "#F6F6F6", // 浅灰
          backgroundDark: "#000000",  // 纯黑
  
          // 品牌主色系
          brandAccentLight: "#00739d", // 辅助蓝
          brandPrimary: "#006DAE",     // Monash 主蓝
          brandAccentDark: "#3c3c3c",  // 深灰
  
          // 卡片系统
          cardBackgroundLight: "#FFFFFF", // 纯白
          cardBackgroundDark: "#505050",  // 中灰
  
          // 功能色
          functionalLight: "#F6F6F6",     // 浅灰
          functionalAccent: "#00739d",    // 辅助蓝
          functionalAccentDark: "#3c3c3c", // 深灰
  
          // 文字系统
          textPrimary: "#3c3c3c",  // 深灰
          textSecondary: "#F6F6F6", // 浅灰
        },
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/forms"),
    ],
  };
  