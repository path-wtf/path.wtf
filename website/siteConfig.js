const siteConfig = {
  title: "Path.WTF",
  tagline: "این یه نقشه‌س!",
  url: "https://path-wtf.github.io/",
  baseUrl: "/",

  cname: "path.wtf",

  projectName: "path-wtf.github.io",
  organizationName: "path-wtf",

  headerLinks: [
    { doc: "gettingStart/intro", label: "آموزش‌ها" },
    { page: "help", label: "حمایت" },
    { blog: true, label: "بلاگ" }
  ],

  headerIcon: "img/logo.png",
  footerIcon: "img/logo.png",
  favicon: "img/favicon.png",

  colors: {
    primaryColor: "#1f1f1f",
    secondaryColor: "#ffc300"
  },

  /* Custom fonts for website */

  fonts: {
    myFont: ["IRANSans", "Times New Roman", "Serif"],
    myOtherFont: ["-apple-system", "system-ui"]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Path.WTF`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-buttons.js"
  ],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/logo.png",
  twitterImage: "img/logo.png",

  // analytics
  gaTrackingId: "UA-137253446-1",
  gaGtag: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  docsSideNavCollapsible: true

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
