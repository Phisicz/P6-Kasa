import React from "react";

import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

import bannerHome from "../../assets/img/Banner/banner-home.webp";

import styles from "./home.module.scss";

const Home = () => {
    return (
        <>
            <section className={styles.banner}>
                <Banner
                    image={bannerHome}
                    text={`Chez vous,
                    partout et ailleurs`}
                />
            </section>
            <section className={styles.gallery}>
                <Gallery />
            </section>
        </>
    );
};

export default Home;
