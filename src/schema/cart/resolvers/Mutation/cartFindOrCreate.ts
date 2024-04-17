import type { MutationResolvers } from "./../../../../graphql/types.generated";
export const cartFindOrCreate: NonNullable<
	MutationResolvers["cartFindOrCreate"]
> = async (_parent, arg, ctx) => {
	const cart = await ctx.prisma.cart.findFirst({
		where: {
			id: arg.id || undefined,
		},
	});

	if (cart) {
		return cart;
	}

	const newCart = await ctx.prisma.cart.create({
		data: {},
	});

	return newCart;
};
