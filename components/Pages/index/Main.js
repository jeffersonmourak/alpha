import React from 'react';
import styled from 'styled-components';
import Section from '../../shared/Section';

const Image = styled.div`
    width: 100%;
    height: 85vh;
    background-image: url(/static/pictures/cover_1.JPG);
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
