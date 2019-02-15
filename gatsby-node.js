/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const fileNode = getNode(node.parent);
        actions.createNodeField({
            node,
            name: 'slug',
            value: fileNode.name.toLowerCase()
        });
    }
}

exports.createPages = ({ graphql, actions }) => {
    graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(edge => {
            actions.createPage({
                path: '/services/' + edge.node.fields.slug,
                component: path.resolve('./src/services/service.js'),
                context: {
                    slug: edge.node.fields.slug
                }
            });
        });
    });
}
