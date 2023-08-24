import { useState, useEffect } from "react"

import { Divider, Chip, Typography, Slide } from "@mui/material";


const CustomDivider = ({ bColor, cColor, icon, align, text }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, []);

    return (
        <Slide
            direction="down"
            in={loading}
            style={{
                transitionDelay: loading ? "200ms" : "0ms"
            }}
        >
            <Divider
                variant="middle"
                textAlign={align}
                sx={{
                    mt: 2,
                    "&::before, &::after": {
                        borderColor: bColor
                    }
                }}
            >
                <Chip
                    icon={icon}
                    color={cColor}
                    sx={{ p: 3 }}
                    label={
                        <Typography
                            variant="body1"
                            color="black"
                            sx={{ textAlign: "center" }}
                        >
                            {text}
                        </Typography>
                    }
                />
            </Divider>
        </Slide>
    )
}

export default CustomDivider;