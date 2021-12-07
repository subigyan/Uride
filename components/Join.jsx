import React from "react";
import styles from "../styles/Join.module.css";
import List from "@mui/material/List";
import join from "../assets/images/join.svg";
import { Button } from "@mui/material";
import JoinListItem from "./JoinListItems";

const Join = () => {
    return (
        <section className={styles.joinSection}>
            <div className={styles.joinImgContainer}>
                <img src={join.src} className={styles.joinImg} />
            </div>
            <div className={styles.joinInfo}>
                <div className={styles.info}>
                    <h4 className={styles.subTitle}>Become a driver?</h4>
                    <h1 className={styles.title}>Join As a Driver</h1>
                    <List>
                        <JoinListItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum accusantium eaque, quibusdam minima ullam." />
                        <JoinListItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum accusantium eaque, quibusdam minima ullam." />
                        <JoinListItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum accusantium eaque, quibusdam minima ullam." />
                    </List>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ height: "30px", p: 2 }}
                        className={styles.btn}
                    >
                        Search For Rider
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Join;
