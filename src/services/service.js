import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Service(props) {
    const {
        html,
        frontmatter: { title }
    } = props.data.markdownRemark;

    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
