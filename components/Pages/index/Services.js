
import React from 'react';
import styled from 'styled-components';
import Section from '../../shared/Section';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';
import key from '../../../constants/key';
import styleBuilder from '../../../constants/styleBuilder';
import SERVICES from '../../../data/services.json';

const Text = styled.p`${styleBuilder({
    defaultStyle: `
        font-size: 25px;
        line-height: 30px;
        padding: 0 55px;
        text-align: justify;
        color: ${colors.white};
        text-shadow: 7px 7px 10px ${colors.black};
    `,
    others: `
        ${fonts.bebasRegular}
        font-size: 20px;
        line-height: 20px;
        padding: 0;
    `,
})}`;

const Image = styled.div`
    width: 100%;
    min-height: calc(100% - 100px);
    height: 75vh;
    background-image: url(${props => props.src});
    background-size: cover;
    margin-top: 100px;
    background-position: center center;
`;

const ServiceItem = styled.button`${styleBuilder({
    defaultStyle: `
        border: none;
        background: transparent;
        cursor: pointer;
        ${fonts.bebasBold}
        color: ${colors.white};
        text-shadow: 7px 7px 10px ${colors.black};
        font-size: 25px;
        border: 1px solid transparent;

        &:focus {
            outline: 0;
            color: ${colors.grey}
        }

        &:disabled {
            color: ${colors.blue};
            background: ${colors.white};
            text-shadow: none;
            padding: 2px 5px;
        }
    `,
    others: `
        &:not(.compare) {
            display: none;
        }
        
        &:disabled {
            display: block;
        }
    `,
})}`;

const ServiceList = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 20px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: calc(75vh - 50px);
    align-items: center;
`;

const Arrow = styled.button`
    ${props => (
        props.direction === 'forward'
            ? ` transform: rotateZ(180deg);
                right: 0;
            `
            : ` left: 0;
                `
    )
}
    ${styleBuilder({
        defaultStyle: `
            border: none;
            background: transparent;
            cursor: pointer;
            width: 72px;
            height: 72px;
            text-align: center;
            font-size: 50px;
            line-height: 80px;
            background-image: url(/static/arrow-white.svg);
            position: absolute;
            top: 50vh;
            background-repeat: no-repeat;
        `,
        others: `
            width: 32px;
            height: 32px;
        `,
    })}
    `;

/**
 * Services Section.
 */
class Services extends React.Component {
    /**
     * Constructor.
     */
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            services: SERVICES,
            isBefore: true,
        };
    }

    /**
     * On select service.
     */
    onSelectService(current) {
        this.setState(state => ({
            ...state,
            current,
            isBefore: true,
        }));
    }

    /**
     * On Select before.
     */
    onSelectBefore(isBefore) {
        this.setState(state => ({
            ...state,
            isBefore,
        }));
    }

    /**
     * Get current.
     */
    getCurrent() {
        const { services, current, isBefore } = this.state;
        const activeService = services[current];

        let background = isBefore ? activeService.before : activeService.after;

        if (activeService.hideCompare) {
            // eslint-disable-next-line prefer-destructuring
            background = activeService.background;
        }

        return {
            ...activeService,
            background,
        };
    }

    /**
     * Step review.
     */
    stepService(step) {
        const { current, services } = this.state;

        /**
         * Index calculator.
         */
        const calc = (i => ((services.length + i) % services.length));

        return this.onSelectService(calc(current + step));
    }

    /**
     * List services.
     */
    listServices() {
        const { services, current } = this.state;

        return services.map(({ name }, index) => (
            <ServiceItem
                key={key()}
                disabled={index === current}
                onClick={() => this.onSelectService(index)}
            >
                {name}
            </ServiceItem>
        ));
    }

    /**
     * Compare options.
     */
    compareOptions() {
        const { services, current, isBefore } = this.state;
        const activeService = services[current];

        const before = (
            <ServiceItem
                key={key()}
                className="compare"
                disabled={isBefore}
                onClick={() => this.onSelectBefore(true)}
            >
                Before
            </ServiceItem>
        );

        const after = (
            <ServiceItem
                key={key()}
                className="compare"
                disabled={!isBefore}
                onClick={() => this.onSelectBefore(false)}
            >
                After
            </ServiceItem>
        );

        return activeService.hideCompare ? [] : [before, after];
    }

    /**
     * Render.
     */
    render() {
        const { background, text } = this.getCurrent();
        return (
            <Section id="services" background={<Image src={background} />} title="Services">
                <Content>
                    <Text>
                        { text }
                    </Text>

                    <ServiceList>
                        { this.compareOptions() }
                    </ServiceList>

                    <ServiceList>
                        {this.listServices()}
                    </ServiceList>
                    <Arrow onClick={() => this.stepService(-1)} />
                    <Arrow onClick={() => this.stepService(1)} direction="forward" />
                </Content>
            </Section>
        );
    }
}

export default Services;
