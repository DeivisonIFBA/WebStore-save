import React from "react"
import {GlobalStyle} from "../styles/global"
import Head from "next/head"

import {LoginSection, LoginBox, InputDiv, InputLabel, InputField, SubmitButtom} from "./styles"


const LoginPage = () => {

    return(
        <>
            <GlobalStyle/>

            <Head>
                <title>Web Store</title>
            </Head>

            <LoginSection>
                <LoginBox>
                    <h1>Web Store</h1>

                    <InputDiv>
                        <div>
                            <InputLabel>Email</InputLabel>
                            <InputField type="email" ></InputField>
                            <span className="activeFieldSpan"></span>
                        </div>
                        <div>
                            <InputLabel>Password</InputLabel>
                            <InputField type="password" ></InputField>

                            <span className="activeFieldSpan"></span>
                            <a href="">Forgot Password?</a>
                        </div>

                        <SubmitButtom>Login</SubmitButtom>

                        <a href="" className="createAcoountLinks">
                            <span>
                                Don't have an account?
                            </span>
                            <span>
                                Create Now
                            </span>
                        </a>
                    </InputDiv>
                </LoginBox>
            </LoginSection>
        </>
    )
}

export default LoginPage;