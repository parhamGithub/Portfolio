import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from '@mui/icons-material';
import { useTheme } from "@emotion/react";


const Info = ({ children }) => {
    const theme = useTheme();

    return (
        <Typography
            variant="body1"
            color={
                theme.palette.mode === "dark"
                    ? "whitesmoke"
                    : "black"
            }
            textAlign="left"
            sx={{ mt: 2 }}
        >
            {children}
            < KeyboardArrowLeftRounded
                sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                }}
            />
        </Typography>
    )
}

const DevInfo = () => {
    return (
        <>
            <Info>
                نام و نام خاونارگی: پرهام افشاری
            </Info>
            <Info>سن: 26</Info>
            <Info>شهر: تهران</Info>
            <Info>parhamafshari666@gmail.com: ایمیل</Info>
            <Info>شماره موبایل: 09190211639</Info>
        </>
    )
}

export default DevInfo;