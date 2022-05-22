import styled from 'styled-components'
import BoxProps from './../../../types/Box'

const Box = (props : BoxProps) => {
    const {
        children, 
        className, 
        flex = true,
        width = '100%',
        height = 'auto',
        flexDirection = 'column',
        alignItems = 'auto',
        justifyContent = 'auto',
        rellax = false,
        dataAos = null
    } = props;

    return (
        <StyledBox 
            className={`${className} ${rellax && 'rellax'}`}
            flex={flex} 
            flexDirection={flexDirection}
            width={width}
            height={height}
            alignItems={alignItems}
            justifyContent={justifyContent}
            data-aos={dataAos && dataAos}
        >
            {children}
        </StyledBox>
    );
    
};

const StyledBox = styled.div<BoxProps>`
    font-size: 2.5rem;
    display: ${props => props.flex ? 'flex' : 'auto'};
    flex-direction:  ${props => (props.flexDirection)};
    justify-content:  ${props => (props.justifyContent)};
    width: ${props => props.width};
    height: ${props => props.height};
    align-items: ${props => props.alignItems};
`;

export default Box;