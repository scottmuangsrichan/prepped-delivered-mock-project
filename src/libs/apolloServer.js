import {ApolloServer} from 'apollo-server-micro';
import schema from '../../graphql/schema';

const apolloServer = new ApolloServer({schema});

export default apolloServer.createHandler({path: '/api/graphql'});
