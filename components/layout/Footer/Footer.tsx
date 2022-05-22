import styled from 'styled-components'
import LayoutBox from 'components/layout/LayoutBox/LayoutBox'
import Box from 'components/common/Box/Box'
import Logo from 'components/layout/Logo/Logo'
import Link from 'next/link'

const Footer = (props) => {
    return (
        <StyledFooter width="full">
            <LayoutBox width="main" flexDirection="row" justifyContent="space-between" alignItems="center">
                <Logo />
                <Box className="footer-links" flexDirection="row">
                    <Link href="/">About Us</Link>
                    <Link href="/">Terms of Use</Link>
                    <Link href="/">Contact</Link>
                </Box>
            </LayoutBox>
        </StyledFooter>
    )
}

const StyledFooter = styled(LayoutBox)`
    padding: 5rem 0;
    background: ${props => props.theme.footerBackground};
    .footer-links {
        width: auto;
        a {
            font-size: 2rem;
            margin-right: 10rem;
            opacity: 0.7;
            &:hover {
                opacity: 1;
            }
        }
    }
`;

export default Footer;