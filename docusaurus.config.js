module.exports = {
  title: "Glasswall Infosec and IT",
  tagline: "",
  url: "https://k8-proxy.github.io",
  baseUrl: "/k8-proxy-documentation/",
  favicon: "img/favicon.ico",
  organizationName: "filetrust", // Usually your GitHub org/user name.
  projectName: "glasswall-it-infosec-site", // Usually your repo name.
  onBrokenLinks: 'log',
  themeConfig: {
    navbar: {
      title: "Glasswall IT and Infosec",
      logo: {
        alt: "Glasswall Logo",
        src: "img/glasswall_logo_blue.png"
      },
      items: [
        {
          to: "docs/products/rebuild-api/product-overview",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        {
          href: "https://medium.com/glasswall-engineering",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/filetrust",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/products/cloud-sdk/rebuild/rebuild-quickstart",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/glasswall",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/filetrust",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/glasswallglobal",
            },
			           {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/glasswall-solutions-limited/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Glasswall Solutions Ltd. Built with Docusaurus.`,
    },
    gtag: {
      trackingID: 'UA-165717322-1'
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
