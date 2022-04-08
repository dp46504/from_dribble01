import React from "react";
import { Header, HeaderItem, Logo } from "../Style";
import { ReactComponent as MenuIcon } from "../icons/menu-icon.svg";
import { ReactComponent as ContactIcon } from "../icons/letter-icon.svg";

function HeaderComponent(props) {
  return (
    <Header>
      <HeaderItem>
        <MenuIcon height={"1rem"}></MenuIcon>
        MANU
      </HeaderItem>
      <Logo>NURAP</Logo>
      <HeaderItem>
        CONTACT
        <ContactIcon height={"1rem"}></ContactIcon>
      </HeaderItem>
    </Header>
  );
}

export default HeaderComponent;
