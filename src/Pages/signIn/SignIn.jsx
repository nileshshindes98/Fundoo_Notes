import React, { useState } from "react";
import { Button, TextField } from "@mui/material/";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "E:/CFP/ReactJs/fn/src/services/UserService.jsx";

const SignIn = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }

    // Get the navigation function
    const handleSubmit = async () => {
        try {
            const response = await signIn(data);
            localStorage.setItem("token", response.data.id);
            navigate("/dashboard"); // Redirect to the dashboard page

        }
        catch (error) {
            alert("Sign-in failed. Please check your credentials.");
        }
    };
    return (
        <Grid container justifyContent="center" alignItems="center" paddingTop="5%">
            <Grid
                item
                lg={4}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid grey",
                    borderRadius: 2,
                    gap: 3,
                    height: 500,
                    padding: 2,
                    "@media (max-width: 600px)": {
                        border: "none",
                        boxShadow: "none",
                    },
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "3px",
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
                <h3>Login</h3>
                <p>Use your fundoo account</p>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={data.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={data.password}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>

                <Grid container justifyContent="space-between">
                    <Grid item>
                        <p style={{ color: "blue" }}>Forgot password?</p>
                        <p style={{ color: "blue" }}>
                            <Link to="/signup">Create Account</Link>
                        </p>
                    </Grid>

                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ width: 90 }}
                            onClick={handleSubmit}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SignIn;
