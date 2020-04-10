import useSwr from 'swr'
import Head from 'next/head'
import styled from 'styled-components';
import Logo from '../components/Logo'
import Nav from '../components/Nav'

const fetcher = url => fetch(url).then(res => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/about', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>James Waller | Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo />
      {data.map(item => {
        console.log('item: ', item)
        return (
          <Content>
            <h1>{item.title}</h1>
            {item.paragraph.map(i => {
              console.log('i: ', i)
              return (
                <p>{i.text}</p>  
              )
            })}
          </Content>
        )
      }
      )}
    </>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 10rem;
  font-family: Courier, Helvetica Neue, sans-serif;
  h1 {
    padding: 5rem 0 0 0;
  }
}
`;