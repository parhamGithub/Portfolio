import { Avatar } from "@mui/material"

const CustomAvatar = ({ avatar, size, fallback }) => {
    return (
        <Avatar
            alt="عکس-پرهام-افشاری"
            src={avatar}
            variant="rounded"
            sx={{
                height: size, width: size, margin: "0 auto", mb: 2,
                display: {
                    xl: "block",
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none"
                },
            }}
        >
            {fallback}
        </Avatar>
    )
}

export default CustomAvatar;