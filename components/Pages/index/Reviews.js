
import React from 'react';
import styled from 'styled-components';
import Section from '../../shared/Section';
import colors from '../../../constants/colors';
import key from '../../../constants/key';
import fonts from '../../../constants/fonts';
import styleBuilder from '../../../constants/styleBuilder';
import REVIEWS from '../../../data/reviews.json';

const Text = styled.p`${styleBuilder({
    defaultStyle: `
        font-size: 25px;
        line-height: 27px;
        padding: 0 55px;
        ${fonts.bebasBook}
        text-align: justify;

        & strong {
            ${fonts.bebasBold}
            display: block;
            font-size: 2em;
            margin-bottom: 5px;
        }
    `,
    others: `
    & strong {
        ${fonts.bebasRegular}
        display: block;
        font-size: 1em;
        margin-bottom: 2px;
    }
    `,
})}`;

const ReviewItem = styled.button`${styleBuilder({
    defaultStyle: `
        border: none;
        background: transparent;
        cursor: pointer;
        ${fonts.bebasBold}
        color: ${colors.black};
        font-size: 32px;

        &:focus {
            outline: 0;
            color: ${colors.black}
        }

        &:disabled {
            color: ${colors.grey};
            text-shadow: none;
            padding: 2px 5px;
        }
    `,
    others: `
        display: none;
    `,
})}`;

const ReviewList = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 20px;
`;

const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(70vh - 50px);
    align-items: center;
`;

const Star = styled.div`${styleBuilder({
    defaultStyle: `
        width: 72px;
        height: 72px;
        text-align: center;
        font-size: 50px;
        line-height: 80px;
        background-image: url(/static/star.svg);
    `,
    others: `
        width: 50px;
        height: 50px;
    `,
})}`;

const Stars = styled.div`
    display: flex;
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
            background-image: url(/static/arrow.svg);
            position: absolute;
            top: 15vh;
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
            reviews: REVIEWS,
        };
    }

    /**
     * On select review.
     */
    onSelectReview(current) {
        this.setState(state => ({
            ...state,
            current,
        }));
    }

    /**
     * Get current.
     */
    getCurrent() {
        const { reviews, current } = this.state;

        return reviews[current];
    }

    /**
     * Get rating.
     */
    getRating(rating) {
        return new Array(rating).fill(0).map(() => (<Star key={key()} />));
    }

    /**
     * List services.
     */
    listServices() {
        const { reviews, current } = this.state;

        return reviews.map(({ name }, index) => (
            <ReviewItem
                key={key()}
                disabled={index === current}
                onClick={() => this.onSelectReview(index)}
            >
                {name}
            </ReviewItem>
        ));
    }

    /**
     * Step review.
     */
    stepReview(step) {
        const { current, reviews } = this.state;

        /**
         * Index calculator.
         */
        const calc = (i => ((reviews.length + i) % reviews.length));

        return this.onSelectReview(calc(current + step));
    }

    /**
     * Render.
     */
    render() {
        const {
            text,
            name,
            location,
            rating,
        } = this.getCurrent();
        return (
            <Section id="reviews" title="Reviews">
                <Content>
                    <Text>
                        <strong>{ text }</strong>
                        {`${name} - ${location}`}
                    </Text>

                    <Stars>
                        { this.getRating(rating) }
                    </Stars>

                    <ReviewList>
                        {this.listServices()}
                    </ReviewList>

                    <Arrow onClick={() => this.stepReview(-1)} />
                    <Arrow onClick={() => this.stepReview(1)} direction="forward" />
                </Content>
            </Section>
        );
    }
}

export default Services;
