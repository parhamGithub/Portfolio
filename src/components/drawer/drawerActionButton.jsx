import { useContext } from "react";

import { Fab, Box } from "@mui/material";
import { red } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";

import MainContext from "../../context";


const DrawerActionButton = () => {
    const { setDrawerOpen } = useContext(MainContext);

    return (
        <Box
            sx={{
                display: {
                    position: "absolute",
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none"
                }
            }}
        >
            <Fab
                color="primary"
                aria-label="Sidebar"
                size="small"
                sx={{
                    m: 2,
                    background: red[900]
                }}
                onClick={() => setDrawerOpen(true)}
            >
                <MenuRounded />
            </Fab>
        </Box>
    )
}

export default DrawerActionButton;