import styled from "@emotion/styled";
import main_bg from "../assets/bg_main.jpeg";

export const NavDiv = styled.div`
  display: flex;
  width: 100%;
  min-height: 35vh;
  background-image: url(${main_bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  div {
    width: 100%;
    min-height: 100%;
    background-color: rgba(156, 165, 216, 0.7);
    h1 {
      font-size: 45px;
      padding: 10px;
      margin: 5px 15px;
      font-family: "Dancing Script", cursive;
      font-weight: 900;
    }
  }
`;

export const SelectDiv = styled.div`
  text-align: center;
  /* min-height: 60vh; */
  padding: 50px 5%;
  padding-bottom: 0%;
  font-family: "Merriweather", serif;
  h2 {
    font-size: 30px;
    font-weight: 900;
    color: #4b4a4a;
  }
  ul {
    list-style: none;
    display: flex;
    max-width: 800px;
    justify-content: space-evenly;
    margin: auto;
    align-items: center;
    li {
      width: 300px;
      height: 300px;
      margin: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      background: #ffffff;
      box-shadow: 30px 30px 91px #d9d9d9, -30px -30px 91px #ffffff;

      cursor: pointer;
      &:hover {
        box-shadow: 30px 30px 91px #bdbdbd, -30px -30px 91px #ffffff;
      }
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      max-width: none;
      margin-left: -50px;
      li {
        margin: 30px auto;
      }
    }
  }
`;

export const CollegeDiv = styled.div`
  font-family: "Quicksand";
  padding-bottom: 5vh;

  h2 {
    text-align: center;
    font-size: 30px;
    margin: 30px 0px;
    margin-top: 50px;
  }
  .inputFields {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: auto;
    padding: 2%;

    p.error {
      color: #d14343;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: -0.023em;
    }
    div {
      width: 44%;
      border-radius: 5px;
      box-shadow: 5px 5px 15px #e8e8e8, -5px -5px 15px #ffffff;
      max-height: 48px;
      border: 1px solid #e8e8e8;
      padding: 5px 22px;
      margin-bottom: 20px;
      &.error {
        border-color: #d14343;
        label {
          color: #d14343;
        }
      }

      label {
        color: grey;
        font-size: 13px;
        font-weight: 700;
        margin-bottom: 2px;
        line-height: 20px;
      }
      input {
        width: 100%;
        font-weight: 400;
        border: none;
        outline: none;
        line-height: 24px;
        color: #5e5d59;
        border: none;
        font-size: 16px;
        font-weight: 600;
        line-height: 30px;
        &::placeholder {
          font-family: "Quicksand";
          color: #8080807a;
        }
      }
    }
    select {
      display: block;
      border: none;
      outline: none;
      color: #5e5d59;
      width: 100%;
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
      font-family: "Quicksand";
    }
  }
  button {
    width: 200px;
    min-width: 200px;
    margin-top: 20px;
    padding: 10px;
    background: #ffffff;
    box-shadow: 30px 30px 91px #b7b7b7, -30px -30px 91px #ffffff;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    border-radius: 8px;
    /* box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px; */
    color: #ffffff;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    font-family: "Quicksand";
    margin: 20px auto;
    margin-left: calc(50vw - 100px);

    cursor: pointer;
    &:hover {
      box-shadow: 30px 30px 91px #949393, -30px -30px 91px #ffffff;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      margin: 60px 30px;
      font-size: 25px;
    }
    .inputFields {
      flex-direction: column;
      width: 90%;
      margin: 0px;
      padding: 0px 5%;

      div {
        width: 90%;
        padding: 10px;
        margin: auto;
        margin-bottom: 40px;
      }
    }
  }
`;
