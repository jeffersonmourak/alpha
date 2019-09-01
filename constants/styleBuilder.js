/**
 * Style builder.
 */
const styleBuilder = ({
    defaultStyle = '', desktop = '', mobile = '', tablet = '', others = '',
}) => `
    ${defaultStyle}
    ${desktop}
    
    @media all and (max-width: 1024px) { 
        ${tablet}
        ${others}
    }

    @media all and (max-width: 736px) { 
        ${tablet}
        ${others}
    }
    @media all and (max-width: 480px) { 
        ${mobile}
        ${others}
    }
`;

export default styleBuilder;
