import React from 'react';
import SEO from '../components/seo';
import Home from '../home/index';

const IndexPage = () => (
    <div>
        <SEO title="Vijay Consulting Services" keywords={[`gatsby`, `application`, `react`]} />
        <Home />
    </div>
);

export default IndexPage;
