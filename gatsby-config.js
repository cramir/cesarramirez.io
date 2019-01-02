module.exports = {
    siteMetadata: {
        title: "cesarramirez.io",
        siteUrl: `http://cesarramirez.io`,
        description: "Cesar is a web developer, real estate investor, and security enthusiast based in New Jersey",
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-favicon`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
}