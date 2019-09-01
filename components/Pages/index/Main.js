import React from 'react';
import styled from 'styled-components';
import Section from '../../shared/Section';

const Image = styled.div`
    width: 100%;
    height: 75vh;
    background-image: url(/static/image.jpg);
    background-size: cover;
    background-position: center center;
`;

/**
 * Section component.
 */
const MainSection = () => (
    <Section background={<Image />} />
);

export default MainSection;
