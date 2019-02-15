import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import styles from './services.module.css';

export default function Services() {
    return (
        <Layout>
            <div>
                <h1>Services</h1>
                <p>View our service offerings:</p>
                <ul className={styles.services}>
                    <li><Link to="/services/react-app">React apps</Link></li>
                    <li><Link to="/services/react-native-app">React Native apps</Link></li>
                    <li><Link to="/services/nextjs-app">Next apps</Link></li>
                    <li><Link to="/services/gatsby-app">Gatsby apps</Link></li>
                </ul>
            </div>
        </Layout>
    )
}