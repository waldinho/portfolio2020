import React from 'react';
import styled from 'styled-components';

const Social = () => {
    return (
        <Wrapper>
            <a href="mailto:james.waller1984@gmail.com"><img src="/images/new-social-1.png" border="0" alt="Email" title="Email"/></a>
            <a href="https://www.linkedin.com/in/james-waller-573b81b/" target="_blank"><img src="/images/new-social-2.png" border="0" alt="LinkedIn" title="LinkedIn"/></a>
            <a href="https://www.facebook.com/waldinho" target="_blank"><img src="/images/new-social-3.png" border="0" alt="Facebook" title="Facebook"/></a>
            <a href="https://github.com/waldinho" target="_blank"><img src="/images/new-social-4.png" border="0" alt="GitHub" title="GitHub"/></a>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    padding: 1.5em;
    width: 100%;
    background-color: #000;
    border-top: 1px solid white;
    @media screen and (min-width: 426px) {
        background-color: transparent;
        border-top: none;
    }
    img {
        width: 40px;
        height: 40px;
    }
}
`

export default Social