import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";

import Main from "../components/Main";
import Work from "../components/Work";
import Join from "../components/Join";
import Appbar from "../components/Appbar";

export default function Home() {
    return (
        <div className={styles.container}>
            <Appbar />
            <Head>
                <title>Uride.</title>
            </Head>
            <Main />
            <Work />
            <Join />
        </div>
    );
}
