import { NextResponse } from "next/server";
import { productData } from "@/constants/data";

export const GET = async () => {
	try {
		return NextResponse.json({
			message: "Proudcts fetched successfully",
			success: true,
			productData,
		});
	} catch (error) {
		return NextResponse.json(
			{
				error: "Error loading products",
			},
			{ status: 500 }
		);
	}
};
