import mongoose from "mongoose";

const Schema = new mongoose.Schema(
	{
		youtubeLink: { type: String, required: true, trim: true },
	},
	{ timestamps: true },
);

export const videoModel =
	mongoose.models?.videos || mongoose.model("videos", Schema);
