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
          href: 'https://swarm.ethereum.org',
          label: 'Swarm',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
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
            'https://github.com/ethersphere/enterprise.github.io/edit/master/docs/',
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
