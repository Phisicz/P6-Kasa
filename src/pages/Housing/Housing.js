import React from "react";

import HousingDisplay from "../../components/HousingDisplay/HousingDisplay";

import styles from "./housing.module.scss";

const Housing = () => {
    return (
        <>
            <section className={styles.container}>
                <HousingDisplay />
            </section>
        </>
    );
};

export default Housing;
