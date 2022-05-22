import { ReactNode } from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';

interface ButtonProps {
    children?: ReactNode;
    className?: string;
    buttonType?: 'a' | 'button',
    href?: string,
    type?: string,
    onClick?: () => void
}

const Button = ({
    children, 
    className,
    buttonType = 'a',
    href = '#',
    type = 'primary'
} : ButtonProps) => {
    
    return buttonType == 'a' ? 
        <StyledButtonLink href={href} className={`${className} ${type}`}>
            {children}
        </StyledButtonLink> :
        <StyledButton className={`${className} ${type}`}>
            {children}
        </StyledButton>
    
};

const commonStyles = `
    font-size: 2.5rem;
    display: inline-block;
    cursor: pointer;
    height: 10rem;
    line-height: 10rem;
    padding: 0 8rem;
    font-size: 3rem;
    width: fit-content;
    border-radius: 0.2rem;
    // font-weight: 600;
    transition: 0.1s ease-in-out all;
    // letter-spacing: 0.1rem;
    color: ${theme.mainText};
    &.primary {
        background: ${theme.primary};
        &:hover {
            background: ${theme.primaryButtonHover};
        }
    }
    &.secondary {
        // background: ${theme.primary};
        border: calc(1rem / 4) solid ${theme.primary};
        &:hover {
            background: ${theme.primaryButtonHover};
        }
    }
`;

const StyledButton = styled.button<ButtonProps>`
    ${commonStyles}
`;

const StyledButtonLink = styled.a<ButtonProps>`
    ${commonStyles}
`;

export default Button;