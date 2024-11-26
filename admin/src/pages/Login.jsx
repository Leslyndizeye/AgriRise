import { useState, useEffect } from "react";
import brandingVideo from "../assets/agririse-video.mp4";
import logo from "../assets/logo.png";  // Import the logo image

const Login = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
    });

    useEffect(() => {
        const storedToken = localStorage.getItem("auth-token");
        const storedUserData = localStorage.getItem("user-data");
        if (storedToken && storedUserData) {
            window.location.replace("/");
        }

        // Set the background color for the entire page
        document.body.style.backgroundColor = "#f5f5f5";    
        
        return () => {
            document.body.style.backgroundColor = ""; // Reset the background on component unmount
        };
    }, []);

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        try {
            const response = await fetch("http://localhost:4000/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            if (responseData.success) {
                const userData = JSON.stringify(responseData.user);
                localStorage.setItem("auth-token", responseData.token);
                localStorage.setItem("user-data", userData);
                window.location.replace(responseData.user.role === "admin" ? "/listproduct" : "/");
            } else {
                alert(responseData.errors);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    const signup = async () => {
        try {
            const response = await fetch("http://localhost:4000/signup", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            if (responseData.success) {
                localStorage.setItem("auth-token", responseData.token);
                window.location.replace("/");
            } else {
                alert(responseData.errors);
            }
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    const containerStyle = {
        display: "flex",
        marginTop: "8rem",
        margin: "2rem", // Add margin around the container
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px", // Optional for rounded corners
        overflow: "hidden", // Ensure no content overflows
        height: "80vh",
    };

    const leftStyle = {
        flex: 1,
        padding: "2rem",
        backgroundColor: "#fff", // Explicitly set background for the left side container
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    };

    const rightStyle = {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const videoStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover", // Ensure the video covers the right side completely
    };

    const formContainerStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    };

    const inputStyle = {
        padding: "0.8rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        outline: "none",
        fontSize: "1rem",
    };

    const buttonStyle = {
        padding: "0.8rem",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "1rem",
    };

    const linkStyle = {
        color: "#007bff",
        cursor: "pointer",
        textDecoration: "underline",
    };

    return (
        <section style={containerStyle}>
            <div style={leftStyle}>
                {/* Replace the h3 with the logo */}
                <img src={logo} alt="Logo" style={{ width: "200px", marginBottom: "1rem", display: "block", margin: "0 auto" }} />
                <div style={formContainerStyle}>
                    {state === "Sign Up" && (
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={changeHandler}
                            placeholder="Your Name"
                            style={inputStyle}
                        />
                    )}
                    <input
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        type="email"
                        placeholder="Email Address"
                        style={inputStyle}
                    />
                    <input
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        type="password"
                        placeholder="Password"
                        style={inputStyle}
                    />
                    <button
                        onClick={() => (state === "Login" ? login() : signup())}
                        style={buttonStyle}
                    >
                        Continue
                    </button>
                    {state === "Sign Up" ? (
                        <p>
                            Already have an account?{" "}
                            <span className="cursor-pointer, font-bold" onClick={() => setState("Login")} style={linkStyle}>
                                Login
                            </span>
                        </p>
                    ) : (
                        <p>
                            Create an account{" "}
                            <span className="cursor-pointer, font-bold" onClick={() => setState("Sign Up")} style={linkStyle}>
                                Click here
                            </span>
                        </p>
                    )}
                </div>
            </div>
            <div style={rightStyle}>
                <video
                    src={brandingVideo}
                    autoPlay
                    loop
                    muted
                    style={videoStyle}
                ></video>
            </div>
        </section>
    );
};

export default Login;
