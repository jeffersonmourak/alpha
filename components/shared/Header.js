/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import styleBuilder from '../../constants/styleBuilder';

const Anchor = styled.a`${styleBuilder({
    defaultStyle: `
        color: ${colors.blue};
        font-size: 35px;
        ${fonts.bebasBold}
        margin: 0 20px;
        text-decoration: none;
        transition: all 300ms ease;

        &:hover {
            color: ${colors.black};
        }
    `,
    others: `
        display: none;
    `,
})}`;

const HeaderWrapper = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 2;
    background-color: ${colors.white};
    top: 0;
    left: 0;

    input {
        display: none;
    }
`;

const Logo = styled.img`
    height: 65%;
    margin: 0 20px;
`;

const Nav = styled.nav`${styleBuilder({
    defaultStyle: 'display: none;',
    others: `
        position: fixed;
        top: 0;
        z-index: 3;
        background: white;
        width: 100%;
        height: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 0;
        text-align: center;
        transition: all 750ms ease;

        input[type="checkbox"]:checked + & {
            height: 100vh;
        }
    `,
})}`;

const NavItem = styled.a`
    color: ${colors.blue};
    font-size: 35px;
    ${fonts.bebasBold}
    margin: 0 20px;
    text-decoration: none;
    transition: all 300ms ease;

    &:hover {
        color: ${colors.black};
    }
`;

const Hamburger = styled.img`${styleBuilder({
    defaultStyle: 'display: none;',
    others: `
        display: block;
        width: 40px;
        height: 40px;
        position: fixed;
        z-index: 4;
        top: 30px;
        left: 20px;
    `,
})}`;

/**
 * Quick close.
 */
const quickClose = () => {
    const menu = document.getElementById('menu');

    menu.checked = false;
};

/**
 * Header component.
 */
const Header = () => (
    <HeaderWrapper>
        <label htmlFor="menu">
            <Hamburger alt="menu" src="/static/hamburger.svg" />
        </label>

        <input id="menu" type="checkbox" name="menu" />
        <Nav>
            <NavItem onClick={quickClose} href="#services">Services</NavItem>
            <NavItem onClick={quickClose} href="#reviews">Reviews</NavItem>
            <NavItem onClick={quickClose} href="#about-us">About us</NavItem>
            <NavItem onClick={quickClose} href="#contact">Contact</NavItem>
        </Nav>
        <Anchor href="#services">Services</Anchor>
        <Anchor href="#reviews">Reviews</Anchor>
        <Logo alt="logo" src="/static/logo.svg" />
        <Anchor href="#about-us">About us</Anchor>
        <Anchor href="#contact">Contact</Anchor>

    </HeaderWrapper>
);

export default Header;
