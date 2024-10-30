# empty-project

Empty project.

Check the tailwind config add the html/php or blade file for watch thoses files
Also webpack.config.js for the dist path


```
{{-- <!-- Theme dark/light --> --}}
<div class="fixed top-4 right-4 z-50">
    <button id="theme-toggle" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    </button>
    <script>
            document.addEventListener('DOMContentLoaded', () => {
                const toggleBtn = document.getElementById('theme-toggle');
                const htmlElement = document.documentElement;
                const storedTheme = localStorage.getItem('theme');
                
                if (storedTheme === 'dark') {
                    htmlElement.classList.add('dark');
                }
                
                toggleBtn.addEventListener('click', () => {
                    const isDarkMode = htmlElement.classList.toggle('dark');
                    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
                    console.log('theme', localStorage.getItem('theme'));
                });
            });
    </script>
</div>
```

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

```sh
node dist/bundle.js
```

## Credits

Made with [createapp.dev](https://createapp.dev/)
