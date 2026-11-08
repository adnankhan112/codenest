// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CodeNest',
  tagline: 'Learn Programming Step by Step',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://adnankhan112.github.io',
  baseUrl: '/codenest/',

  organizationName: 'adnankhan112',
  projectName: 'codenest',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'CodeNest',
        logo: {
          alt: 'CodeNest Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            href: 'https://github.com/adnankhan112/codenest',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {label: 'HTML', to: '/docs/html/intro'},
              {label: 'CSS', to: '/docs/css/intro'},
              {label: 'JavaScript', to: '/docs/javascript/intro'},
              {label: 'Python', to: '/docs/python/intro'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'SQL', to: '/docs/sql/intro'},
              {label: 'PHP', to: '/docs/php/intro'},
              {label: 'Node.js', to: '/docs/nodejs/intro'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CodeNest. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;