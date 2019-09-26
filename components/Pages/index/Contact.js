
import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import InputMask from 'react-input-mask';
import Section from '../../shared/Section';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';
import styleBuilder from '../../../constants/styleBuilder';

const MAPS_KEY = 'AIzaSyBk_WZFL3VPyZVJ3Gr8KdUC5Jq_feMaEgw';

const Content = styled.div`${styleBuilder({
    defaultStyle: `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: calc(75vh - 50px);
        align-items: center;
        margin-bottom: 50px;
    `,
    others: `
        flex-direction: column;
    `,
})}`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(${props => (props.height || 75)}vh - 50px);
    width: 100%;
    align-items: center;
    min-height: ${props => (props.minHeight || 0)}px;

    ${styleBuilder({
        others: `
        margin-bottom: 20px;
    `,
    })}`;

const Row = styled.div`${styleBuilder({
    defaultStyle: `
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        text-align: center;
        justify-content: center;
    `,
    others: `
        margin-bottom: 20px;
        flex-direction: column;
    `,
})}`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: calc(75vh - 50px);
    width: 100%;
`;

const Pointer = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-image: url(/static/pointer.svg);
    background-size: cover;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-size: 22px;
    &::before {
        content: '${props => props.text}';
    }
`;

const ContactPhone = styled.a`
    color: ${colors.blue};
    font-size: 35px;
    ${fonts.bebasBold}
    text-decoration: none;
    transition: all 300ms ease;

    &:hover {
        color: ${colors.black};
    }
`;

const InputStyle = `
    line-height: 45px;
    font-size: 22px;
    border: 1px solid ${colors.black};
    width: 95%;
    ${fonts.bebasRegular}
`;

const Input = styled.input`${InputStyle}`;

const Phone = styled(InputMask)`${InputStyle}`;

const Message = styled.textarea`
    ${InputStyle}
    min-height: 100px;
`;

const Send = styled.button`
    cursor: pointer;
    font-size: 22px;
    ${fonts.bebasRegular}
    padding: 10px 0;
    color: ${colors.white};
    width: 95%;
    background-color: ${colors.black};
    border: 0;
    transition: all 300ms ease;

    &:hover, &:focus {
        background-color: ${colors.grey};
    }
`;

const CallTitle = styled.h3`
    font-size: 2.5em;
    text-align: center;
    color: ${colors.blue};
`;

const PhoneTitle = styled.h4`
    font-size: 2em;
    text-align: center;
    color: ${colors.black};
`;

const CENTER = [41.65842, -70.385323];

/**
 * Open maps.
 */
const openMaps = () => {
    if ((navigator.platform.indexOf('iPhone') !== -1)
           || (navigator.platform.indexOf('iPad') !== -1)
           || (navigator.platform.indexOf('iPod') !== -1)) {
        window.open('maps://maps.google.com/maps?daddr=41.65842,-70.385323');
    } else {
        window.open('https://g.page/alpha-custom-painting?share');
    }
};
/**
 * Services Section.
 */
const Contact = () => (
    <Section id="contact" title="Contact">
        <Content>
            <Row>
                <Column minHeight={500}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: MAPS_KEY }}
                        defaultCenter={CENTER}
                        defaultZoom={15}
                    >
                        <Pointer
                            onClick={openMaps}
                            lat={41.6585234}
                            lng={-70.3855421}
                        />
                    </GoogleMapReact>
                </Column>
                <Column minHeight={500}>
                    <Form action="https://formspree.io/alphacustom@icloud.com" method="POST">
                        <input type="hidden" name="_subject" value="Contact from website" />
                        <Label htmlFor="name" text="Full name">
                            <Input required type="text" name="name" />
                        </Label>
                        <Label htmlFor="phone" text="Phone">
                            <Phone required mask="(999) 999-9999" maskChar=" " type="tel" name="phone" />
                        </Label>
                        <Label htmlFor="email" text="Email">
                            <Input required type="email" name="email" />
                        </Label>
                        <Label htmlFor="message" text="Message">
                            <Message required name="message" />
                        </Label>

                        <Send type="submit"> Send </Send>
                    </Form>
                </Column>
            </Row>
            <Row>
                <CallTitle> Call us </CallTitle>
            </Row>
            <Row>
                <Column height={40}>
                    <PhoneTitle> Cleaning division </PhoneTitle>
                    <ContactPhone href="tel:508-360-0316">508-360-0316</ContactPhone>
                </Column>
                <Column height={40}>
                    <PhoneTitle> Construction division </PhoneTitle>
                    <ContactPhone href="tel:508-360-5357">508-360-5357</ContactPhone>
                </Column>
            </Row>
        </Content>
    </Section>
);

export default Contact;
