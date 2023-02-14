import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind-config'; // <- This!

const { theme }: any = resolveConfig(tailwindConfig);

export const THEME = {
    ...theme,
    size: {
        shape: 36,
    }
}
