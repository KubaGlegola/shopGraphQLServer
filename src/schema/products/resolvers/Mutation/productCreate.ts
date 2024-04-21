import type { MutationResolvers } from "./../../../../graphql/types.generated";
import slugify from "slugify";
export const productCreate: NonNullable<
	MutationResolvers["productCreate"]
> = async (_parent, arg, ctx) => {
	return await ctx.prisma.product.create({
		data: {
			name: arg.input.name,
			slug: slugify(arg.input.name),
			price: arg.input.price,
			description: arg.input.description,
			image: arg.input.image,
		},
	});
};
