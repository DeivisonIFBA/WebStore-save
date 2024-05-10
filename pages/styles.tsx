import styled from "styled-components";

export const LoginSection = styled.main`
    // background-color: #000;
    background-image: radial-gradient(#555, #5f5f5f, #2b2b2bf0, #000000e8);
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

`

export const LoginBox = styled.div`
    background-color: #ffffffc4;
    width: 400px;
    height: 500px;
    padding: 20px 30px;

    border-radius: 30px;
    box-shadow: 0px 0px 3px #333333c9;

    & h1 {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 45px;

        text-align: center;

        color: #333;
    }
`

export const InputDiv = styled.form`
    margin-top: 70px;

    display: flex;
    flex-direction: column;
    gap: 40px;

    & div{
        display: flex;
        flex-direction: column;
    }

    & div a{
        align-self: end;

        color: #33333385;
        margin-top: 2px;
        margin-right: 5px;
    }

    & div .activeFieldSpan{
        width: 0%;
        height:5px;
        background-color: #333;

        margin-top: 1px;
        border-radius: 5px;
        transition: .3s ease-in-out;
    }

    & .createAcoountLinks{
        width: fit-content;
        margin: auto;

        color: #33333385;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-top: -25px;
    }
`

export const InputLabel = styled.label`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #33333385;
    font-weight: 700;
`

export const InputField = styled.input`
    height: 30px;
    margin-top: 5px;
    background-color: #00000026;

    padding: 1px 10px;

    border: none;
    border-radius: 5px;

    outline: none;

    &:focus + .activeFieldSpan {
        width: 100%;
    }
`

export const SubmitButtom = styled.button`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 30px;
    font-weight: 700;

    color: transparent;
    background-image: linear-gradient(140deg, #000, #000, #a5a5a5c7, #000, #000);
    -webkit-background-clip: text;
    background-position: -100px;

    height: 48px;

    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 10px #00000070;

    &:hover {
        box-shadow: 0px 0px 10px #00000070 inset;
        font-size: 25px;
        font-weight: 800;
        background-color: gold;
        animation: bgAnimation 3s ease infinite;
    }

    @keyframes bgAnimation {
        0% {
            background-position: -100px;
        }
        50%{
            background-position: 0x;
        }
        100%{
            background-position: 150px;
        }
    }
`