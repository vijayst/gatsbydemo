import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './header.module.css';

const Header = ({ siteTitle }) => (
    <header
        style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
            <div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
