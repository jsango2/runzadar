module.exports = {
  siteMetadata: {
    title: `Škola trčanja Zadar - Sa osmijehom do cilja`,
    author: {
      name: `Sutra.hr`,
      summary: `Web Dev`,
    },
    description: `Prva Škola trčanja u Zadru. Od potpunog početnika do naprednok trkača. Provjerite zašto je Zadar postao grad trčanja. `,
    siteUrl: `https://wwww.runzadar.com`,
    image: "../../content/assets/images/hero.png",
    twitterImage: "../../content/assets/images/twitter-frame.png ",
    keywords:
      "Trčanje, trening, vježbanje na otvorenom, utrke, mararton, polumaraton, zadar night run, zadar christmas run, wings for life",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WPGraphQL",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wpgraphql",
        // Url to query from
        url: "https://sutrashop.com.hr/graphql",
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url: "http://sutrashop.com.hr/graphql",
    //   },
    // },
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     baseUrl: "sutrashop.com.hr/graphql",
    //     protocol: "http",
    //     hostingWPCOM: false,
    //     useACF: true,
    //     verboseOutput: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:400,600,700,800,900`, `Bangers`],
        display: "swap",
      },
    },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     google: {
    //       families: ["Montserrat:300,500,700,900", "Bangers"],
    //     },
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RunZadar.com`,
        short_name: `RunZadar`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#6399`,
        display: `minimal-ui`,
        icon: `src/images/hero.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
