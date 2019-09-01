import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';


const FooterContent = styled.footer`
    ${fonts.bebasBold}
    background-color: ${colors.blue};
    color: ${colors.white};
    width: 100%;
    height: 70px;
    font-size: 25px;
    line-height: 70px;
    text-align: center;
`;

/**
 * Section component.
 */
const Footer = () => (
    <FooterContent> 2019 Alpha Custom, inc. all rights reserved. </FooterContent>
);

export default Footer;
