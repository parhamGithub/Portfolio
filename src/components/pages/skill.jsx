import { Divider, Chip, Box, LinearProgress, Badge } from "@mui/material";

const Skill = ({ icon, color, name, value }) => {
    return (
        <>
            <Divider textAlign="right" sx={{
                "&::before, &::after": {
                    borderColor: `${color}.main`,
                },
                mt: 3
            }}>
                <Chip
                    icon={
                        <Box
                            component="img"
                            src={icon}
                            sx={{ height: 30 }}
                        />
                    }
                    color={color}
                    label={name}
                    sx={{ color: "#000", p: 3 }}
                />
            </Divider>
            <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
                <Box sx={{ minWidth: 35 }}>
                    <Badge badgeContent={`${value}%`} color={color} />
                </Box>
                <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress
                        variant="determinate"
                        value={value}
                        color={color}
                        sx={{
                            height: 10,
                            borderRadius: 2,
                        }}
                    >
                        {value}
                    </LinearProgress>
                </Box>
            </Box>
        </>
    )
}

export default Skill;