import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,body{
    margin:0;
    padding: 0;
    background: #e9f0ec;
}

*{
    box-sizing:border-box
}
`;

export const FlexBox = styled.div`
  display: flex;
  width: ${(props) => {
    return props.width ? props.width : "100%";
  }};
  height: ${(props) => {
    return props.height ? props.height : "fit-content";
  }};
  flex-direction: ${(props) => {
    return props.flexDirection ? props.flexDirection : "column";
  }};
  justify-content: ${(props) => {
    return props.justifyContent ? props.justifyContent : "space-between";
  }};
  align-items: ${(props) => {
    return props.alignItems ? props.alignItems : "center";
  }};
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: relative;
  width: 100%;
  padding: 1rem 3rem;
  height: 5rem;
  margin-bottom: 2rem;

  /* Bottom Border */
  &::after {
    content: "";
    position: absolute;
    width: calc(100% - 6rem);
    bottom: 0;
    height: 0.05rem;
    background-color: #cbd0cc;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;

  & * {
    margin: 0 0.8rem;
  }
`;

export const Logo = styled.div`
  font-family: "Cormorant Garamond", serif;
  font-size: 1.5rem;
  font-weight: 600;
`;
