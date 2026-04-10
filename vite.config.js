import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // এখানে পরিবর্তন করা হয়েছে

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind এখন Vite প্লাগইন হিসেবে কাজ করবে
  ],
})
