import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DoneIcon from "@mui/icons-material/Done";

const JoinListItem = () => {
    return (
        <ListItem disablePadding>
            <ListItemIcon>
                <DoneIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum accusantium eaque, quibusdam minima ullam." />
        </ListItem>
    );
};

export default JoinListItem;
