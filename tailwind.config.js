import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import daisyui from 'daisyui'; // ✅ DaisyUI importeren
import flowbite from 'flowbite/plugin'; // ✅ Flowbite importeren

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/flowbite/**/*.js', // ✅ Flowbite componenten insluiten
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        forms,
        daisyui,  // ✅ DaisyUI toevoegen
        flowbite, // ✅ Flowbite toevoegen
    ],
};
