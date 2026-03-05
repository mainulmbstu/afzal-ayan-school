import { revalidatePath, updateTag } from "next/cache";

export const wait = async (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
export const refreshAll = async () => {
	"use server";
	revalidatePath("/", "layout");
	updateTag('news')
	console.log('Refresh all at ', new Date().toTimeString());
	return new Date().toTimeString()
};
