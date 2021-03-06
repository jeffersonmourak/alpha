import React from 'react';
import styled from 'styled-components';
import Section from '../../shared/Section';
import styleBuilder from '../../../constants/styleBuilder';
import fonts from '../../../constants/fonts';
import about from '../../../data/about.json';

const Text = styled.p`${styleBuilder({
    defaultStyle: `
        font-size: 25px;
        line-height: 30px;
        padding: 0 115px;
        word-spacing: 5px;
    `,
    others: `
        ${fonts.bebasRegular}
        font-size: 20px;
        line-height: 20px;
        padding: 0;
    `,
})}`;

/**
 * Section component.
 */
const AboutSection = () => (
    <Section id="about-us" title="About Us">
        <Text>
            {about.text}
        </Text>
    </Section>
);

export default AboutSection;
