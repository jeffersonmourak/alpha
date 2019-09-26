import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import If from './If';

const SectionWrapper = styled.section`
    position: relative;
    min-height: 75vh;
    ${props => (props.id ? 'padding-top: 99px;' : '')}
    color: ${colors.black};
    ${fonts.bebasBold};
`;

const Title = styled.h2`
    font-size: 3.3em;
    text-align: center;
    margin-top: 0;
`;

const Boundaries = styled.div`
    margin: 0 40px;
`;

const Foreground = styled.div`
    position: relative;
    z-index: 1;
`;

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 75vh;
    z-index: 0;
`;

/**
 * Section component.
 */
const Section = ({
    id,
    children,
    title,
    background,
}) => (
    <SectionWrapper id={id}>
        <If condition={React.isValidElement(background)}>
            <Background>
                {background}
            </Background>
        </If>
        <Foreground>
            <If condition={title}>
                <Title>{title}</Title>
            </If>

            <If condition={React.isValidElement(children)}>
                <Boundaries>
                    {children}
                </Boundaries>
            </If>
        </Foreground>
    </SectionWrapper>
);

export default Section;
