import Container from "@/components/Container";
import ProductData from "@/components/ProductData";
import { getSingleProduct, getTrendingProducts } from "@/helpers";
import { Products } from "../../../type";
import SingleProduct from "@/components/SingleProduct";

type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
};

const ProductPage = async ({ searchParams }: Props) => {
	const _idString = searchParams?._id;
	const _id = Number(_idString);
	const product = getSingleProduct(_id);
	const data = await getTrendingProducts();

	return (
		<div>
			<Container>
				<SingleProduct product={product} />
				<div>
					<p className="text-xl py-1 font-semibold">Trending Products</p>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
						{data?.map((item: Products) => (
							<ProductData key={item._id} item={item} />
						))}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ProductPage;
