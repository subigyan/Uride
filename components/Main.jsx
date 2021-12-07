import React from "react";
import { Button, TextField, Container } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import mainStyle from "../styles/Main.module.css";
import mainImg from "../assets/images/main.svg";

const main = () => {
    return (
        <div className={mainStyle.main}>
            <div className={mainStyle.mainInfo}>
                <div className={mainStyle.circle}></div>
                <h1 className={mainStyle.title}>
                    Ride Sharing Can Save Time and Money
                </h1>
                <h4 className={mainStyle.subTitle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                    eligendi?
                </h4>
                <div className={mainStyle.search}>
                    <TextField
                        id="input-with-icon-textfield"
                        placeholder="Your Departure"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOnIcon fontSize="small" />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        className={mainStyle.input}
                        // sx={{ p: 0 }}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ height: "30px", p: 2 }}
                        className={mainStyle.searchBtn}
                    >
                        Search For Rider
                    </Button>
                </div>
                <div className={mainStyle.urideStats}>
                    <div className={mainStyle.stat}>
                        <h3>100,000+</h3>
                        <p>Ride Requests</p>
                    </div>
                    <div className={mainStyle.stat}>
                        <h3>100,000+</h3>
                        <p>Ride Requests</p>
                    </div>
                    <div className={mainStyle.stat}>
                        <h3>100,000+</h3>
                        <p>Ride Requests</p>
                    </div>
                </div>
            </div>
            <div className={mainStyle.imageContainer}>
                <img
                    src={mainImg.src}
                    alt="main-img"
                    className={mainStyle.mainImg}
                />
            </div>
        </div>
    );
};

export default main;
