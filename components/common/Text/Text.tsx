import styled from 'styled-components'

interface TextProps {
    textAlign?: 'center' | 'left' | 'right',
    strong?: boolean,
    fontSize?: string,
}
interface TextComponentProps extends TextProps {
    children: string,
    className?: string,
    size?: 'small' | 'medium' | 'large'
}


const Text = ({
    children = "Placeholder text", 
    className,
    textAlign = 'left',
    strong = false,
    fontSize = '3rem',
    size = 'medium'
} : TextComponentProps) => {

    return (
        <StyledText 
            className={`${className} ${size}`}
            textAlign={textAlign}
            strong={strong}
            fontSize={fontSize}
        >
            {children}
        </StyledText>
    );
    
};

const StyledText = styled.p<TextProps>`
    font-size: ${props => props.fontSize};
    margin-bottom: 6rem;
    font-weight: 200;
    color: ${props => props.theme.mainTextDim};
    text-align: ${props => props.textAlign};
    font-weight: ${props => props.strong ? '600' : '200'};
    &.small {
        font-size: 2.5rem;
        line-height: 5rem;
        margin-bottom: 4rem;
    }
    &.medium {
        font-size: 3rem;
        line-height: 6rem;
    }
    &.large {
        font-size: 3.5rem;
        line-height: 7rem;
    }
`;

export default Text;