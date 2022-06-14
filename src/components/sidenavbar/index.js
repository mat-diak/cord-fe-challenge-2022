import React, { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

import { Hamburger, CloseButton } from "./NavButtons";

import * as colors from "../../colors";
import * as media from "../../mediaBounds";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  /* TODO: Write the necessary functions to open and close the sidebar */

  const toggleSideNav = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideNavHamBtn onClick={toggleSideNav}>
        <Hamburger />
      </SideNavHamBtn>
      <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
        <SideNavBarCont className={isOpen ? "visible" : ""}>
          {/* TODO: Implement a hamburger icon that controls the open state of the sidebar. This control should only be visible on mobile devices via CSS media queries */}
          {/* The sidebar should slide in from left */}
          <SideNavHeader>
            Wesley
            <img src={Arrow} alt="Arrow pointing down" />
            <SideNavCloseBtn onClick={toggleSideNav} isOpen={isOpen}>
              <CloseButton />
            </SideNavCloseBtn>
          </SideNavHeader>
          <SideNavMainLink to="/discover" exact>
            Discover
            <img src={SearchWhite} alt="Magnifying glass" />
          </SideNavMainLink>
          <SideNavSectionTitle>
            <HeaderText>Watched</HeaderText>
          </SideNavSectionTitle>
          <NavLink to="/watched/movies">Movies</NavLink>
          <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
          <SideNavSectionTitle>
            <HeaderText>Saved</HeaderText>
          </SideNavSectionTitle>
          <NavLink to="/saved/movies">Movies</NavLink>
          <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
        </SideNavBarCont>
      </OutsideClickHandler>
    </>
  );
}

const destyledButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;

const SideNavHamBtn = styled(destyledButton)`
  position: absolute;

  padding: 16px 25px;
  @media (min-width: ${media.mobileBound}) {
    display: none;
  }
`;

const SideNavCloseBtn = styled(destyledButton)`
  @media (min-width: ${media.mobileBound}) {
    display: none;
  }
`;

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: ${colors.white};

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  @media (min-width: ${media.mobileBound}) {
    transform: translateX(0);
  }

  &.visible {
    transform: translateX(0);
  }
`;

const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: ${colors.white};
`;

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

const SideNavHeader = styled.div`
  ${SectionsStyles}

  & {
    padding-top: 35px;
  }
`;

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`;

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`;

const NavLink = styled(Link)`
  display: block;
  color: ${colors.white};
  opacity: 0.8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
    opacity: 1;
  }
`;
