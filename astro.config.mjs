// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://deep-dive.avetavos.com',
  base: '/rust',
  output: 'static',
  integrations: [starlight({
      title: 'Rust Deep Dive',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/rust/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/rust/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/rust/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/rust/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#CE422B' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Rust Deep Dive" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/rust/sw.js',{scope:'/rust/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/rust-deep-dive' }],
      sidebar: [
        { label: 'Basics & Syntax', translations: { th: 'พื้นฐานและ Syntax' }, items: [{ autogenerate: { directory: 'basics' } }] },
        { label: 'Ownership & Borrowing', translations: { th: 'Ownership และ Borrowing' }, items: [{ autogenerate: { directory: 'ownership-borrowing' } }] },
        { label: 'Structs, Enums & Pattern Matching', translations: { th: 'Struct, Enum และ Pattern Matching' }, items: [{ autogenerate: { directory: 'structs-enums-matching' } }] },
        { label: 'Traits & Generics', translations: { th: 'Trait และ Generic' }, items: [{ autogenerate: { directory: 'traits-generics' } }] },
        { label: 'Error Handling', translations: { th: 'การจัดการ Error' }, items: [{ autogenerate: { directory: 'error-handling' } }] },
        { label: 'Collections & Iterators', translations: { th: 'Collection และ Iterator' }, items: [{ autogenerate: { directory: 'collections-iterators' } }] },
        { label: 'Concurrency, Testing & Cargo', translations: { th: 'Concurrency, Testing และ Cargo' }, items: [{ autogenerate: { directory: 'concurrency-testing-cargo' } }] },
        { label: 'Runtime Internals', translations: { th: 'กลไกภายใน Runtime' }, items: [{ autogenerate: { directory: 'runtime-internals' } }] },
        { label: 'Reading & Reviewing Rust', translations: { th: 'อ่านและรีวิวโค้ด Rust' }, items: [{ autogenerate: { directory: 'reading-rust' } }] },
        { label: 'Glossary', translations: { th: 'อภิธานศัพท์' }, link: 'glossary' },
      ],
      }), preact()],
});