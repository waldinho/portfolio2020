import useSwr from 'swr'
import Head from 'next/head'
import styled from 'styled-components';
import Logo from '../components/Logo'
import Nav from '../components/Nav'

const fetcher = url => fetch(url).then(res => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/portfolio', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>James Waller | Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo />
      <Nav />
      {data.map(item => (
            <Content>
                <h1>{item.title}</h1>
                {item.companies.map(i => (
                    <div>
                        <h2>{i.title}</h2> 
                        {i.text.map(x => (
                            <p>{x.paragraph}</p>  
                            )
                        )}
                    </div>
                    )
                )}
          </Content>
        ))}
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
  padding: 1rem 20rem;
  font-family: Courier, Helvetica Neue, sans-serif;
  h1 {
    padding: 5rem 0 0 0;
  }
}
`;