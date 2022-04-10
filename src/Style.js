import styled, { createGlobalStyle } from "styled-components";
import manImage from "./images/man-image.jpg";

export const GlobalStyle = createGlobalStyle`
html,body, #root{
    margin:0;
    padding: 0;
    height: 100vh;
    min-height: 100vh;
    background: #e9f0ec;
}

*{
    box-sizing:border-box;
  transition: all 250ms;

}

@keyframes spin{
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}

#circleSvg{
  @media screen and (max-width: 850px) {
    width:50%;
    height:50%
  }
animation: spin 30s infinite both linear ;
}

.a{
  grid-area: a;
  width: 100%;
  height: 100%;
  background:transparent
}
.b{
  grid-area: b;
  width: 100%;
  height: 100%;
  background:transparent
}
.c{
  grid-area: c;
  width: 100%;
  height: 100%;
  background:transparent
}
.d{
  grid-area: d;
  width: 100%;
  height: 100%;
  background:transparent
}
.e{
  grid-area: e;
  width: 100%;
  height: 100%;
  background:transparent
}
.f{
  grid-area: f;
  width: 100%;
  height: 100%;
  background:transparent
}
.g{
  grid-area: g;
  width: 100%;
  height: 100%;
  background:transparent
}
.h{
  grid-area: h;
  width: 100%;
  height: 100%;
  background:transparent
}
.i{
  grid-area: i;
  width: 100%;
  height: 100%;
  background:transparent
}
.j{
  grid-area: j;
  width: 100%;
  height: 100%;
  background:transparent
}
.k{
  grid-area: k;
  width: 100%;
  height: 100%;
  background:transparent
}
.l{
  grid-area: l;
  width: 100%;
  height: 100%;
  background:transparent
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

export const BodyContainer = styled(FlexBox)`
  flex-direction: row;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    height: fit-content;
    align-items: center;
    & * {
      text-align: center;
      width: 100%;
      margin: 1rem 0;
      align-items: center;
    }
    & ${FlexBox}:not(:last-of-type) {
      padding: 2rem 0;
      border-bottom: 0.2rem solid #c7d0ca;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 1rem 5rem;
  height: 5rem;
  margin-bottom: 2rem;

  /* Bottom Border */
  &::after {
    content: "";
    position: absolute;
    width: calc(100% - 10rem);
    bottom: 0;
    height: 0.05rem;
    background-color: #cbd0cc;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 0;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
    }
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

export const GridContainer = styled.div`
  display: grid;
  width: 80%;
  max-width: 500px;
  min-width: 200px;
  aspect-ratio: 1;
  place-items: center;
  gap: 0.4rem;

  /* Zdjęcie autorstwa Micah Boerma z Pexels */
  grid-template-areas:
    ". . a a b b . . . ."
    ". . a a b b . . . ."
    "d d d d b b c c . ."
    "d d d d b b c c . ."
    "d d d d e e c c . ."
    "d d d d e e f f f ."
    ". g g g e e f f f ."
    ". g g g h h f f f ."
    ". g g g h h f f f ."
    ". g g g h h j j j j"
    ". g g g i i j j j j"
    ". . k k i i j j j j"
    ". . k k i i l l . ."
    ". . . . i i l l . .";
  & * {
    border-radius: 0.5rem;
    background-image: url("${manImage}");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    mix-blend-mode: multiply;
    box-shadow: 0.2rem 0.2rem 1rem gray;

    &:hover {
      width: 105%;
      height: 105%;
    }
  }
`;
