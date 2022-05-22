import styled from 'styled-components';
import Box from 'components/common/Box/Box';
import Navbar from 'components/layout/Navbar/Navbar';

const Header = ({children, beforeNavbar}) => {
    return (
        <StyledHeader>
            {beforeNavbar}
            <Navbar/>
            {children}
        </StyledHeader>
    )
}

const StyledHeader = styled(Box)`
    min-height: 100vh;
`

export default Header;