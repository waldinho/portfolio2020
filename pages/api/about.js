import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    title: [PageTitle!]!,
    paragraph: [Paragraph!]!,
    images: [Image!]!,
  }
  type PageTitle {
    title: String,
  }
  type Paragraph {
    id: ID,
    text: String,
  }
  type Image {
    id: ID,
  }
`

const resolvers = {
  Query: {
    title(parent, args, context) {
        return [{
            title: 'About me',
          },
      ]},
    paragraph(parent, args, context) {
      return [
        {
            id: 1,
            text: 'My name is James Waller and I am a Web Developer specialising in everything your average web visitor sees and feels. User interface design and front end development.',
        },
        {
            id: 2,
            text: 'I live in Sydney, Australia, after working in London, England for 11 years as a Front End Developer / UX Designer and graduating as a Bachelor of Multimedia Technology from Leeds Metropolitan University, England in 2006.',
        },
        {
            id: 3,
            text: 'I like creating unique clean sites that are easy to understand and navigate. All my works comply with web standards, use the latest industry techniques and are hand coded.',
        }
    ]},
    images(parent, args, context) {
        return [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        }
    ]},
}}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/about' })