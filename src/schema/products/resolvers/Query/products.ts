import type { QueryResolvers } from "./../../../../graphql/types.generated";
export const products: NonNullable<
	QueryResolvers["products"]
> = async (_parent, _arg, ctx) => {
	return await ctx.prisma.product.findMany({
		include: {
			reviews: true,
		},
	});
};
