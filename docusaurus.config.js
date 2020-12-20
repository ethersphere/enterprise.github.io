module.exports = {
  title: 'Swarm Enterprise Hub',
  tagline: 'Swarm Enterprise Hub addresses questions that are relevant for enterprise use of Swarm such as regulatory compliance, GDPR, privacy, security and enterprise use-cases.',
  url: 'https://enterprise.ethswarm.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/swarm_logo.png',
  organizationName: 'Swarm Association', // Usually your GitHub org/user name.
  projectName: 'enterprise.ethswarm.org', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    announcementBar: {
      "id":"supportus",
      "content":"The content of this website is created collaboratively by the Swarm community (see <a href='/docs/acknowledgements'>acknowledgements page</a>). The views expressed on this website are therefore not the views of Swarm Association or its respective affiliates. Nothing within this website and post constitutes investment, legal, technical or other advice. Please read the full <a href='/docs/disclaimer'>disclaimer</a>.",
      "backgroundColor":"#fff",
      "textColor":"#000",
      "isCloseable":true,
    },
    navbar: {
      title: 'Swarm Enterprise Hub',
      logo: {
        alt: 'Swarm for Enterprise',
        src: 'img/swarm_logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},

        {
          label: 'Disclaimer',
          to: 'docs/disclaimer',
          position: 'right'
        },

        {
          href: 'https://swarm.ethereum.org',
          label: 'Swarm',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
    //    {
    //      title: 'Docs',
    //      items: [
    //        {
    //          label: 'Style Guide',
    //          to: 'docs/',
    //        },
    //      ],
    //    },
        {
          title: 'Community',
          items: [
            {
              label: 'BeeHive',
              href: 'https://beehive.ethswarm.org/',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/ethswarm',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ethswarm',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ethersphere/',
            },
          ],
        },
        {
          title: 'About this page',
          items: [
            {
              label: 'Disclaimer',
              to: 'docs/disclaimer',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Swarm Enterprise Hub.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ethersphere/enterprise.github.io/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ethersphere/enterprise.github.io/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
