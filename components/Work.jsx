import { style } from "@mui/system";
import React from "react";
import styles from "../styles/Work.module.css";
import workImg1 from "../assets/images/work1.svg";
import workImg2 from "../assets/images/work2.svg";
import workImg3 from "../assets/images/work3.svg";

const Work = () => {
    return (
        <section className={styles.workSection}>
            <h4 className={styles.subTitle}>How It Works?</h4>
            <h1 className={styles.title}>Our Working Process</h1>
            <div className={styles.works}>
                <div className={styles.work}>
                    <img src={workImg1.src} alt="" className={styles.workImg} />
                    <h3>Set Your Destination</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, nam.
                    </p>
                </div>
                <div className={styles.work}>
                    <img src={workImg2.src} alt="" className={styles.workImg} />

                    <h3>Set Your Destination</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, nam.
                    </p>
                </div>
                <div className={styles.work}>
                    <img src={workImg3.src} alt="" className={styles.workImg} />
                    <h3>Set Your Destination</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, nam.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Work;
