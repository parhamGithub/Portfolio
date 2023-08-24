import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";


const SocialMediaIcons = ({ start }) => {
    const socialIconsList = [<GitHub />, <LinkedIn />, <MailOutline />]
    const socialLinksList = [
        "https://github.com/parhamGithub",
        "https://www.linkedin.com/in/parham-afshari-programmer",
        "mailto:www.parhamafshari666@gmail.com"
    ]
    const ariaLabelsList = ["Github", "Linkedin", "Gmail"]

    return (
        <>
            <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
                {socialIconsList.map((icon, index) => (
                    <IconButton key={index} aria-label={ariaLabelsList[index]}>
                        <a href={socialLinksList[index]}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {icon}
                        </a>
                    </IconButton>
                ))}
            </Box>
        </>
    )
}

export default SocialMediaIcons;