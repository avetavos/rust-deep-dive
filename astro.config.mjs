// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://avetavos.github.io',
  base: '/rust-deep-dive',
  output: 'static',
  integrations: [starlight({
      title: 'Rust Deep Dive',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/rust-deep-dive/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/rust-deep-dive/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/rust-deep-dive/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/rust-deep-dive/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#CE422B' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Rust Deep Dive" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/rust-deep-dive/sw.js',{scope:'/rust-deep-dive/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/rust-deep-dive' }],
      sidebar: [
        { label: 'Basics & Syntax', items: [{ autogenerate: { directory: 'basics' } }] },
        { label: 'Ownership & Borrowing', items: [{ autogenerate: { directory: 'ownership-borrowing' } }] },
        { label: 'Structs, Enums & Pattern Matching', items: [{ autogenerate: { directory: 'structs-enums-matching' } }] },
        { label: 'Traits & Generics', items: [{ autogenerate: { directory: 'traits-generics' } }] },
        { label: 'Error Handling', items: [{ autogenerate: { directory: 'error-handling' } }] },
        { label: 'Collections & Iterators', items: [{ autogenerate: { directory: 'collections-iterators' } }] },
        { label: 'Concurrency, Testing & Cargo', items: [{ autogenerate: { directory: 'concurrency-testing-cargo' } }] },
      ],
      }), preact()],
});