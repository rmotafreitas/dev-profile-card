import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind-config'; // <- This!

const { theme }: any = resolveConfig(tailwindConfig);

export const THEME = {
    ...theme,
    size: {
        shape: 36,
    }
}

export const TEXT_COLORS = {
    red: "text-red-700 bg-red-100 border-red-300",
    blue: "text-blue-700 bg-blue-100 border-blue-300",
    gray: "text-gray-700 bg-gray-100 border-gray-300",
    green: "text-green-700 bg-green-100 border-green-300",
    black: "text-black-700 bg-black-100 border-black-300",
    yellow: "text-yellow-700 bg-yellow-100 border-yellow-300",
}
