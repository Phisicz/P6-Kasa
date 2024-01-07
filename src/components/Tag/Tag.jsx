import React from "react";

import styles from "./tag.module.scss";

const Tag = ({ title }) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>{title}</p>
        </div>
    );
};

export default Tag;
