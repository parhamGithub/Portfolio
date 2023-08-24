import { useState, useEffect } from "react";

import {
    Card,
    CardContent,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import {
    SettingsEthernetRounded,
    HomeRepairServiceRounded,
    SchoolRounded
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import { devEdu } from "../constants/details";
import { DevXpTimeline } from "../components/pages";
import { CustomDivider } from "../components/common";


const Resume = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false);

    const theme = useTheme();

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, [])

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: theme.palette.mode === "dark"
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
                    bColor="error.main"
                    cColor="error"
                    icon={<SettingsEthernetRounded />}
                    align="center"
                    text="رزومه من"
                />
                <Grid container sx={{ mt: 4 }}>
                    <Grid xs={6}>
                        <CustomDivider
                            bColor="warning.main"
                            cColor="warning"
                            icon={<HomeRepairServiceRounded color="warning" />}
                            align="center"
                            text="تجربیات"
                        />
                        <DevXpTimeline
                            loading={loading}
                            color="warning"
                            icon={<HomeRepairServiceRounded color="warning" />}
                            data={devEdu}
                        />
                    </Grid>
                    <Grid xs={6}>
                        <CustomDivider
                            bColor="info.main"
                            cColor="info"
                            icon={<SchoolRounded color="info" />}
                            align="center"
                            text="تحصیلات"
                        />
                        <DevXpTimeline
                            loading={loading}
                            color="info"
                            icon={<SchoolRounded color="info" />}
                            data={devEdu}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default Resume;