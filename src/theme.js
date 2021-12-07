import { createTheme } from "@mui/material/styles";
import { teal, purple } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: teal,
        secondary: {
            main: "#FE636F",
        },
    },
    typography: {
        button: {
            textTransform: "none",
        },
    },
});

export default theme;
