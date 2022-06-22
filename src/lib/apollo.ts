import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ou97n612ih01z4g165f0iv/master',
    cache: new InMemoryCache()
})