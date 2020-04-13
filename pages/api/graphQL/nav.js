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
    target: String,
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
            title: 'Home',
            url: '/',
        },
        {
            id: 2,
            title: 'About',
            url: '/about',
        },
        {
            id: 3,
            title: 'Services',
            url: '/services',
        },
        {
            id: 4,
            title: 'Work',
            url: '/work',
        },
        {
            id: 5,
            title: 'Resume',
            url: '/resume.pdf',
            target: '_blank'
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

export default apolloServer.createHandler({ path: '/api/graphQL/nav' })