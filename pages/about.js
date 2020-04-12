import Head from 'next/head'
import styled from 'styled-components';
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import useSWR from 'swr'

const fetcher = query =>
  fetch('/api/about', {
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
    <Content>
      <h1>{title[0].title}</h1>
      {paragraph.map(item => (
            <p>{item.text}</p>  
        )
      )}
    </Content>
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
  padding: 1rem 2rem;
  @media screen and (min-width: 1025px) {
    padding: 1rem 20rem;
  }
  font-family: Courier, Helvetica Neue, sans-serif;
  h1 {
    padding: 7rem 0 0 0;
  }
}
`;