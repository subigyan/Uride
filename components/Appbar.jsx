import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material/Link";

const pages = ["Home", "Process", "Blog", "Pricing", "Support"];

const Appbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            style={{
                background: "transparent",
                boxShadow: "none",
                color: "black",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ ml: 8, display: { xs: "none", md: "flex" } }}
                        style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            fontWeight: 800,
                            fontSize: "25px",
                        }}
                    >
                        <span style={{ color: "teal" }}>U</span>
                        <span style={{ color: "#FE636F" }}>ride</span>
                        <span style={{ color: "." }}>.</span>
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        <NextLink
                                            href={`/${page.toLowerCase()}`}
                                        >
                                            {page}
                                        </NextLink>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                        style={{
                            fontFamily: "'Times New Roman', Times, serif",
                            fontWeight: 800,
                            fontSize: "25px",
                        }}
                    >
                        <span style={{ color: "teal" }}>U</span>
                        <span style={{ color: "#FE636F" }}>ride</span>
                        <span style={{ color: "." }}>.</span>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 4,
                            justifyContent: "flex-end",
                            display: { xs: "none", md: "flex" },
                            mr: 8,
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    mx: 3,
                                }}
                                style={
                                    page.toLowerCase() === "support"
                                        ? { color: "#fff" }
                                        : {
                                              color: "#8f8f8f",
                                          }
                                }
                                variant={
                                    page.toLowerCase() === "support"
                                        ? "contained"
                                        : "text"
                                }
                            >
                                <NextLink href={`/${page.toLowerCase()}`}>
                                    {page}
                                </NextLink>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Appbar;
