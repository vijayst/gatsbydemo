import React from 'react';
import styles from './index.module.css';
import { Link } from 'gatsby';

export default function Home() {
    return (
        <div className={styles.home}>
            <div>
                <div className={styles.company}>
                    Vijay Consulting
                </div>
                <ul className={styles.services}>
                    <li><Link to="/services/react-apps">React apps</Link></li>
                    <li><Link to="/services/react-apps">React Native apps</Link></li>
                    <li><Link to="/services/react-apps">Next apps</Link></li>
                    <li><Link to="/services/react-apps">Gatsby apps</Link></li>
                </ul>
            </div>
        </div>
    )
}