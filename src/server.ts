import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./graphql/typeDefs.generated.js";
import { resolvers } from "./graphql/resolvers.generated.js";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PrismaClient } from "@prisma/client";

const server = new ApolloServer({ typeDefs, resolvers });

const prisma = new PrismaClient({
	log: ["query", "info", "warn", "error"],
});

const { url } = await startStandaloneServer(server, {
	context: async () => {
		return { prisma };
	},
});

console.log(`🚀  Server ready at ${url}`);
