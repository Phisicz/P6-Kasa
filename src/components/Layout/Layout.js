import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./layout.module.scss";

// le layout qui définir les marges du site sera importé dans App.jsx
const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
