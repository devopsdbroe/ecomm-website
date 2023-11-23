import Container from "@/components/Container";
import Link from "next/link";

const SuccessPage = () => {
	return (
		<Container className="flex items-center justify-center py-20">
			<div className="min-h-[400p] flex flex-col items-center justify-center gap-y-5">
				<h2 className="text-4xl font-bold">
					Your payment has been accepted by Shopping Mart!
				</h2>
				<p>You can now view your Orders or continue shopping with us</p>
				<div className="flex items-center gap-x-5">
					<Link href={"/order"}>
						<button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-orange-600 duration-300">
							View Orders
						</button>
					</Link>
					<Link href={"/"}>
						<button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-orange-600 duration-300">
							Continue Shopping
						</button>
					</Link>
				</div>
			</div>
		</Container>
	);
};

export default SuccessPage;
