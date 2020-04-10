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
    position: absolute;
    padding: 1rem 2rem 0rem 2rem;
    z-index: 9;
    h1 {
        font-family: Impact;
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