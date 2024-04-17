import {
	GraphQLResolveInfo,
	GraphQLScalarType,
	GraphQLScalarTypeConfig,
} from "graphql";
import { Context, Mapper } from "../types.js";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename"
				? T[P]
				: never;
	  };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: Date; output: Date };
	JSON: { input: any; output: any };
};

export type Cart = {
	__typename?: "Cart";
	id: Scalars["ID"]["output"];
	items: Array<CartItem>;
	total: Scalars["Float"]["output"];
};

export type CartItem = {
	__typename?: "CartItem";
	product: Product;
	quantity: Scalars["Int"]["output"];
};

export type CartItemInput = {
	productId: Scalars["String"]["input"];
	quantity?: Scalars["Int"]["input"];
};

export type Category = {
	__typename?: "Category";
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type Collection = {
	__typename?: "Collection";
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type Mutation = {
	__typename?: "Mutation";
	cartAddItem: Cart;
	cartFindOrCreate: Cart;
};

export type MutationcartAddItemArgs = {
	id: Scalars["ID"]["input"];
	input: MutationCartAddItemInput;
};

export type MutationcartFindOrCreateArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	input: MutationCartFindOrCreateInput;
};

export type MutationCartAddItemInput = {
	item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
	productId: Scalars["String"]["input"];
	quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Order = {
	__typename?: "Order";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	lines: Scalars["JSON"]["output"];
	status: OrderStatus;
	totalAmount: Scalars["Int"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type OrderStatus =
	| "CANCELLED"
	| "CREATED"
	| "FULLFILLED"
	| "PAID";

export type Product = {
	__typename?: "Product";
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	image: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	price: Scalars["Int"]["output"];
	reviews: Array<Review>;
};

export type Query = {
	__typename?: "Query";
	cart?: Maybe<Cart>;
	categories: Array<Category>;
	category?: Maybe<Category>;
	collection?: Maybe<Collection>;
	collections: Array<Collection>;
	order?: Maybe<Order>;
	orders: Array<Order>;
	product?: Maybe<Product>;
	products: Array<Product>;
};

export type QuerycartArgs = {
	id: Scalars["ID"]["input"];
};

export type QuerycategoryArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QuerycollectionArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryorderArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryproductArgs = {
	id: Scalars["ID"]["input"];
};

export type Review = {
	__typename?: "Review";
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	rating: Scalars["Int"]["output"];
	title: Scalars["String"]["output"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<
	TResult,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<
	TResult,
	TParent,
	TContext,
	TArgs,
> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> =
	(
		parent: TParent,
		args: TArgs,
		context: TContext,
		info?: GraphQLResolveInfo,
	) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<
	TResult,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<
			TResult,
			TKey,
			TParent,
			TContext,
			TArgs
	  >
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Cart: ResolverTypeWrapper<Mapper<Cart>>;
	ID: ResolverTypeWrapper<Mapper<Scalars["ID"]["output"]>>;
	Float: ResolverTypeWrapper<Mapper<Scalars["Float"]["output"]>>;
	CartItem: ResolverTypeWrapper<Mapper<CartItem>>;
	Int: ResolverTypeWrapper<Mapper<Scalars["Int"]["output"]>>;
	CartItemInput: ResolverTypeWrapper<Mapper<CartItemInput>>;
	String: ResolverTypeWrapper<Mapper<Scalars["String"]["output"]>>;
	Category: ResolverTypeWrapper<Mapper<Category>>;
	Collection: ResolverTypeWrapper<Mapper<Collection>>;
	DateTime: ResolverTypeWrapper<
		Mapper<Scalars["DateTime"]["output"]>
	>;
	JSON: ResolverTypeWrapper<Mapper<Scalars["JSON"]["output"]>>;
	Mutation: ResolverTypeWrapper<{}>;
	MutationCartAddItemInput: ResolverTypeWrapper<
		Mapper<MutationCartAddItemInput>
	>;
	MutationCartFindOrCreateInput: ResolverTypeWrapper<
		Mapper<MutationCartFindOrCreateInput>
	>;
	Order: ResolverTypeWrapper<Mapper<Order>>;
	OrderStatus: ResolverTypeWrapper<Mapper<OrderStatus>>;
	Product: ResolverTypeWrapper<Mapper<Product>>;
	Query: ResolverTypeWrapper<{}>;
	Review: ResolverTypeWrapper<Mapper<Review>>;
	Boolean: ResolverTypeWrapper<Mapper<Scalars["Boolean"]["output"]>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Cart: Mapper<Cart>;
	ID: Mapper<Scalars["ID"]["output"]>;
	Float: Mapper<Scalars["Float"]["output"]>;
	CartItem: Mapper<CartItem>;
	Int: Mapper<Scalars["Int"]["output"]>;
	CartItemInput: Mapper<CartItemInput>;
	String: Mapper<Scalars["String"]["output"]>;
	Category: Mapper<Category>;
	Collection: Mapper<Collection>;
	DateTime: Mapper<Scalars["DateTime"]["output"]>;
	JSON: Mapper<Scalars["JSON"]["output"]>;
	Mutation: {};
	MutationCartAddItemInput: Mapper<MutationCartAddItemInput>;
	MutationCartFindOrCreateInput: Mapper<MutationCartFindOrCreateInput>;
	Order: Mapper<Order>;
	Product: Mapper<Product>;
	Query: {};
	Review: Mapper<Review>;
	Boolean: Mapper<Scalars["Boolean"]["output"]>;
};

export type CartResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Cart"] = ResolversParentTypes["Cart"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	items?: Resolver<
		Array<ResolversTypes["CartItem"]>,
		ParentType,
		ContextType
	>;
	total?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["CartItem"] = ResolversParentTypes["CartItem"],
> = {
	product?: Resolver<
		ResolversTypes["Product"],
		ParentType,
		ContextType
	>;
	quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
	description?: Resolver<
		ResolversTypes["String"],
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType
	>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = {
	description?: Resolver<
		ResolversTypes["String"],
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType
	>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
	name: "DateTime";
}

export interface JSONScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["JSON"], any> {
	name: "JSON";
}

export type MutationResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
	cartAddItem?: Resolver<
		ResolversTypes["Cart"],
		ParentType,
		ContextType,
		RequireFields<MutationcartAddItemArgs, "id" | "input">
	>;
	cartFindOrCreate?: Resolver<
		ResolversTypes["Cart"],
		ParentType,
		ContextType,
		RequireFields<MutationcartFindOrCreateArgs, "input">
	>;
};

export type OrderResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = {
	createdAt?: Resolver<
		ResolversTypes["DateTime"],
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	lines?: Resolver<ResolversTypes["JSON"], ParentType, ContextType>;
	status?: Resolver<
		ResolversTypes["OrderStatus"],
		ParentType,
		ContextType
	>;
	totalAmount?: Resolver<
		ResolversTypes["Int"],
		ParentType,
		ContextType
	>;
	updatedAt?: Resolver<
		ResolversTypes["DateTime"],
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
	description?: Resolver<
		ResolversTypes["String"],
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	reviews?: Resolver<
		Array<ResolversTypes["Review"]>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	cart?: Resolver<
		Maybe<ResolversTypes["Cart"]>,
		ParentType,
		ContextType,
		RequireFields<QuerycartArgs, "id">
	>;
	categories?: Resolver<
		Array<ResolversTypes["Category"]>,
		ParentType,
		ContextType
	>;
	category?: Resolver<
		Maybe<ResolversTypes["Category"]>,
		ParentType,
		ContextType,
		Partial<QuerycategoryArgs>
	>;
	collection?: Resolver<
		Maybe<ResolversTypes["Collection"]>,
		ParentType,
		ContextType,
		Partial<QuerycollectionArgs>
	>;
	collections?: Resolver<
		Array<ResolversTypes["Collection"]>,
		ParentType,
		ContextType
	>;
	order?: Resolver<
		Maybe<ResolversTypes["Order"]>,
		ParentType,
		ContextType,
		RequireFields<QueryorderArgs, "id">
	>;
	orders?: Resolver<
		Array<ResolversTypes["Order"]>,
		ParentType,
		ContextType
	>;
	product?: Resolver<
		Maybe<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryproductArgs, "id">
	>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType
	>;
};

export type ReviewResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Review"] = ResolversParentTypes["Review"],
> = {
	createdAt?: Resolver<
		ResolversTypes["DateTime"],
		ParentType,
		ContextType
	>;
	description?: Resolver<
		ResolversTypes["String"],
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
	Cart?: CartResolvers<ContextType>;
	CartItem?: CartItemResolvers<ContextType>;
	Category?: CategoryResolvers<ContextType>;
	Collection?: CollectionResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
	JSON?: GraphQLScalarType;
	Mutation?: MutationResolvers<ContextType>;
	Order?: OrderResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Review?: ReviewResolvers<ContextType>;
};
