import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Carica le variabili d'ambiente dal file .env
import { config } from 'dotenv';
config();
//

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


