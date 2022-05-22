import styled from 'styled-components';
import theme from 'utils/theme';

interface HeadingProps {
    textAlign?: string,
}
interface HeadingComponentProps extends HeadingProps {
    children: string,
    size: number,
    className?: string,
}

const Heading = ({size = 1, children = "Heading Placeholder", className, textAlign}: HeadingComponentProps) => {
    switch (size) {
        case 1:
            return <StyledH1 textAlign={textAlign} className={className}>{children}</StyledH1>;
        case 2:
            return <StyledH2 textAlign={textAlign} className={className}>{children}</StyledH2>;
        case 3:
            return <StyledH3 textAlign={textAlign} className={className}>{children}</StyledH3>;
        case 4:
            return <StyledH4 textAlign={textAlign} className={className}>{children}</StyledH4>;
        case 5:
            return <StyledH5 textAlign={textAlign} className={className}>{children}</StyledH5>;
        case 6:
            return <StyledH6 textAlign={textAlign} className={className}>{children}</StyledH6>; 
    };
};

const CommonHeadingStyles = (props) => `
    color: ${theme.mainText};
    margin-bottom: 6.5rem;
    text-align: ${props.textAlign};
`;


const StyledH1 = styled.h1<HeadingProps>`
    font-size: 11rem;
    line-height: 120%;
    ${props => CommonHeadingStyles(props)};
`;

const StyledH2 = styled.h2<HeadingProps>`
    font-size: 9.5rem;
    ${props => CommonHeadingStyles(props)};
`;

const StyledH3 = styled.h3<HeadingProps>`
    font-size: 8rem;
    ${props => CommonHeadingStyles(props)};
`;

const StyledH4 = styled.h4<HeadingProps>`
    font-size: 6.5rem;
    ${props => CommonHeadingStyles(props)};
`;

const StyledH5 = styled.h5<HeadingProps>`
    font-size: 5rem;
    ${props => CommonHeadingStyles(props)};
`;

const StyledH6 = styled.h6<HeadingProps>`
    font-size: 3.5rem;
    ${props => CommonHeadingStyles(props)};
`;

export default Heading;