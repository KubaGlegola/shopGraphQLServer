import type { QueryResolvers } from "./../../../../graphql/types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	arg,
	ctx,
) => {
	return await ctx.prisma.product.findUnique({
		where: { id: arg.id },
		include: { reviews: true },
	});
};
