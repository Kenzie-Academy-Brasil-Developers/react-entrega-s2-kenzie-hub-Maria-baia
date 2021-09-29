import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background-color: #03045e;
        color: #023e8a;
        display: flex;
        justify-content: center;
    }

    .home, form {
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 6.7vh;
        margin-bottom: 10px;
    }

    .buttons {
        display: flex;
        justify-content: center;
        column-gap: 1rem;
        margin-top: 0.1vw;
    }

    button {
        margin-top: 5px;
        border: none;
        background-color: #0077b6;
        width: 15vh;
        height: 3vh;
        color: #00b4d8;
        font-weight: bold;
        border-radius: 10px;
        transition: 0.1s;
        :hover {
            border:2px solid #48cae4;
        }
    }

    input{
        margin: 5px;
        background-color: #90e0ef;
        border: none;
        border-radius: 3px;
        width: 20vh;
        height: 3vh;
        padding: 3px;
        &::placeholder{
            color: #0096c7;
        }
        color: #03045e;
        font-size: 16px;
    }

    span {
        color: #e07a5f;
    }

    h2, ul {
        margin-bottom: 5px;
        color: #0077b6;
        list-style: none;
    }

    .name {
        color: #0096c7;
    }
    
    ul {
        display: flex;
        flex-direction: row;
        column-gap: 20px;
    }
`;