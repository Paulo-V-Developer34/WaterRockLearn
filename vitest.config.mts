//Devemos modificar algumas coisas para fazer o Vitest funcionar, como modificar o tsconfig.json e incluir o vitest nos scripts do package.json
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.mts', // (Opcional, mas recomendado)
  },
})