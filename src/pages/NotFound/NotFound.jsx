import React from "react";

import Error404 from "../../components/Error404/Error404";

import styles from "./notfound.module.scss";

const NotFound = () => {
    return (
        <>
            <section className={styles.container}>
                <Error404 />
            </section>
        </>
    );
};

export default NotFound;
