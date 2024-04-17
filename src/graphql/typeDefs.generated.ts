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
						value: "productId",
						loc: { start: 304, end: 313 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 315, end: 321 },
							},
							loc: { start: 315, end: 321 },
						},
						loc: { start: 315, end: 322 },
					},
					directives: [],
					loc: { start: 304, end: 322 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 325, end: 333 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Int",
							loc: { start: 335, end: 338 },
						},
						loc: { start: 335, end: 338 },
					},
					defaultValue: {
						kind: "IntValue",
						value: "1",
						loc: { start: 341, end: 342 },
					},
					directives: [],
					loc: { start: 325, end: 342 },
				},
			],
			loc: { start: 264, end: 344 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CartItemInput",
				loc: { start: 352, end: 365 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "productId",
						loc: { start: 370, end: 379 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 381, end: 387 },
							},
							loc: { start: 381, end: 387 },
						},
						loc: { start: 381, end: 388 },
					},
					directives: [],
					loc: { start: 370, end: 388 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 391, end: 399 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 401, end: 404 },
							},
							loc: { start: 401, end: 404 },
						},
						loc: { start: 401, end: 405 },
					},
					defaultValue: {
						kind: "IntValue",
						value: "1",
						loc: { start: 408, end: 409 },
					},
					directives: [],
					loc: { start: 391, end: 409 },
				},
			],
			loc: { start: 346, end: 411 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "MutationCartAddItemInput",
				loc: { start: 419, end: 443 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "item",
						loc: { start: 448, end: 452 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CartItemInput",
								loc: { start: 454, end: 467 },
							},
							loc: { start: 454, end: 467 },
						},
						loc: { start: 454, end: 468 },
					},
					directives: [],
					loc: { start: 448, end: 468 },
				},
			],
			loc: { start: 413, end: 470 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Cart",
				loc: { start: 477, end: 481 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 486, end: 488 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 490, end: 492 },
							},
							loc: { start: 490, end: 492 },
						},
						loc: { start: 490, end: 493 },
					},
					directives: [],
					loc: { start: 486, end: 493 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "items",
						loc: { start: 496, end: 501 },
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
										loc: { start: 504, end: 512 },
									},
									loc: { start: 504, end: 512 },
								},
								loc: { start: 504, end: 513 },
							},
							loc: { start: 503, end: 514 },
						},
						loc: { start: 503, end: 515 },
					},
					directives: [],
					loc: { start: 496, end: 515 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 518, end: 523 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Float",
								loc: { start: 525, end: 530 },
							},
							loc: { start: 525, end: 530 },
						},
						loc: { start: 525, end: 531 },
					},
					directives: [],
					loc: { start: 518, end: 531 },
				},
			],
			loc: { start: 472, end: 533 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CartItem",
				loc: { start: 540, end: 548 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 553, end: 560 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 562, end: 569 },
							},
							loc: { start: 562, end: 569 },
						},
						loc: { start: 562, end: 570 },
					},
					directives: [],
					loc: { start: 553, end: 570 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 573, end: 581 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 583, end: 586 },
							},
							loc: { start: 583, end: 586 },
						},
						loc: { start: 583, end: 587 },
					},
					directives: [],
					loc: { start: 573, end: 587 },
				},
			],
			loc: { start: 535, end: 589 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 602, end: 607 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 612, end: 622 },
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
										loc: { start: 625, end: 633 },
									},
									loc: { start: 625, end: 633 },
								},
								loc: { start: 625, end: 634 },
							},
							loc: { start: 624, end: 635 },
						},
						loc: { start: 624, end: 636 },
					},
					directives: [],
					loc: { start: 612, end: 636 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 639, end: 647 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 648, end: 650 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "ID",
									loc: { start: 652, end: 654 },
								},
								loc: { start: 652, end: 654 },
							},
							directives: [],
							loc: { start: 648, end: 654 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "slug",
								loc: { start: 656, end: 660 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 662, end: 668 },
								},
								loc: { start: 662, end: 668 },
							},
							directives: [],
							loc: { start: 656, end: 668 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 671, end: 679 },
						},
						loc: { start: 671, end: 679 },
					},
					directives: [],
					loc: { start: 639, end: 679 },
				},
			],
			loc: { start: 590, end: 681 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Category",
				loc: { start: 688, end: 696 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 701, end: 703 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 705, end: 707 },
							},
							loc: { start: 705, end: 707 },
						},
						loc: { start: 705, end: 708 },
					},
					directives: [],
					loc: { start: 701, end: 708 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 711, end: 715 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 717, end: 723 },
							},
							loc: { start: 717, end: 723 },
						},
						loc: { start: 717, end: 724 },
					},
					directives: [],
					loc: { start: 711, end: 724 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 727, end: 738 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 740, end: 746 },
							},
							loc: { start: 740, end: 746 },
						},
						loc: { start: 740, end: 747 },
					},
					directives: [],
					loc: { start: 727, end: 747 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 750, end: 754 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 756, end: 762 },
							},
							loc: { start: 756, end: 762 },
						},
						loc: { start: 756, end: 763 },
					},
					directives: [],
					loc: { start: 750, end: 763 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 766, end: 774 },
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
										loc: { start: 777, end: 784 },
									},
									loc: { start: 777, end: 784 },
								},
								loc: { start: 777, end: 785 },
							},
							loc: { start: 776, end: 786 },
						},
						loc: { start: 776, end: 787 },
					},
					directives: [],
					loc: { start: 766, end: 787 },
				},
			],
			loc: { start: 683, end: 789 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 802, end: 807 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 812, end: 823 },
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
										loc: { start: 826, end: 836 },
									},
									loc: { start: 826, end: 836 },
								},
								loc: { start: 826, end: 837 },
							},
							loc: { start: 825, end: 838 },
						},
						loc: { start: 825, end: 839 },
					},
					directives: [],
					loc: { start: 812, end: 839 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 842, end: 852 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 853, end: 855 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "ID",
									loc: { start: 857, end: 859 },
								},
								loc: { start: 857, end: 859 },
							},
							directives: [],
							loc: { start: 853, end: 859 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "slug",
								loc: { start: 861, end: 865 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 867, end: 873 },
								},
								loc: { start: 867, end: 873 },
							},
							directives: [],
							loc: { start: 861, end: 873 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 876, end: 886 },
						},
						loc: { start: 876, end: 886 },
					},
					directives: [],
					loc: { start: 842, end: 886 },
				},
			],
			loc: { start: 790, end: 888 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 895, end: 905 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 910, end: 912 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 914, end: 916 },
							},
							loc: { start: 914, end: 916 },
						},
						loc: { start: 914, end: 917 },
					},
					directives: [],
					loc: { start: 910, end: 917 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 920, end: 924 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 926, end: 932 },
							},
							loc: { start: 926, end: 932 },
						},
						loc: { start: 926, end: 933 },
					},
					directives: [],
					loc: { start: 920, end: 933 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 936, end: 947 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 949, end: 955 },
							},
							loc: { start: 949, end: 955 },
						},
						loc: { start: 949, end: 956 },
					},
					directives: [],
					loc: { start: 936, end: 956 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 959, end: 963 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 965, end: 971 },
							},
							loc: { start: 965, end: 971 },
						},
						loc: { start: 965, end: 972 },
					},
					directives: [],
					loc: { start: 959, end: 972 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 975, end: 983 },
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
										loc: { start: 986, end: 993 },
									},
									loc: { start: 986, end: 993 },
								},
								loc: { start: 986, end: 994 },
							},
							loc: { start: 985, end: 995 },
						},
						loc: { start: 985, end: 996 },
					},
					directives: [],
					loc: { start: 975, end: 996 },
				},
			],
			loc: { start: 890, end: 998 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 1011, end: 1016 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 1021, end: 1027 },
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
										loc: { start: 1030, end: 1035 },
									},
									loc: { start: 1030, end: 1035 },
								},
								loc: { start: 1030, end: 1036 },
							},
							loc: { start: 1029, end: 1037 },
						},
						loc: { start: 1029, end: 1038 },
					},
					directives: [],
					loc: { start: 1021, end: 1038 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "order",
						loc: { start: 1041, end: 1046 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1047, end: 1049 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1051, end: 1053 },
									},
									loc: { start: 1051, end: 1053 },
								},
								loc: { start: 1051, end: 1054 },
							},
							directives: [],
							loc: { start: 1047, end: 1054 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 1057, end: 1062 },
						},
						loc: { start: 1057, end: 1062 },
					},
					directives: [],
					loc: { start: 1041, end: 1062 },
				},
			],
			loc: { start: 999, end: 1064 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Order",
				loc: { start: 1071, end: 1076 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 1081, end: 1083 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1085, end: 1087 },
							},
							loc: { start: 1085, end: 1087 },
						},
						loc: { start: 1085, end: 1088 },
					},
					directives: [],
					loc: { start: 1081, end: 1088 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "totalAmount",
						loc: { start: 1091, end: 1102 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1104, end: 1107 },
							},
							loc: { start: 1104, end: 1107 },
						},
						loc: { start: 1104, end: 1108 },
					},
					directives: [],
					loc: { start: 1091, end: 1108 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "lines",
						loc: { start: 1111, end: 1116 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "JSON",
								loc: { start: 1118, end: 1122 },
							},
							loc: { start: 1118, end: 1122 },
						},
						loc: { start: 1118, end: 1123 },
					},
					directives: [],
					loc: { start: 1111, end: 1123 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1126, end: 1132 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "OrderStatus",
								loc: { start: 1134, end: 1145 },
							},
							loc: { start: 1134, end: 1145 },
						},
						loc: { start: 1134, end: 1146 },
					},
					directives: [],
					loc: { start: 1126, end: 1146 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1149, end: 1158 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1160, end: 1168 },
							},
							loc: { start: 1160, end: 1168 },
						},
						loc: { start: 1160, end: 1169 },
					},
					directives: [],
					loc: { start: 1149, end: 1169 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1172, end: 1181 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1183, end: 1191 },
							},
							loc: { start: 1183, end: 1191 },
						},
						loc: { start: 1183, end: 1192 },
					},
					directives: [],
					loc: { start: 1172, end: 1192 },
				},
			],
			loc: { start: 1066, end: 1194 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderStatus",
				loc: { start: 1201, end: 1212 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 1217, end: 1226 },
					},
					directives: [],
					loc: { start: 1217, end: 1226 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CREATED",
						loc: { start: 1229, end: 1236 },
					},
					directives: [],
					loc: { start: 1229, end: 1236 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "FULLFILLED",
						loc: { start: 1239, end: 1249 },
					},
					directives: [],
					loc: { start: 1239, end: 1249 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "PAID",
						loc: { start: 1252, end: 1256 },
					},
					directives: [],
					loc: { start: 1252, end: 1256 },
				},
			],
			loc: { start: 1196, end: 1258 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Query",
				loc: { start: 1271, end: 1276 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1281, end: 1289 },
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
										loc: { start: 1292, end: 1299 },
									},
									loc: { start: 1292, end: 1299 },
								},
								loc: { start: 1292, end: 1300 },
							},
							loc: { start: 1291, end: 1301 },
						},
						loc: { start: 1291, end: 1302 },
					},
					directives: [],
					loc: { start: 1281, end: 1302 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1305, end: 1312 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1313, end: 1315 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1317, end: 1319 },
									},
									loc: { start: 1317, end: 1319 },
								},
								loc: { start: 1317, end: 1320 },
							},
							directives: [],
							loc: { start: 1313, end: 1320 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1323, end: 1330 },
						},
						loc: { start: 1323, end: 1330 },
					},
					directives: [],
					loc: { start: 1305, end: 1330 },
				},
			],
			loc: { start: 1259, end: 1332 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Product",
				loc: { start: 1339, end: 1346 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 1351, end: 1353 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1355, end: 1357 },
							},
							loc: { start: 1355, end: 1357 },
						},
						loc: { start: 1355, end: 1358 },
					},
					directives: [],
					loc: { start: 1351, end: 1358 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1361, end: 1365 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1367, end: 1373 },
							},
							loc: { start: 1367, end: 1373 },
						},
						loc: { start: 1367, end: 1374 },
					},
					directives: [],
					loc: { start: 1361, end: 1374 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1377, end: 1382 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1384, end: 1387 },
							},
							loc: { start: 1384, end: 1387 },
						},
						loc: { start: 1384, end: 1388 },
					},
					directives: [],
					loc: { start: 1377, end: 1388 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1391, end: 1402 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1404, end: 1410 },
							},
							loc: { start: 1404, end: 1410 },
						},
						loc: { start: 1404, end: 1411 },
					},
					directives: [],
					loc: { start: 1391, end: 1411 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "image",
						loc: { start: 1414, end: 1419 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1421, end: 1427 },
							},
							loc: { start: 1421, end: 1427 },
						},
						loc: { start: 1421, end: 1428 },
					},
					directives: [],
					loc: { start: 1414, end: 1428 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 1431, end: 1438 },
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
										loc: { start: 1441, end: 1447 },
									},
									loc: { start: 1441, end: 1447 },
								},
								loc: { start: 1441, end: 1448 },
							},
							loc: { start: 1440, end: 1449 },
						},
						loc: { start: 1440, end: 1450 },
					},
					directives: [],
					loc: { start: 1431, end: 1450 },
				},
			],
			loc: { start: 1334, end: 1452 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Review",
				loc: { start: 1458, end: 1464 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "id",
						loc: { start: 1469, end: 1471 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1473, end: 1475 },
							},
							loc: { start: 1473, end: 1475 },
						},
						loc: { start: 1473, end: 1476 },
					},
					directives: [],
					loc: { start: 1469, end: 1476 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1479, end: 1484 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1486, end: 1492 },
							},
							loc: { start: 1486, end: 1492 },
						},
						loc: { start: 1486, end: 1493 },
					},
					directives: [],
					loc: { start: 1479, end: 1493 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1496, end: 1507 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1509, end: 1515 },
							},
							loc: { start: 1509, end: 1515 },
						},
						loc: { start: 1509, end: 1516 },
					},
					directives: [],
					loc: { start: 1496, end: 1516 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 1519, end: 1525 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1527, end: 1530 },
							},
							loc: { start: 1527, end: 1530 },
						},
						loc: { start: 1527, end: 1531 },
					},
					directives: [],
					loc: { start: 1519, end: 1531 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1534, end: 1543 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1545, end: 1553 },
							},
							loc: { start: 1545, end: 1553 },
						},
						loc: { start: 1545, end: 1554 },
					},
					directives: [],
					loc: { start: 1534, end: 1554 },
				},
			],
			loc: { start: 1453, end: 1556 },
		},
	],
	loc: { start: 0, end: 1557 },
} as unknown as DocumentNode;
