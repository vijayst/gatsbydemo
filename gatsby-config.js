module.exports = {
    siteMetadata: {
        title: `Vijay Consulting Services`,
        description: `Vijay Consulting Services offers Web development services using React, Next and Gastby and App development services using React Native`,
        author: `@vijayst`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `services`,
                path: `${__dirname}/src/services`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-transformer-remark'
    ]
};
