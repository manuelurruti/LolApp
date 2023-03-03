import { createProxy } from 'vite';

export default {
  plugins: [
    createProxy({
      target: 'https://ddragon.leagueoflegends.com',
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/lol-api/, ''),
    }),
  ],
};