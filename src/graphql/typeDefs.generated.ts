import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 5, end: 10 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 0, end: 10 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 17, end: 25 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 12, end: 25 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 34, end: 42 },
			},
			directives: [],
			loc: { start: 27, end: 42 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "JSON",
				loc: { start: 51, end: 55 },
			},
			directives: [],
			loc: { start: 44, end: 55 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 68, end: 73 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "cart",
						loc: { start: 78, end: 82 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 83, end: 85 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 87, end: 89 },
									},
									loc: { start: 87, end: 89 },
								},
								loc: { start: 87, end: 90 },
							},
							directives: [],
							loc: { start: 83, end: 90 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Cart",
							loc: { start: 93, end: 97 },
						},
						loc: { start: 93, end: 97 },
					},
					directives: [],
					loc: { start: 78, end: 97 },
				},
			],
			loc: { start: 56, end: 99 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 113, end: 121 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "cartAddItem",
						loc: { start: 126, end: 137 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 138, end: 140 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 142, end: 144 },
									},
									loc: { start: 142, end: 144 },
								},
								loc: { start: 142, end: 145 },
							},
							directives: [],
							loc: { start: 138, end: 145 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 147, end: 152 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "MutationCartAddItemInput",
										loc: { start: 154, end: 178 },
									},
									loc: { start: 154, end: 178 },
								},
								loc: { start: 154, end: 179 },
							},
							directives: [],
							loc: { start: 147, end: 179 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Cart",
								loc: { start: 182, end: 186 },
							},
							loc: { start: 182, end: 186 },
						},
						loc: { start: 182, end: 187 },
					},
					directives: [],
					loc: { start: 126, end: 187 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "cartFindOrCreate",
						loc: { start: 190, end: 206 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 207, end: 209 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "ID",
									loc: { start: 211, end: 213 },
								},
								loc: { start: 211, end: 213 },
							},
							directives: [],
							loc: { start: 207, end: 213 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 215, end: 220 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "MutationCartFindOrCreateInput",
										loc: { start: 222, end: 251 },
									},
									loc: { start: 222, end: 251 },
								},
								loc: { start: 222, end: 252 },
							},
							directives: [],
							loc: { start: 215, end: 252 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Cart",
								loc: { start: 255, end: 259 },
							},
							loc: { start: 255, end: 259 },
						},
						loc: { start: 255, end: 260 },
					},
					directives: [],
					loc: { start: 190, end: 260 },
				},
			],
			loc: { start: 101, end: 262 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "MutationCartFindOrCreateInput",
				loc: { start: 270, end: 299 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "items",
						loc: { start: 304, end: 309 },
					},
					type: {
						kind: "ListType",
						type: {
							kind: "NonNullType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "CartItemInput",
									loc: { start: 312, end: 325 },
								},
								loc: { start: 312, end: 325 },
							},
							loc: { start: 312, end: 326 },
						},
						loc: { start: 311, end: 327 },
					},
					directives: [],
					loc: { start: 304, end: 327 },
				},
			],
			loc: { start: 264, end: 329 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CartItemInput",
				loc: { start: 337, end: 350 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "productId",
						loc: { start: 355, end: 364 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 366, end: 372 },
							},
							loc: { start: 366, end: 372 },
						},
						loc: { start: 366, end: 373 },
					},
					directives: [],
					loc: { start: 355, end: 373 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 376, end: 384 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 386, end: 389 },
							},
							loc: { start: 386, end: 389 },
						},
						loc: { start: 386, end: 390 },
					},
					defaultValue: {
						kind: "IntValue",
						value: "1",
						loc: { start: 393, end: 394 },
					},
					directives: [],
					loc: { start: 376, end: 394 },
				},
			],
			loc: { start: 331, end: 396 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "MutationCartAddItemInput",
				loc: { start: 404, end: 428 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "item",
						loc: { start: 433, end: 437 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CartItemInput",
								loc: { start: 439, end: 452 },
							},
							loc: { start: 439, end: 452 },
						},
						loc: { start: 439, end: 453 },
					},
					directives: [],
					loc: { start: 433, end: 453 },
				},
			],
			loc: { start: 398, end: 455 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Cart",
				loc: { start: 462, end: 466 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 471, end: 473 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 475, end: 477 },
							},
							loc: { start: 475, end: 477 },
						},
						loc: { start: 475, end: 478 },
					},
					directives: [],
					loc: { start: 471, end: 478 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "items",
						loc: { start: 481, end: 486 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "CartItem",
										loc: { start: 489, end: 497 },
									},
									loc: { start: 489, end: 497 },
								},
								loc: { start: 489, end: 498 },
							},
							loc: { start: 488, end: 499 },
						},
						loc: { start: 488, end: 500 },
					},
					directives: [],
					loc: { start: 481, end: 500 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 503, end: 508 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Float",
								loc: { start: 510, end: 515 },
							},
							loc: { start: 510, end: 515 },
						},
						loc: { start: 510, end: 516 },
					},
					directives: [],
					loc: { start: 503, end: 516 },
				},
			],
			loc: { start: 457, end: 518 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CartItem",
				loc: { start: 525, end: 533 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 538, end: 545 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 547, end: 554 },
							},
							loc: { start: 547, end: 554 },
						},
						loc: { start: 547, end: 555 },
					},
					directives: [],
					loc: { start: 538, end: 555 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 558, end: 566 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 568, end: 571 },
							},
							loc: { start: 568, end: 571 },
						},
						loc: { start: 568, end: 572 },
					},
					directives: [],
					loc: { start: 558, end: 572 },
				},
			],
			loc: { start: 520, end: 574 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 587, end: 592 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 597, end: 607 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Category",
										loc: { start: 610, end: 618 },
									},
									loc: { start: 610, end: 618 },
								},
								loc: { start: 610, end: 619 },
							},
							loc: { start: 609, end: 620 },
						},
						loc: { start: 609, end: 621 },
					},
					directives: [],
					loc: { start: 597, end: 621 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 624, end: 632 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 633, end: 635 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "ID",
									loc: { start: 637, end: 639 },
								},
								loc: { start: 637, end: 639 },
							},
							directives: [],
							loc: { start: 633, end: 639 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "slug",
								loc: { start: 641, end: 645 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 647, end: 653 },
								},
								loc: { start: 647, end: 653 },
							},
							directives: [],
							loc: { start: 641, end: 653 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 656, end: 664 },
						},
						loc: { start: 656, end: 664 },
					},
					directives: [],
					loc: { start: 624, end: 664 },
				},
			],
			loc: { start: 575, end: 666 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Category",
				loc: { start: 673, end: 681 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 686, end: 688 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 690, end: 692 },
							},
							loc: { start: 690, end: 692 },
						},
						loc: { start: 690, end: 693 },
					},
					directives: [],
					loc: { start: 686, end: 693 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 696, end: 700 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 702, end: 708 },
							},
							loc: { start: 702, end: 708 },
						},
						loc: { start: 702, end: 709 },
					},
					directives: [],
					loc: { start: 696, end: 709 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 712, end: 723 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 725, end: 731 },
							},
							loc: { start: 725, end: 731 },
						},
						loc: { start: 725, end: 732 },
					},
					directives: [],
					loc: { start: 712, end: 732 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 735, end: 739 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 741, end: 747 },
							},
							loc: { start: 741, end: 747 },
						},
						loc: { start: 741, end: 748 },
					},
					directives: [],
					loc: { start: 735, end: 748 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 751, end: 759 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Product",
										loc: { start: 762, end: 769 },
									},
									loc: { start: 762, end: 769 },
								},
								loc: { start: 762, end: 770 },
							},
							loc: { start: 761, end: 771 },
						},
						loc: { start: 761, end: 772 },
					},
					directives: [],
					loc: { start: 751, end: 772 },
				},
			],
			loc: { start: 668, end: 774 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 787, end: 792 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 797, end: 808 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Collection",
										loc: { start: 811, end: 821 },
									},
									loc: { start: 811, end: 821 },
								},
								loc: { start: 811, end: 822 },
							},
							loc: { start: 810, end: 823 },
						},
						loc: { start: 810, end: 824 },
					},
					directives: [],
					loc: { start: 797, end: 824 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 827, end: 837 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 838, end: 840 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "ID",
									loc: { start: 842, end: 844 },
								},
								loc: { start: 842, end: 844 },
							},
							directives: [],
							loc: { start: 838, end: 844 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "slug",
								loc: { start: 846, end: 850 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 852, end: 858 },
								},
								loc: { start: 852, end: 858 },
							},
							directives: [],
							loc: { start: 846, end: 858 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 861, end: 871 },
						},
						loc: { start: 861, end: 871 },
					},
					directives: [],
					loc: { start: 827, end: 871 },
				},
			],
			loc: { start: 775, end: 873 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 880, end: 890 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 895, end: 897 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 899, end: 901 },
							},
							loc: { start: 899, end: 901 },
						},
						loc: { start: 899, end: 902 },
					},
					directives: [],
					loc: { start: 895, end: 902 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 905, end: 909 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 911, end: 917 },
							},
							loc: { start: 911, end: 917 },
						},
						loc: { start: 911, end: 918 },
					},
					directives: [],
					loc: { start: 905, end: 918 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 921, end: 932 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 934, end: 940 },
							},
							loc: { start: 934, end: 940 },
						},
						loc: { start: 934, end: 941 },
					},
					directives: [],
					loc: { start: 921, end: 941 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 944, end: 948 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 950, end: 956 },
							},
							loc: { start: 950, end: 956 },
						},
						loc: { start: 950, end: 957 },
					},
					directives: [],
					loc: { start: 944, end: 957 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 960, end: 968 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Product",
										loc: { start: 971, end: 978 },
									},
									loc: { start: 971, end: 978 },
								},
								loc: { start: 971, end: 979 },
							},
							loc: { start: 970, end: 980 },
						},
						loc: { start: 970, end: 981 },
					},
					directives: [],
					loc: { start: 960, end: 981 },
				},
			],
			loc: { start: 875, end: 983 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 996, end: 1001 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 1006, end: 1012 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Order",
										loc: { start: 1015, end: 1020 },
									},
									loc: { start: 1015, end: 1020 },
								},
								loc: { start: 1015, end: 1021 },
							},
							loc: { start: 1014, end: 1022 },
						},
						loc: { start: 1014, end: 1023 },
					},
					directives: [],
					loc: { start: 1006, end: 1023 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "order",
						loc: { start: 1026, end: 1031 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1032, end: 1034 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1036, end: 1038 },
									},
									loc: { start: 1036, end: 1038 },
								},
								loc: { start: 1036, end: 1039 },
							},
							directives: [],
							loc: { start: 1032, end: 1039 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 1042, end: 1047 },
						},
						loc: { start: 1042, end: 1047 },
					},
					directives: [],
					loc: { start: 1026, end: 1047 },
				},
			],
			loc: { start: 984, end: 1049 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Order",
				loc: { start: 1056, end: 1061 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 1066, end: 1068 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1070, end: 1072 },
							},
							loc: { start: 1070, end: 1072 },
						},
						loc: { start: 1070, end: 1073 },
					},
					directives: [],
					loc: { start: 1066, end: 1073 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "totalAmount",
						loc: { start: 1076, end: 1087 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1089, end: 1092 },
							},
							loc: { start: 1089, end: 1092 },
						},
						loc: { start: 1089, end: 1093 },
					},
					directives: [],
					loc: { start: 1076, end: 1093 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "lines",
						loc: { start: 1096, end: 1101 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "JSON",
								loc: { start: 1103, end: 1107 },
							},
							loc: { start: 1103, end: 1107 },
						},
						loc: { start: 1103, end: 1108 },
					},
					directives: [],
					loc: { start: 1096, end: 1108 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1111, end: 1117 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "OrderStatus",
								loc: { start: 1119, end: 1130 },
							},
							loc: { start: 1119, end: 1130 },
						},
						loc: { start: 1119, end: 1131 },
					},
					directives: [],
					loc: { start: 1111, end: 1131 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1134, end: 1143 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1145, end: 1153 },
							},
							loc: { start: 1145, end: 1153 },
						},
						loc: { start: 1145, end: 1154 },
					},
					directives: [],
					loc: { start: 1134, end: 1154 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1157, end: 1166 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1168, end: 1176 },
							},
							loc: { start: 1168, end: 1176 },
						},
						loc: { start: 1168, end: 1177 },
					},
					directives: [],
					loc: { start: 1157, end: 1177 },
				},
			],
			loc: { start: 1051, end: 1179 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderStatus",
				loc: { start: 1186, end: 1197 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 1202, end: 1211 },
					},
					directives: [],
					loc: { start: 1202, end: 1211 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CREATED",
						loc: { start: 1214, end: 1221 },
					},
					directives: [],
					loc: { start: 1214, end: 1221 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "FULLFILLED",
						loc: { start: 1224, end: 1234 },
					},
					directives: [],
					loc: { start: 1224, end: 1234 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "PAID",
						loc: { start: 1237, end: 1241 },
					},
					directives: [],
					loc: { start: 1237, end: 1241 },
				},
			],
			loc: { start: 1181, end: 1243 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 1256, end: 1261 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1266, end: 1274 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Product",
										loc: { start: 1277, end: 1284 },
									},
									loc: { start: 1277, end: 1284 },
								},
								loc: { start: 1277, end: 1285 },
							},
							loc: { start: 1276, end: 1286 },
						},
						loc: { start: 1276, end: 1287 },
					},
					directives: [],
					loc: { start: 1266, end: 1287 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1290, end: 1297 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1298, end: 1300 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1302, end: 1304 },
									},
									loc: { start: 1302, end: 1304 },
								},
								loc: { start: 1302, end: 1305 },
							},
							directives: [],
							loc: { start: 1298, end: 1305 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1308, end: 1315 },
						},
						loc: { start: 1308, end: 1315 },
					},
					directives: [],
					loc: { start: 1290, end: 1315 },
				},
			],
			loc: { start: 1244, end: 1317 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1331, end: 1339 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCreate",
						loc: { start: 1344, end: 1357 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 1358, end: 1363 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "MutationProductCreateInput",
										loc: { start: 1365, end: 1391 },
									},
									loc: { start: 1365, end: 1391 },
								},
								loc: { start: 1365, end: 1392 },
							},
							directives: [],
							loc: { start: 1358, end: 1392 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1395, end: 1402 },
							},
							loc: { start: 1395, end: 1402 },
						},
						loc: { start: 1395, end: 1403 },
					},
					directives: [],
					loc: { start: 1344, end: 1403 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productUpdate",
						loc: { start: 1406, end: 1419 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1420, end: 1422 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1424, end: 1426 },
									},
									loc: { start: 1424, end: 1426 },
								},
								loc: { start: 1424, end: 1427 },
							},
							directives: [],
							loc: { start: 1420, end: 1427 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 1429, end: 1434 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "MutationProductUpdateInput",
										loc: { start: 1436, end: 1462 },
									},
									loc: { start: 1436, end: 1462 },
								},
								loc: { start: 1436, end: 1463 },
							},
							directives: [],
							loc: { start: 1429, end: 1463 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1466, end: 1473 },
							},
							loc: { start: 1466, end: 1473 },
						},
						loc: { start: 1466, end: 1474 },
					},
					directives: [],
					loc: { start: 1406, end: 1474 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productDelete",
						loc: { start: 1477, end: 1490 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1491, end: 1493 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1495, end: 1497 },
									},
									loc: { start: 1495, end: 1497 },
								},
								loc: { start: 1495, end: 1498 },
							},
							directives: [],
							loc: { start: 1491, end: 1498 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1501, end: 1508 },
							},
							loc: { start: 1501, end: 1508 },
						},
						loc: { start: 1501, end: 1509 },
					},
					directives: [],
					loc: { start: 1477, end: 1509 },
				},
			],
			loc: { start: 1319, end: 1511 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Product",
				loc: { start: 1518, end: 1525 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 1530, end: 1532 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1534, end: 1536 },
							},
							loc: { start: 1534, end: 1536 },
						},
						loc: { start: 1534, end: 1537 },
					},
					directives: [],
					loc: { start: 1530, end: 1537 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1540, end: 1544 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1546, end: 1552 },
							},
							loc: { start: 1546, end: 1552 },
						},
						loc: { start: 1546, end: 1553 },
					},
					directives: [],
					loc: { start: 1540, end: 1553 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1556, end: 1561 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1563, end: 1566 },
							},
							loc: { start: 1563, end: 1566 },
						},
						loc: { start: 1563, end: 1567 },
					},
					directives: [],
					loc: { start: 1556, end: 1567 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1570, end: 1581 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1583, end: 1589 },
							},
							loc: { start: 1583, end: 1589 },
						},
						loc: { start: 1583, end: 1590 },
					},
					directives: [],
					loc: { start: 1570, end: 1590 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "image",
						loc: { start: 1593, end: 1598 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1600, end: 1606 },
							},
							loc: { start: 1600, end: 1606 },
						},
						loc: { start: 1600, end: 1607 },
					},
					directives: [],
					loc: { start: 1593, end: 1607 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 1610, end: 1617 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Review",
										loc: { start: 1620, end: 1626 },
									},
									loc: { start: 1620, end: 1626 },
								},
								loc: { start: 1620, end: 1627 },
							},
							loc: { start: 1619, end: 1628 },
						},
						loc: { start: 1619, end: 1629 },
					},
					directives: [],
					loc: { start: 1610, end: 1629 },
				},
			],
			loc: { start: 1513, end: 1631 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "MutationProductCreateInput",
				loc: { start: 1639, end: 1665 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1670, end: 1674 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1676, end: 1682 },
							},
							loc: { start: 1676, end: 1682 },
						},
						loc: { start: 1676, end: 1683 },
					},
					directives: [],
					loc: { start: 1670, end: 1683 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1686, end: 1691 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1693, end: 1696 },
							},
							loc: { start: 1693, end: 1696 },
						},
						loc: { start: 1693, end: 1697 },
					},
					directives: [],
					loc: { start: 1686, end: 1697 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1700, end: 1711 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1713, end: 1719 },
							},
							loc: { start: 1713, end: 1719 },
						},
						loc: { start: 1713, end: 1720 },
					},
					directives: [],
					loc: { start: 1700, end: 1720 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "image",
						loc: { start: 1723, end: 1728 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1730, end: 1736 },
							},
							loc: { start: 1730, end: 1736 },
						},
						loc: { start: 1730, end: 1737 },
					},
					directives: [],
					loc: { start: 1723, end: 1737 },
				},
			],
			loc: { start: 1633, end: 1739 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "MutationProductUpdateInput",
				loc: { start: 1747, end: 1773 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1778, end: 1782 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1784, end: 1790 },
						},
						loc: { start: 1784, end: 1790 },
					},
					directives: [],
					loc: { start: 1778, end: 1790 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1793, end: 1798 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Int",
							loc: { start: 1800, end: 1803 },
						},
						loc: { start: 1800, end: 1803 },
					},
					directives: [],
					loc: { start: 1793, end: 1803 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1806, end: 1817 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1819, end: 1825 },
						},
						loc: { start: 1819, end: 1825 },
					},
					directives: [],
					loc: { start: 1806, end: 1825 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "image",
						loc: { start: 1828, end: 1833 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1835, end: 1841 },
						},
						loc: { start: 1835, end: 1841 },
					},
					directives: [],
					loc: { start: 1828, end: 1841 },
				},
			],
			loc: { start: 1741, end: 1843 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Review",
				loc: { start: 1849, end: 1855 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 1860, end: 1862 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1864, end: 1866 },
							},
							loc: { start: 1864, end: 1866 },
						},
						loc: { start: 1864, end: 1867 },
					},
					directives: [],
					loc: { start: 1860, end: 1867 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1870, end: 1875 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1877, end: 1883 },
							},
							loc: { start: 1877, end: 1883 },
						},
						loc: { start: 1877, end: 1884 },
					},
					directives: [],
					loc: { start: 1870, end: 1884 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1887, end: 1898 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1900, end: 1906 },
							},
							loc: { start: 1900, end: 1906 },
						},
						loc: { start: 1900, end: 1907 },
					},
					directives: [],
					loc: { start: 1887, end: 1907 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 1910, end: 1916 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1918, end: 1921 },
							},
							loc: { start: 1918, end: 1921 },
						},
						loc: { start: 1918, end: 1922 },
					},
					directives: [],
					loc: { start: 1910, end: 1922 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1925, end: 1934 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1936, end: 1944 },
							},
							loc: { start: 1936, end: 1944 },
						},
						loc: { start: 1936, end: 1945 },
					},
					directives: [],
					loc: { start: 1925, end: 1945 },
				},
			],
			loc: { start: 1844, end: 1947 },
		},
	],
	loc: { start: 0, end: 1948 },
} as unknown as DocumentNode;
