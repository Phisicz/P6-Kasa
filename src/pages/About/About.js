import React from "react";

import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

import collapseData from "../../assets/data/collapse.json";
import bannerAbout from "../../assets/img/Banner/banner-about.webp";

import styles from "./about.module.scss";

const About = () => {
    return (
        <>
            <section className={styles.banner}>
                <Banner image={bannerAbout} text="" />
            </section>
            <section className={styles.collapse}>
                {collapseData.map((data) => (
                    <Collapse key={data.id} title={data.title} text={data.content} />
                ))}
            </section>
        </>
    );
};

export default About;
