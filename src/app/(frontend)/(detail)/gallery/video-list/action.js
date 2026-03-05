"use server";

import { cacheLife, cacheTag, updateTag } from "next/cache";
import dbConnect from "@/lib/helpers/dbConnect";
import { getErrorMessage } from "@/lib/helpers/getErrorMessage";
import { videoModel } from "@/lib/models/videoModel";

//===========================================================

export const createAction = async (formData) => {
	const youtubeLink = formData.get("youtube");


	try {

		await dbConnect();

		await videoModel.create({
			youtubeLink,

		});
		return {
			success: true,
			message: `Added ${youtubeLink} successfully`,
		};
	} catch (error) {
		console.log(error);
		return { message: await getErrorMessage(error) };
	} finally {
		updateTag("video-list");
		// revalidatePath("/admin/governing-body", { expire: 0 });
	}
};
//=======================================================
export const getAllAction = async (page, perPage) => {
	"use cache";
	cacheLife("days");
	cacheTag("video-list");
	let skip = (page - 1) * perPage;
	try {
		await dbConnect();

		const total = await videoModel.find({}).countDocuments();
		const list = await videoModel.find({})
			.skip(skip)
			.limit(perPage)
			.sort({ createdAt: -1 });
		return {
			success: true,
			list: JSON.stringify(list),
			total,
		};
	} catch (error) {
		console.log(error);
		return { message: await getErrorMessage(error) };
	}
};
//===========================================================

//==============================
export const deleteAction = async (ids = []) => {
	try {
		if (!ids.length) {
			return {
				success: false,
				message: `No image has been selected`,
			};
		}
		await dbConnect();
		for (let id of ids) {
			await videoModel.findByIdAndDelete(id);

		}
		return {
			success: true,
			message: `${ids?.length} ${ids?.length > 1 ? "items have" : "item has"} been deleted successfully`,
		};
	} catch (error) {
		console.log(error);
		return { message: await getErrorMessage(error) };
	} finally {
		updateTag("video-list");
	}
};
