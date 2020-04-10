import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    about: [AboutMe!]!
  }
  type AboutMe {
    title: String,
    text: String
  }
`

const resolvers = {
  Query: {
    about(parent, args, context) {
      return [
        {title: 'About me'},
        {text: 'My name is James Waller and I am a Web Developer specialising in everything your average web visitor sees and feels. User interface design and front end development.' },
        {text: 'I live in Sydney, Australia, after working in London, England for 9 years as a Front End Developer / UX Designer and graduating as a Bachelor of Multimedia Technology from Leeds Metropolitan University, England in 2006.'},
        {text: 'I like creating unique clean sites that are easy to understand and navigate. All my works comply with web standards, use the latest industry techniques and are hand coded.'},
    ]
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/about' })