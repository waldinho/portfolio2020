import useSwr from 'swr'
import Head from 'next/head'
import styled from 'styled-components';
import Logo from '../components/Logo'
import Nav from '../components/Nav'

const fetcher = url => fetch(url).then(res => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/REST/portfolio', fetcher)

  if (error) return <div>Failed to load.</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>James Waller | Digital</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Logo />
      <Nav />
      {data.map(item => (
        <Content>
            <h1>{item.title}</h1>
            {item.companies.map(i => (
              <>
                <Company>
                    <CompanyLogo>
                      <img src={`/images/company-${i.id}.png`}/>
                    </CompanyLogo>
                    <CompanyText>
                    <h2>{i.title}</h2> 
                      {i.text.map(x => {
                        const paragraph = <p dangerouslySetInnerHTML={{__html: x.paragraph}}></p>
                        return (
                          <div>{paragraph}</div>
                        )
                      }
                    )}
                    </CompanyText>
                </Company>
              </>
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

const Company = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 426px) {
    flex-direction: row;
  }
  background: #fff;
  margin: 0 0 1rem 0;
  color: #000;
`;

const CompanyLogo = styled.div`
  text-align: center;
  img {
    max-width: 150px;
    padding: 0rem;
    @media screen and (min-width: 426px) {
      padding: 1rem;
    }
    @media screen and (min-width: 1025px) {
      max-width: 200px;
      padding: 2rem;
    }
  }
`;

const CompanyText = styled.div`
  background: #4fec8e;
  padding: 0 1rem 1rem 1rem;
  font-size: 12px;
`;