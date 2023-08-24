import { useFormik } from "formik";

import {
    CardContent,
    TextField,
    InputAdornment,
    CardActions,
    Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Face6Rounded, SubjectRounded, EmailRounded } from "@mui/icons-material";
import { contactValidationSchema } from "../../validations/contactValidation";

const ContactForm = () => {
    const contactInputNames = {
        fullname: "",
        email: "",
        subject: "",
        message: "",
    }

    const formik = useFormik({
        initialValues: contactInputNames,
        onSubmit: values => {
            console.log("Form Values: ", values);
        },
        validationSchema: contactValidationSchema
    });

    return (
        <form
            autoComplete="off"
            onSubmit={formik.handleSubmit}
        >
            <CardContent>
                <Grid container>
                    <Grid
                        xs={12}
                        sx={{ direction: "ltr" }}
                    >
                        <Grid container spacing={2} columns={12}>
                            <Grid xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="warning"
                                    label="نام و نام خانوادگی"
                                    name="fullname"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.fullname
                                            ? formik.errors.fullname
                                            : null
                                    }
                                    error={Boolean(
                                        formik.touched.fullname &&
                                        formik.errors.fullname
                                    )}
                                    value={formik.values?.fullname}
                                    onChange={formik.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment
                                                position="end"
                                            >
                                                <Face6Rounded />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="warning"
                                    label="آدرس ایمیل"
                                    name="email"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.email
                                            ? formik.errors.email
                                            : null
                                    }
                                    error={Boolean(
                                        formik.touched.email &&
                                        formik.errors.email
                                    )}
                                    value={formik.values?.email}
                                    onChange={formik.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <EmailRounded />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="warning"
                                    label="عنوان"
                                    name="subject"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.subject
                                            ? formik.errors.subject
                                            : null
                                    }
                                    error={Boolean(
                                        formik.touched.subject &&
                                        formik.errors.subject
                                    )}
                                    value={formik.values?.subject}
                                    onChange={formik.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment
                                                position="end"
                                            >
                                                <SubjectRounded />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={6}
                                    size="small"
                                    color="warning"
                                    label="متن پیام"
                                    name="message"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.message
                                            ? formik.errors.message
                                            : null
                                    }
                                    error={Boolean(
                                        formik.touched.message &&
                                        formik.errors.message
                                    )}
                                    value={formik.values?.message}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{
                alignItems: "end",
                flexDirection: "column"
            }}>
                <Button
                    type="submit"
                    color="success"
                    variant="contained"
                    sx={{ mt: 2 }}
                    fullWidth
                >
                    ارسال کن
                </Button>
            </CardActions>
        </form>
    )
}

export default ContactForm;