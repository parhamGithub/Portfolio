import {
    Typography,
    Slide,
} from "@mui/material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineConnector,
} from "@mui/lab";
import { useTheme } from "@mui/material/styles";


const DevXpTimeline = ({ loading, color, icon, data }) => {
    const theme = useTheme();

    return (

        <Timeline position="right" sx={{ direction: "ltr" }}>
            {
                data.map((item, index) => (
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading
                                ? `${index + 3}99ms`
                                : "0ms"
                        }}
                    >
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot
                                    color={color}
                                    variant="outlined"
                                >
                                    {icon}
                                </TimelineDot>
                                {index !== 2
                                    ?
                                    <TimelineConnector />
                                    :
                                    null}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography
                                    variant="caption"
                                    color="gray"
                                >
                                    {item.year}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color={
                                        theme.palette.mode === "dark"
                                            ? "whitesmoke"
                                            : "#262627"
                                    }
                                >
                                    {item.cart}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color={
                                        theme.palette.mode === "dark"
                                            ? "whitesmoke"
                                            : "#262627"
                                    }
                                >
                                    {item.major}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color={
                                        theme.palette.mode === "dark"
                                            ? "whitesmoke"
                                            : "#262627"
                                    }
                                >
                                    {item.place}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Slide>
                ))
            }
        </Timeline>

    )
};

export default DevXpTimeline;