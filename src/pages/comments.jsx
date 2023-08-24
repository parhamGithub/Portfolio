//-------------------------------- Just for practice
import {
    Card,
    CardContent,
    Box,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import {
    ForumRounded
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { CustomDivider } from "../components/common";
import { CommentsSlider } from "../components/pages";


const Comments = ({ helmetTitle }) => {
    const theme = useTheme();

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: theme.palette.mode === "dark"
                    ? "#262627"
                    : "whitesmoke",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor="success.main"
                    cColor="success"
                    icon={<ForumRounded />}
                    align="center"
                    text="نظرات"
                />
                <Box
                    component="div"
                    sx={{ mt: 10, justifyContent: "center", alignItems: "center" }}
                >
                    <CommentsSlider />
                </Box>
            </CardContent>
        </Card>
    )
}

export default Comments;