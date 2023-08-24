import {
    Card,
    CardContent,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import {
    SchoolRounded
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

import { CustomDivider } from "../components/common";
import { ShowProjects } from "../components/pages";


const Projects = ({ helmetTitle }) => {
    const theme = useTheme();

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor:
                    theme.palette.mode === "dark"
                        ? "#262627"
                        : "whitesmoke",
                overflowY: "scroll"
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor="primary.main"
                    cColor="primary"
                    icon={<SchoolRounded />}
                    align="center"
                    text="دوره های من"
                />
                <Grid container columns={12} sx={{ mx: 3, mt: 3 }}>
                    <ShowProjects />
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Projects;