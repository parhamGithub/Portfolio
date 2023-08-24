import { useState } from "react";

import { Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";

import { alphabetPersian } from "../../constants/alphabetPersian";
import avatar from "../../assets/avatar.jpg";
import { useTheme } from "@emotion/react";

import SocialMediaIcons from "../socialMediaIcons";
import ThemeActionButton from "../themeActionButton";
import { CustomAvatar } from "../common";

const SidebarHeader = () => {
    const [start, setStart] = useState(false);

    const theme = useTheme();

    return (
        <>
            <ThemeActionButton />
            <CustomAvatar
                avatar={avatar}
                size={200}
                fallback="PA"
            />
            <Typography variant="h6" color={
                theme.palette.mode === "dark"
                    ? "whitesmoke"
                    : "black"
            }>
                <Typography variant="caption" color="tomato">
                    {"{{ "}
                </Typography>
                <RandomReveal isPlaying
                    duration={2}
                    characterSet={alphabetPersian}
                    characters="پرهام افشاری"
                    onComplete={() => setStart(true)}
                />
                <Typography variant="caption" color="tomato">
                    {" }}"}
                </Typography>
            </Typography>
            {
                start && (
                    <Typography variant="caption" color={
                        theme.palette.mode === "dark"
                            ? "gray"
                            : "rgb(73, 72, 72)"
                    }>
                        <Typography variant="caption" color="tomato">
                            {"[[ "}
                        </Typography>
                        <RandomReveal
                            isPlaying
                            duration={2}
                            characterSet={alphabetPersian}
                            characters="برنامه نویس فرانت اند" />
                        <Typography variant="caption" color="tomato">
                            {" ]]"}
                        </Typography>
                    </Typography>
                )
            }
            <SocialMediaIcons start={start} />
        </>
    )
}

export default SidebarHeader;