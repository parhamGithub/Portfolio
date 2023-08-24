import { useEffect, useRef, useCallback, useState } from "react";

import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import TextTransition, { presets } from 'react-text-transition';
import { Helmet } from "react-helmet-async";

import { links } from "../constants/particles";

import bg from "../assets/bg03.jpeg";

const Home = ({ helmetTitle }) => {
    const nameEl = useRef(null);
    const infoEl = useRef(null);
    const [index, setIndex] = useState(0);

    const strings = [
        "توسعه دهنده فرانت هستم",
        "برنامه نویس هستم",
        "برنامه نویس پایتون هستم",
        "برنامه نویس جاوا اسکریپت هستم"
    ];

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["پرهام افشاری"],
            typeSpeed: 110,
            backSpeed: 80,
            backDelay: 50,
            showCursor: false,
        });

        const stringsTransition = setInterval(() => {
            setIndex(index => index + 1);
        }, 3000);

        return () => {
            typedName.destroy();
            clearInterval(stringsTransition);
        };
    }, []);

    const particlesInit = useCallback(async engin => {
        await loadFull(engin);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Box sx={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
                options={links}
            />
            <Box component="div" sx={{ display: "flex", mt: 10 }}>
                <Typography variant="h3" color="#F93C92">
                    {"{{"}
                </Typography>

                <Typography ref={nameEl} variant="h3" color="tomato" ></Typography>
                <Typography variant="h3" color="#F93C92">
                    {"}}"}
                </Typography>
            </Box>
            <Box component="div" sx={{ display: "flex" }}>
                <TextTransition springConfig={presets.wobbly}>
                    <Typography
                        ref={infoEl}
                        variant="h4"
                        color="whitesmoke"
                        sx={{
                            textDecoration: "underline",
                            textDecorationColor: "#F93C99",
                            mt: 4,
                        }}
                    >
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>
                <Typography variant="h4" color="whitesmoke" sx={{ mt: 4, mr: 1 }}>
                    من یک
                </Typography>
            </Box>
        </Box>
    )
}

export default Home;