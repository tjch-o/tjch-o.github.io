import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'tokyo-night': '#6962d2',
                'tokyo-night-light': '#989eec',
            },
            backgroundColor: {
                'royal-blue': '#4169e1',
                'aq-blue': '#4166f5',
                'azure-blue': '#007fff',
                'navy-blue': '#000080',
                'rhino-blue': '#2b2e63',
                'tokyo-night': '#23283B',
                'tokyo-night-light': '#8482e6',
            },
            listStyleType: {
                square: 'square',
            },
            fontFamily: {
                inter: ['var(--font-inter)', 'sans-serif'],
                'fira-sans': ['var(--font-fira-sans)', 'sans-serif'],
                poppins: ['var(--font-poppins)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
