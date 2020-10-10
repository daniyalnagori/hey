//https://github.com/apollographql/apollo-server/issues/1989

const { ApolloServer, gql } = require("apollo-server-lambda");
const faunadb = require('faunadb'),
  q = faunadb.query;


const typeDefs = gql`
  type Query {
    message: String
  }
`;



const resolvers = {
  Query: {
    message: async (parent, args, context) => {
      try {
        var client = new faunadb.Client({ secret: "fnAD3eidhwACB-l01Y6ZYWhRgycluk-nqyivNUum" });
        let result = await client.query(
          q.Get(q.Ref(q.Collection('posts'), '278635538052811265'))
        );
        
        return result.data.title;
      } catch (err) {
        return err.toString();
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

exports.handler = server.createHandler();

