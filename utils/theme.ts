interface Theme {
    background: string,
    primary: string,
    footerText: string,
    bannerPrimary: string,
    bannerSecondary: string,
    mainText: string,
    mainTextDim: string,
    primaryButtonHover: string,
    navbarLinkBackgroundHover: string,
    navbarLinkBackgroundActive: string,
    borderColor: string,
    footerBackground: string,
    readMoreButtonBackground: string,
    cardBackground: string,
}

const theme : Theme = {
    background: 'hsla(220, 2%, 9%, 1)',
    primary: 'hsla(220, 77%, 59%, 1)',
    footerText: 'hsla(0, 0%, 100%, 1)',
    bannerPrimary: 'hsla(103, 100%, 71%, 1)',
    bannerSecondary: 'hsla(61, 97%, 54%, 1)',
    mainText: 'hsla(0, 0%, 100%, 1)',
    mainTextDim: 'hsla(0, 0%, 100%, 0.5)',
    primaryButtonHover: 'hsla(220, 77%, 64%, 1)',
    navbarLinkBackgroundHover: 'hsla(220, 2%, 15%, 1)',
    navbarLinkBackgroundActive: 'hsla(220, 2%, 20%, 1)',
    borderColor: 'hsla(0, 0%, 100%, 0.5)',
    footerBackground: 'hsla(0, 0%, 0%, 1)',
    readMoreButtonBackground: 'hsla(220, 77%, 59%, 0.1)',
    cardBackground: 'hsla(220, 2%, 15%, 1)'
}

export const breakpoints = {
    xs: '340px',
    s: '480px',
    m: '620px',
    l: '860px',
    xl: '1280px',
    xxl: '1480px',
}

export default theme;