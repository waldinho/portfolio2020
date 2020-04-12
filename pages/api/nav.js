import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    title: [Title1!]!,
    nav: [Items!]!,
  }
  type Title1 {
    title: String,
  }
  type Items {
    id: ID,
    title: String,
    url: String,
  }
`

const resolvers = {
  Query: {
    title(parent, args, context) {
        return [{
              title: 'Navigation',
          },
      ]},
    nav(parent, args, context) {
      return [{
            id: 1,
            title: 'Homepage',
            url: '/',
        },
        {
            id: 2,
            title: 'About me',
            url: '/about',
        },
        {
            id: 3,
            title: 'Services',
            url: '/services',
        },
        {
            id: 4,
            title: 'Portfolio',
            url: '/portfolio',
        },
        {
            id: 5,
            title: 'Resume',
            url: '/resume',
        }
    ]},
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/nav' })