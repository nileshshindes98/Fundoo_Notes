import React, { useState } from "react";
import { Button, Checkbox, Paper, TextField, Typography } from "@mui/material/";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../assets/signUP.png";
import { signUp } from "../services/userService";

const SignUp = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        service: "advance",
        // showPassword: false,
    });

    const [showPassword, setShowPassword] = useState(false); // State to track password visibility
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });

        // Validate the field immediately on change
        const newErrors = { ...errors };

        if (name === "firstName") {
            if (!value.trim()) {
                newErrors.firstName = "first name is required";
            } else if (!/^[A-Za-z]+$/.test(value)) {
                newErrors.firstName = "first name is invalid";
            } else {
                newErrors.firstName = "";
            }
        }

        if (name === "email") {
            if (!value.trim()) {
                newErrors.email = "Username is required";
            } else if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
            ) {
                newErrors.email = "Username is invalid";
            } else {
                newErrors.email = "";
            }
        }

        if (name === "password") {
            if (!value) {
                newErrors.password = "Password is required";
            } else if (value.length < 8) {
                newErrors.password = "Password must be at least 8 characters";
            } else {
                newErrors.password = "";
            }
        }

        if (name === "confirmPassword") {
            if (value !== userDetails.password) {
                newErrors.confirmPassword = "Passwords do not match";
            } else {
                newErrors.confirmPassword = "";
            }
        }

        setErrors(newErrors);
    };

    const handleShowPasswordChange = (e) => {
        setShowPassword(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic client-side validation
        const newErrors = {};

        if (!userDetails.firstName.trim()) {
            newErrors.firstName = "first name is required";
        } else if (!/^[A-Za-z]+$/.test(userDetails.firstName)) {
            newErrors.firstName = "first name is invalid";
        }

        if (!userDetails.email.trim()) {
            newErrors.email = "Username is required";
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                userDetails.email
            )
        ) {
            newErrors.email = "Username is invalid";
        }

        if (!userDetails.password) {
            newErrors.password = "Password is required";
        } else if (userDetails.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        if (userDetails.password !== userDetails.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        // If there are errors, set the state and return
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        let response = await signUp(userDetails);
        console.log(response);
        //responce console check id
        //these id save in local storage
        // print data of userDetails this is use for my concern
        console.log("Form data submitted:", userDetails);
        navigate("/");
    };

    return (
        <Grid
            container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "50px",
                fontFamily: "roboto, Noto Sans Myanmar UI, arial, sans-serif",
            }}
        >
            <Grid
                item
                lg={8}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "space-between",
                    border: "1px solid grey",
                    borderRadius: 2,
                    gap: 3,
                    padding: 2,
                    "@media (max-width: 600px)": {
                        border: "none",
                        borderRadius: 0,
                    },
                }}
            >
                {/* Left Side */}
                <Grid item xs={12} sm={12}>
                    <Paper elevation={0} className="left-side">
                        {/* elevation that means form shadow */}
                        <Grid container spacing={2} justifyContent="flex-start">
                            <Grid item>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 8,
                                        fontSize: 30,
                                        alignItems: "center",
                                        fontFamily: "fantasy",
                                        fontWeight: "bold",
                                    }}
                                >
                                    <span style={{ color: "red" }}>F</span>
                                    <span style={{ color: "green" }}>U</span>
                                    <span style={{ color: "blue" }}>N</span>
                                    <span style={{ color: "yellow" }}>D</span>
                                    <span style={{ color: "orange" }}>O</span>
                                    <span style={{ color: "purple" }}>O</span>
                                </div>
                            </Grid>

                            <Grid item xs={12} align="flex-start">
                                <Typography variant="h5" style={{ fontSize: "1.4rem" }}>
                                    Create your Google account
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="First Name"
                                    name="firstName"
                                    value={userDetails.firstName}
                                    onChange={handleChange}
                                    helperText={errors.firstName ? errors.firstName : ""}
                                    error={Boolean(errors.firstName)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Last Name"
                                    name="lastName"
                                    value={userDetails.lastName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Username"
                                    name="email"
                                    value={userDetails.email}
                                    onChange={handleChange}
                                    helperText={
                                        errors.email
                                            ? errors.email
                                            : "you can use letters numbers & periods"
                                    }
                                    error={Boolean(errors.email)} // Add this to control error style
                                />
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    gap: 2,
                                    marginTop: 3,
                                }}
                            >
                                <Grid item sm={4.8}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Password"
                                        name="password"
                                        type={showPassword ? "text" : "password"} // Toggle password visibility
                                        value={userDetails.password}
                                        onChange={handleChange}
                                        helperText={errors.password ? errors.password : ""} // Display the validation error message
                                        error={Boolean(errors.password)} // Add this to control error style
                                    />
                                </Grid>
                                <Grid item sm={4.8}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Confirm"
                                        name="confirmPassword"
                                        type={showPassword ? "text" : "password"} // Toggle password visibility
                                        value={userDetails.confirmPassword}
                                        onChange={handleChange}
                                        helperText={errors.confirmPassword} // Display the validation error message
                                        error={Boolean(errors.confirmPassword)} // Add this to control error style
                                    />
                                </Grid>
                            </Grid>

                            <Grid item>
                                <p>
                                    Use 8 or more characters with a mix of letters, numbers, &
                                    symbols
                                </p>
                                <Checkbox
                                    id="show-password"
                                    checked={showPassword}
                                    onChange={handleShowPasswordChange} // Handle checkbox change
                                />
                                <label htmlFor="show-password">Show password</label>
                            </Grid>

                            <Grid item xs={12} sm={9} sx={{ display: "flex", gap: 29 }}>
                                <Typography>
                                    <span
                                        style={{ whiteSpace: "nowrap", textDecoration: "none" }}
                                    >
                                        <Link to="/">Sign in instead</Link>
                                    </span>
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit}
                                >
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* Right Side */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        "@media (max-width: 600px)": {
                            display: "none",
                        },
                    }}
                >
                    <Paper elevation={0} className="right-side">
                        <img
                            src={signUpImg}
                            alt="Sign Up"
                            className="google-drive-image"
                            style={{ width: "200px", height: "250px" }}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SignUp;
