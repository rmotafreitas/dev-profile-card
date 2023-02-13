import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind-config'; // <- This!

export const { theme: THEME }: any = resolveConfig(tailwindConfig);
