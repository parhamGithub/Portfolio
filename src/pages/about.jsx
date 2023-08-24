import { CodeRounded, SelfImprovementRounded } from '@mui/icons-material';
import {
    Card,
    CardContent,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";

import { Skills, DevWorkCount, DevInfo } from "../components/pages";
import { CustomAvatar, CustomDivider } from "../components/common";
import avatar from "../assets/avatar.jpg";


const About = ({ helmetTitle }) => {
    const theme = useTheme();

    return (
        <Card sx={{
            height: "100vh",
            backgroundColor: theme.palette.mode === "dark"
                ? "#262627"
                : "whitesmoke",
            overflowY: "scroll",
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{ mx: 3 }}>
                    <Grid xs={12} sm={8} lg={8} xl={8}>
                        <CustomDivider
                            bColor="primary.main"
                            cColor="primary"
                            icon={<CodeRounded />}
                            align="right"
                            text="توسعه دهنده فرانت و برنامه نویس جاوا اسکریپت"
                        />
                        <Grid container
                            sx={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <Grid xs={4} sm={4} md={3} lg={3} sx={{
                                display: {
                                    "xs": "none",
                                    "sm": "block",
                                    "md": "block"
                                }
                            }}
                            >
                                <DevWorkCount />
                            </Grid>
                            <Grid xs={12} sm={8} md={9} lg={9}>
                                <DevInfo />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                        <CustomAvatar
                            avatar={avatar}
                            size={250}
                            fallback="PA"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1 }}>
                        <CustomDivider
                            bColor="secondary.main"
                            cColor="secondary"
                            icon={<SelfImprovementRounded />}
                            align="center"
                            text="مهارت های من"
                        />
                        <Skills />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default About;