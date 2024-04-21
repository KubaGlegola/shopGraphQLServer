/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Cart } from "./../schema/cart/resolvers/Cart";
import { CartItem } from "./../schema/cart/resolvers/CartItem";
import { Category } from "./../schema/categories/resolvers/Category";
import { Collection } from "./../schema/collections/resolvers/Collection";
import { cartAddItem as Mutation_cartAddItem } from "./../schema/cart/resolvers/Mutation/cartAddItem";
import { cartFindOrCreate as Mutation_cartFindOrCreate } from "./../schema/cart/resolvers/Mutation/cartFindOrCreate";
import { productCreate as Mutation_productCreate } from "./../schema/products/resolvers/Mutation/productCreate";
import { productDelete as Mutation_productDelete } from "./../schema/products/resolvers/Mutation/productDelete";
import { productUpdate as Mutation_productUpdate } from "./../schema/products/resolvers/Mutation/productUpdate";
import { Order } from "./../schema/orders/resolvers/Order";
import { Product } from "./../schema/products/resolvers/Product";
import { cart as Query_cart } from "./../schema/cart/resolvers/Query/cart";
import { categories as Query_categories } from "./../schema/categories/resolvers/Query/categories";
import { category as Query_category } from "./../schema/categories/resolvers/Query/category";
import { collection as Query_collection } from "./../schema/collections/resolvers/Query/collection";
import { collections as Query_collections } from "./../schema/collections/resolvers/Query/collections";
import { order as Query_order } from "./../schema/orders/resolvers/Query/order";
import { orders as Query_orders } from "./../schema/orders/resolvers/Query/orders";
import { product as Query_product } from "./../schema/products/resolvers/Query/product";
import { products as Query_products } from "./../schema/products/resolvers/Query/products";
import { Review } from "./../schema/reviews/resolvers/Review";
import { DateTimeResolver, JSONResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
	Query: {
		cart: Query_cart,
		categories: Query_categories,
		category: Query_category,
		collection: Query_collection,
		collections: Query_collections,
		order: Query_order,
		orders: Query_orders,
		product: Query_product,
		products: Query_products,
	},
	Mutation: {
		cartAddItem: Mutation_cartAddItem,
		cartFindOrCreate: Mutation_cartFindOrCreate,
		productCreate: Mutation_productCreate,
		productDelete: Mutation_productDelete,
		productUpdate: Mutation_productUpdate,
	},

	Cart: Cart,
	CartItem: CartItem,
	Category: Category,
	Collection: Collection,
	Order: Order,
	Product: Product,
	Review: Review,
	DateTime: DateTimeResolver,
	JSON: JSONResolver,
};
