import { ReactNode } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'utils/theme';

import Box from 'components/common/Box/Box'
import BoxProps from './../../../types/Box'

interface LayoutBoxProps extends BoxProps {
    width?: 'full' | 'main' | 'padded';
}

const LayoutBox = (props : LayoutBoxProps) => {

    const {
        children, 
        className = '',
        width = 'full',
        flexDirection = 'column',
        justifyContent = 'auto',
        alignItems = 'auto',
        dataAos = null
    } = props;

    return (
        <StyledBox 
            className={`${width} ${className}`} 
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            alignItems={alignItems}
            dataAos={dataAos}
        >
            {children}
        </StyledBox>
    );
    
};

const StyledBox = styled(Box)<LayoutBoxProps>`
    font-size: 2.5rem;
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    width: 100%;
    margin: 0 auto;
    &.main {
        max-width: 182rem;
        @media screen and (max-width: ${breakpoints.xxl}) {
            max-width: 160rem;
        }
        @media screen and (max-width: ${breakpoints.xl}) {
            max-width: unset;
            width: calc(100% - 10rem);
        }
    }
    &.padded {
        max-width: 140rem;
        @media screen and (max-width: ${breakpoints.xxl}) {
            max-width: unset;
            width: calc(100% - 10rem);
        }
    }
`;

export default LayoutBox;