// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Divya Mohan',
  //tagline: 'Cloud Native Leader. Advisor. Writer.',
  url: 'https://divyamohan.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'divya-mohan0209', // Usually your GitHub org/user name.
  projectName: 'divyamohan.com', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'divyamohan.com',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Home',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/divya-mohan0209/talks/blob/main/speaker-rider.md',
            label: 'Speaker Rider',
            position: 'right',
          },
          {
            href: 'https://paper.li/Divya_Mohan02/1576768076',
            label: 'Newsletter',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Say hello',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/divya-mohan0209',
              },
              {
                label: 'Mastodon',
                href: 'https://hachyderm.io/divya-mohan0209',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Divya_Mohan02',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/divya-mohan0209',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Divya Mohan.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
