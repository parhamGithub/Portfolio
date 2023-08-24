import {
    Typography,
    Avatar,
    Card,
    CardContent,
    Box,
} from "@mui/material";
import Slider from "react-slick";

import { userComments } from "../../constants/details";

const CommentsSlider = () => {
    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: "linear"
    }

    return (
        <Slider {...options} >
            {
                userComments.map((user, index) => (
                    <Box
                        key={index}
                        component="div"
                        sx={{ justifyContent: "center" }}
                    >
                        <Avatar
                            src={user.avatar}
                            sx={{
                                height: 100,
                                width: 100,
                                margin: "0 auto"
                            }}
                        />
                        <Typography
                            variant="body1"
                            textAlign="center"
                            color="black"
                        >
                            {user.fullname}
                        </Typography>
                        <Typography
                            variant="body2"
                            textAlign="center"
                            color="black"
                            sx={{ mb: 2 }}
                        >
                            {user.jobTitle}
                        </Typography>
                        <Card
                            sx={{
                                backgroundColor: "lightsalmon",
                                width: 1 / 2,
                                m: "0 auto",
                                borderRadius: 5
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    textAlign="center"
                                >
                                    {user.comments}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))
            }
        </Slider>
    )
}

export default CommentsSlider;