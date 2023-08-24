import { useState, useEffect } from "react";

import {
    Slide,
    Card,
    CardContent,
    CardActionArea,
    CardActions,
    CardMedia,
    Grid,
    Typography,
    Button
} from "@mui/material";
import EllipsisText from "react-ellipsis-text";

import { projectsData } from "../../constants/projectsData";

const ShowProjects = () => {
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, []);

    return (
        <>
            {
                projectsData.map((project, index) => (
                    <Grid
                        key={index}
                        xs={12} sm={6} md={6} lg={6}
                        sx={{ px: 2, mb: 2, mt: 1 }}
                    >
                        <Slide
                            direction="up"
                            in={loading}
                            style={{
                                transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                            }}
                        >
                            <Card
                                sx={{
                                    maxWidth: 400,
                                    height: 470,
                                    backgroundColor: "steelblue",
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{
                                            width: "400px"
                                        }}
                                    />
                                    <CardContent
                                        sx={{ height: "4rem" }}
                                    >
                                        <Typography
                                            variant="body1"
                                            textAlign="left"
                                            gutterBottom
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            textAlign="left"
                                            gutterBottom
                                            sx={{
                                                direction: "ltr"
                                            }}
                                        >
                                            <EllipsisText
                                                text={project.info}
                                                length={"100"}
                                            />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        href={project.link}
                                        size="small"
                                        color="primary"
                                        target="_blank"
                                    >
                                        اطلاعات بیشتر
                                    </Button>
                                </CardActions>
                            </Card>
                        </Slide>
                    </Grid>
                ))
            }
        </>
    )
}

export default ShowProjects;