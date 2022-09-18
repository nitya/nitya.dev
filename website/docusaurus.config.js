// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// CONFIG: Set for use in themeConfig: prism
//    Pick: https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */

// USAGE: Config object can be accessed via React context as `{siteConfig}`
//   See: https://docusaurus.io/docs/configuration#custom-configurations
const config = {

  // CONFIG: Add Custom Fields - globally reference them from siteConfig
  //    See: https://docusaurus.io/docs/deployment#using-environment-variables
  customFields: {
    bio: "Nitya Narasimhan is a PhD and Polyglot with 25+ years of experience building systems & software, and 10+ years of expertise in building communities and illustrating technology.",
  },

  // CONFIG: Landing Pages uses this (also globally via siteConfig)
  title: "Nitya Narasimhan, PhD",
  tagline: "Research - Engineering - Advocacy - Illustration",

  // CONIFIG; GitHub Pages
  url: "https://nitya.dev",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "nitya", 
  projectName: "nitya.dev", 
  deploymentBranch: 'gh-pages',

  // CONFIG: Early detection for site health
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // CONFIG: Localization if supporting multiple languages
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // CONFIG: theme = set properties for UI like navbar, footer, docs, copyright etc.
  //    See: https://docusaurus.io/docs/api/docusaurus-config#themeConfig
  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // CONFIG: sidebar
      //    See:
      docs :{
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      // CONFIG: default theme color mode
      //    See:
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // CONFIG: navbar logo, items, style, stickiness
      //    See: https://docusaurus.io/docs/next/api/themes/configuration#navbar
      navbar: {
        title: "nitya.dev",
        logo: {
          alt: "Nitya Narasimhan Profile picture",
          src: "img/logo.jpeg",
          href: 'https://nitya.dev/',
          target: '_self',
          width: 32,
          height: 32,
          //style: {border: 'solid white'},
        },
        style: 'primary',
        items: [
          // FIXME: TEMPORARILY DISABLE BLOG
          //{ label: "Tutorial", position: "left", type: "doc", docId: "intro",},
          { label: "Home",  position: "left", to: "/landing",},
          { label: "Blog",  position: "left", to: "/",},
          { 
            href: 'https://github.com/nitya/nitya.dev',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          // if you use search
          {
            type: 'search',
            position: 'right',
          },
          // custom html
          {
            type: 'html',
            position: 'right',
            value: '<button><a href="https://github.com/nitya/nitya.dev/issues/new/choose"> Report Issues </a></button>',
          },
        ],
      },

      // CONFIG: 
      //    See:
      footer: {
        style: "light",
        links: [
          { label: `Twitter`, to: 'https://twitter.com/nitya' },
          { label: `GitHub`, to: 'https://github.com/nitya' },
          { label: `LinkedIn`, to: 'https://linkedin.com/in/nityan' },
          { label: `Dev.to`, to: 'https://dev.to/nitya' },
          { label: `SketchTheDocs`, to: 'https://sketchthedocs.dev' },
          { label: `Visual Guides`, to: 'https://cloud-skills.dev' },
          { label: `In #30Days`, to: 'https://in30Days.dev' },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nitya Narasimhan, PhD - ❤️ Built with Docusaurus, Undraw.co`,
      },

      // CONFIG: the prism-react-renderer to highlight code blocks, add magic comments (influence code highlighting)
      // Change: 'theme' and `darkTheme` constants at top of this config file
      //    See: https://docusaurus.io/docs/next/api/themes/configuration#codeblock-theme
      //    See: https://docusaurus.io/docs/next/markdown-features/code-blocks#custom-magic-comments
      //    For additional languages e.g., 'csharp','java','js','typescript','python', 'rust', 'html','css', 'go', 'dart'
      //    See: https://docusaurus.io/docs/next/markdown-features/code-blocks#supported-languages 
      //    See: https://prismjs.com/#supported-languagescshar
      prism: {
        theme:  lightCodeTheme,      
        darkTheme: darkCodeTheme,   
        additionalLanguages: ['csharp','java', 'python' ],
      },

      // CONFIG: Use sparingly to drive attention to a specific call-to-action or new feature
      //    See: https://docusaurus.io/docs/next/api/themes/configuration#announcement-bar
      announcementBar: {
        id: 'Follow me on LinkedIn',
        content:
          '<b> Follow me on <a href="https://www.linkedin.com/in/nityan/recent-activity/posts/"><b>#in/nityan</b></a>  or <a href="https://twitter.com/nitya"><b>@nitya</b></a> for latest news and activity updates</b> ',
        backgroundColor: '#000010',
        textColor: '#ffffff',
        isCloseable: false,
      },
    }),

  // CONFIG: Set presets for chosen theme
  presets: [
    [

      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({  // ------- Start presets-classic options -------

        // CONFIG: docs = collections of pages, tutorials, documentation
        //    See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
        // FIXME: TEMPORARILY DISABLE BLOG
        // docs: { sidebarPath: require.resolve("./sidebars.js"), },
        docs: false,

        // CONFIG: blog = timestamped pages, tags, site feed 
        //    See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
        blog: {
          routeBasePath: '/', // FIXEME: Remove later - Serve the blog at the site's root
          blogTitle: 'Learn in #30DaysOfServerless',
          blogDescription: 'Explore Serverless Technologies, Microservices Architectures, and Developer Tools - to build your Cloud Native Applications at scale!',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Recent Articles',
          tagsBasePath: 'tags',
          archiveBasePath: 'archive',
          postsPerPage: 1,
          showReadingTime: true,
          sortPosts: 'ascending'
        },

        // CONFIG: theme = currently using `classic`
        //    See: https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },

      }), // ------- End preset-classic options -------

    ],
  ],

};

module.exports = config;
