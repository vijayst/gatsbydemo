import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import styles from './index.module.css';

const IndexPage = () => (
    <div>
        <SEO title="Vijay Consulting Services" keywords={[`gatsby`, `application`, `react`]} />
        <div className={styles.home}>
            <div className={styles.center}>
                <div className={styles.company}>
                    Vijay Consulting Services
                </div>
                <p className={styles.offering}>We offer custom application development using React framework</p>
                <button className={styles.button}><Link to="/services">View our services</Link></button>
            </div>
        </div>
    </div>
);

export default IndexPage;
