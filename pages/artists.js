import styled from 'styled-components'
import { useEffect } from 'react';

const Artists = (props) => {

    useEffect(() => {
        fetch('/apis/hello')
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);

    return (
        <StyledArtists>
            <h1>Artists!</h1>
            <p>Artist stuff</p>
        </StyledArtists>
    )
};

const StyledArtists = styled.div`
    background: black;
    font-size: 18rem;
    h1 {
        color: red;
    }
    p {
        color: blue;
    }
`;

export default Artists;

