# React.js and tailwind css setup in 10 second



1.      npm create vite@latest my-project -- --template react
      
 2.     cd my-project
      
 3.     npm install -D tailwindcss postcss autoprefixer
      
4.      npx tailwindcss init -p
      
      
5.      npm install
      
      
 6.     npm run dev



7. #### tailwind.config.js

        /** @type {import('tailwindcss').Config} */
        export default {
          content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        }



8. #### index.css
  
        @tailwind base;
        @tailwind components;
        @tailwind utilities;


