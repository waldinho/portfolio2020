import React from 'react';
import styled from 'styled-components';

const Logo = () => {
    return (
        <Wrapper>
            <h1>JW</h1>
            <p>_Digital</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    padding: 1rem 2rem 0rem 2rem;
    z-index: 9;
    text-shadow:
        -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
    h1 {
        font-family: Impact, Helvetica Neue, sans-serif;
        font-size: 4.25rem;   
        line-height: 0;
        color: #4fec8e;
    }
    p {
        position: relative;
        top: -1rem;
        font-family: Courier, Helvetica Neue, sans-serif;
        color: #fff;
    }
}
`

export default Logo