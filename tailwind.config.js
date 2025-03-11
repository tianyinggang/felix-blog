/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{css}"
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
        sans: ["var(--font-jost)", "sans-serif"], // 匹配 Jost 的 CSS 变量
      },     
      extend: {
        colors: {
          // 基础背景色
          bglight: "#F6F6F6", // 浅灰 backgroundLight
          bgdark: "#000000",  // 纯黑 backgroundDark
  
          // 品牌主色系
          brandAccentLight: "#00739d", // 辅助蓝
          brandprimary: "#006DAE",     // Monash 主蓝brand Primary
          brandaccentdark: "#3c3c3c",  // 深灰 brandAccentDark
  
          // 卡片系统
          cardlight: "#FFFFFF", // 纯白
          carddark: "#505050",  // 中灰
  
          // 功能色
          funclight: "#F6F6F6",     // 浅灰
          funcaccent: "#00739d",    // 辅助蓝 functional Accent
          functionalAccentDark: "#3c3c3c", // 深灰
  
          // 文字系统
          textPrimary: "#3c3c3c",  // 深灰
          textlight: "#F6F6F6", // 浅灰
        },
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
    ],
  };
  