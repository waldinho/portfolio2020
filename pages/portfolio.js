import useSWR from 'swr'
import Head from 'next/head'
import styled from 'styled-components';
import Logo from '../components/Logo'
import Nav from '../components/Nav'

const fetcher = query =>
  fetch('/api/portfolio', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then(res => res.json())
    .then(json => json.data)

export default function Index() {
  const { data, error } = useSWR('{ portfolio { title, text } }', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const { portfolio } = data

  return (
    <div>
      <Head>
        <title>James Waller | Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {portfolio.map((item, i) => (
        <Content>
            <h1 key={item.title}>{item.title}</h1>
            <div key={item.text}>{item.text}</div>
        </Content>
      ))}
    </div>
  )
}

const Content = styled.div`

}
`;
