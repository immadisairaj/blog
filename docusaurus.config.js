// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blog',
  tagline: 'blogs by immadisairaj',
  url: 'https://immadisairaj.github.io',
  baseUrl: '/blog/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'immadisairaj', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

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
        googleAnalytics: {
          trackingID: 'UA-168944360-2',
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'G-3DX3BMFPGD',
          anonymizeIP: true,
        },
        docs: false,
        blog: {
          blogTitle: 'Sai Rajendra Immadi',
          blogDescription: 'blogs by immadisairaj',
          showReadingTime: true,
          blogSidebarCount: 9,
          postsPerPage: 5,
          path: './blog',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/immadisairaj/blog/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [

  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      metadata: [{ name: 'robots', content: 'max-image-preview:large' }],

      algolia: {
        // The application ID provided by Algolia
        appId: 'PUN9RZXQWB',
        // Public API key: it is safe to commit it
        apiKey: '2ba18e456b0435291e78d325601f9360',
        indexName: 'immadisairaj',
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
        //... other Algolia params
      },

      navbar: {
        title: 'Blog',
        logo: {
          alt: 'Sai Rajendra Immadi',
          src: 'img/logo.png',
          width: 32,
          height: 32,
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://immadisairaj.github.io', label: 'Home', position: 'left',},
          {to: '/blog-archive', label: 'Blog Archive', position: 'left',},
          {
            href: 'https://github.com/immadisairaj',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Support Me',
            items: [
              {
                html: `<div style="display: flex; align-items: center;"><iframe src="https://github.com/sponsors/immadisairaj/button" title="Sponsor immadisairaj" height="35" width="116" style="border: 0;"></iframe><div>&nbsp;on GitHub</dib>`
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/immadisairaj',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@immadisairaj',
              },
              {
                label: 'Website',
                href: 'https://immadisairaj.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sai Rajendra Immadi. Built with Docusaurus.`,
      },

      colorMode: {
        // defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
