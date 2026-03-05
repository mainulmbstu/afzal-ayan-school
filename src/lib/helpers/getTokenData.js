"use server";
import jwt from "jsonwebtoken";

export const getTokenData = async (token) => {
	try {
		if (!token) {
			return null;
		}
		var decoded = jwt.verify(token, process.env.JWT_KEY)
		return decoded?.userInfo;
	} catch (error) {
		console.log("getTokenData error", error.message);
		return null;
	}
};
