import { useState } from "react";

const Login = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log("Login function executed", formData);
        let responseData;
        try {
            const response = await fetch("https://agririse-4.onrender.com/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });
            responseData = await response.json();
            console.log(responseData);
    
            if (responseData.success) {
                const userData = JSON.stringify(responseData.user);
                localStorage.setItem("auth-token", responseData.token);
                localStorage.setItem("user-data", userData);

                if (userData.role === "admin") {
                    window.location.replace("/listproduct");
                } else {
                    window.location.replace("/");
                }
            } else {
                alert(responseData.errors);
            }
        } catch (error) {
            console.error("Error during login:", error);
            // alert("Something went wrong. Please try again later.");
        }
    };
    

    const signup = async () => {
        console.log("Signup function executed", formData);
        let responseData;
        try {
            const response = await fetch("https://agririse-4.onrender.com/signup", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });
            responseData = await response.json();

            if (responseData.success) {
                localStorage.setItem("auth-token", responseData.token);
                window.location.replace("/");
            } else {
                alert(responseData.errors);
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <section className="max_padd_container flexCenter flex-col pt-32">
            <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
                <h3 className="h3">{state}</h3>
                <div className="flex flex-col gap-4 mt-7">
                    {state === "Sign Up" ? (
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={changeHandler}
                            placeholder="Your Name"
                            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                        />
                    ) : null}
                    <input
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        type="email"
                        placeholder="Email Address"
                        className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                    />
                    <input
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        type="password"
                        placeholder="Password"
                        className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                    />
                </div>
                <button
                    onClick={() => (state === "Login" ? login() : signup())}
                    className="btn_dark_rounded my-5 w-full !rounded-md"
                >
                    Continue
                </button>
                {state === "Sign Up" ? (
                    <p className="text-black font-bold">
                        Already have an account?{" "}
                        <span
                            onClick={() => setState("Login")}
                            className="text-secondary underline cursor-pointer"
                        >
                            Login
                        </span>
                    </p>
                ) : (
                    <p className="text-black font-bold">
                        Create an account{" "}
                        <span
                            onClick={() => setState("Sign Up")}
                            className="text-secondary underline cursor-pointer"
                        >
                            Click here
                        </span>
                    </p>
                )}
                <div className="flexCenter mt-6 gap-3">
                    <input type="checkbox" />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </section>
    );
};

export default Login;
