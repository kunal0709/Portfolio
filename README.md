# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
























@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

@import "tailwindcss";

@theme {
  --font-display: "Urbanist", sans-serif;
  --breakpoint-3xl: 1920px;
  --color-primary: #8dff69;
}

@layer base {
  html {
    font-family: var(--font-display);
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgb(0, 0, 0);
    color: #ffffff;
    overflow-x: hidden;
  }

  /* Custom scrollbar (WebKit) */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #0a0a0a;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #8dff69, #6fe047);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #a8ff8d, #5bc92e);
  }

  /* Firefox Scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: #6fe047 #0a0a0a;
  }

  /* Hide scrollbar for carousel */
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* animation keyframes */

  @keyframes fadeIn{
    from{
      opacity: 0;
    }

     to{
      opacity: 1;
     }

  }

  @keyframes pulse{
    0%,
    100%{
     opacity: 0.3;
    }

    50%{
      opacity: 0.5;
    }


     /* utility classse */
  }


  .aniate-fedeIn{
      animation:fadeIn 0.5 ease-out ;
   }


   .animation-pulse{
    animation: pulse 3s ease-in-out infinite;
   }

   @keyframes spin{
    from{
      transform:rotate(0deg)
    }
    to{
      transform:rotate(360deg)
    }
   }

   /* line clamp */

   .lineclamp-2{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient:vertical ;
    overflow: hidden;
   }


   .line-clamp-3{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
   }

}
