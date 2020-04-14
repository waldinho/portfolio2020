import useSwr from 'swr'
import Head from 'next/head'
import styled from 'styled-components';
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Social from '../components/Social'

const fetcher = url => fetch(url).then(res => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/REST/services', fetcher)

  if (error) return <div>Failed to load.</div>
  if (!data) return <div className="loader"></div>

  console.log(data)

  return (
    <>
      <Head>
        <title>James Waller | Digital</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Logo />
      <Nav />
      <Social />
      {data.map(item => {
        return (
        <>
            <Title>
                <h1>{item.title}</h1>
            </Title>
            <Wrapper>
            {item.service.map(i => {
              return (
                <Content>
                    <h2>{i.title}</h2>
                    <img src={`/images/service-${i.id}.png`}/>
                    <p>{i.text}</p>  
                </Content>
              )
            })}
            </Wrapper>
        </>
        )
      }
      )}
      <style jsx global>{`
          html,
          body {
          padding: 0;
          margin: -11px 0 0 0;
          font-family: Courier, Helvetica Neue, sans-serif;
          background-color: #000;
          color: #fff;
          }
  
          * {
          box-sizing: border-box;
          }
          
          .loader {
            border: 16px solid #f3f3f3; 
            border-top: 16px solid #3498db; 
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
            z-index: 9999;
          }
      
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
      `}</style>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1025px) {
    flex-direction: row;
  }
  width: 100%;
  align-items: flex-start;
  padding: 0 2rem 7rem 2rem;
  @media screen and (min-width: 1025px) {
    padding: 0 20rem;
  }
}
`;

const Title = styled.div`
    padding: 0 2rem;
    @media screen and (min-width: 1025px) {
        padding: 0 20rem;
    }
    h1 {
        padding: 9.4rem 0 0 0;
    }
}
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1rem;
    width: 100%;
    @media screen and (min-width: 1025px) {
        width: 25%;
    }
    text-align: center;
    font-family: Courier, Helvetica Neue, sans-serif;
    img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      margin: 15px auto 15px auto;
    }
    h2 {
        height: 32px;
        font-size: 16px;
        position: relative;
    }
    p {
        font-size: 12px;
    }
}
`;