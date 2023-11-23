"use client";

import { useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import FormattedPrice from "./FormattedPrice";
import { useEffect, useState } from "react";

const PaymentForm = () => {
	const { productData, userInfo } = useSelector(
		(state: StateProps) => state?.shopping
	);

	const [totalAmt, setTotalAmt] = useState(0);

	useEffect(() => {
		let amt = 0;
		productData.map((item: Products) => {
			amt += item?.price * item?.quantity;
			return;
		});

		setTotalAmt(amt);
	}, [productData]);

	return (
		<div className="w-full bg-white p-4">
			<h2>Cart Totals</h2>
			<div className="border-b-[1px] border-b-slate-200 py-2">
				<div className="max-w-lg flex items-center justify-between">
					<p className="uppercase font-medium">Subtotal</p>
					<p>
						<FormattedPrice amount={totalAmt} />
					</p>
				</div>
			</div>
			<div className="border-b-[1px] border-b-slate-200 py-2">
				<div className="max-w-lg flex items-center justify-between">
					<p className="uppercase font-medium">Shipping</p>
					<p>
						<FormattedPrice amount={20} />
					</p>
				</div>
			</div>
			<div className="border-b-[1px] border-b-slate-200 py-2">
				<div className="max-w-lg flex items-center justify-between">
					<p className="uppercase font-medium">Total Price</p>
					<p>
						<FormattedPrice amount={totalAmt + 20} />
					</p>
				</div>
			</div>
			{userInfo ? (
				<button className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-pointer duration-200">
					Proceed to checkout
				</button>
			) : (
				<div>
					<button className="bg-black text-slate-100 mt-4 py-3 px-6 cursor-not-allowed hover:bg-orange-950">
						Proceed to checkout
					</button>
					<p className="text-base mt-1 text-red-500 font-semibold">
						Please login to continue
					</p>
				</div>
			)}
		</div>
	);
};

export default PaymentForm;
