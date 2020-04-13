import Head from 'next/head'
import styled from 'styled-components';
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Social from '../components/Social'
import useSWR from 'swr'

const fetcher = query =>
  fetch('/api/graphQL/about', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then(res => res.json())
    .then(json => json.data)

export default function Index() {
  const { data, error } = useSWR('{ title { title }, paragraph { id, text }, images { id } }', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const { title, paragraph, images } = data

  console.log('data: ', data)

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
    <Content>
      <h1>{title[0].title}</h1>
      {paragraph.map(item => (
            <p>{item.text}</p>  
        )
      )}
    </Content>
    <Images>
      <img src="/images/beach.jpg" border="0" alt="Travel" title="Travel"/>
      <img src="/images/scuba.jpeg" border="0" alt="Scuba Diving" title="Scuba Diving"/>
      <img src="/images/beer.jpg" border="0" alt="Bers" title="Beers"/>
      <img src="/images/footy.jpg" border="0" alt="Soccer" title="Soccer"/>
      <img src="/images/boxing.jpg" border="0" alt="Boxing" title="Boxing"/>
      <img src="/images/music.jpg" border="0" alt="Music" title="Music"/>
    </Images>
    <style jsx global>{`
        html,
        body {
        padding: 0;
        margin: 0;
        font-family: Courier, Helvetica Neue, sans-serif;
        background-color: #000;
        color: #fff;
        }

        * {
        box-sizing: border-box;
        }
    `}</style>
  </>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem 0rem 2rem;
  @media screen and (min-width: 1025px) {
    padding: 1rem 20rem;
  }
  font-family: Courier, Helvetica Neue, sans-serif;
  h1 {
    padding: 7rem 0 0 0;
  }
}
`;

const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem 7rem 2rem;
  text-align: center;
  @media screen and (min-width: 456px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1025px) {
    padding: 1rem 20rem;
  }
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 1rem auto;
    justify-content: space-between;
    @media screen and (min-width: 456px) {
      width: 120px;
      height: 120px;
    }
  }
}
`;