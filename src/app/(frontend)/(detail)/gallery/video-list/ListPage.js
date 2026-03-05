"use client";
import { useAuth } from "@/lib/components/context";
import DeleteModal from "@/lib/components/DeleteModal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { deleteAction } from "./action";
import Pagination from "@/lib/components/pagination";
import { YouTubeEmbed } from "@next/third-parties/google";

const ListPage = ({ value }) => {
	let { entries, data, page, perPage } = value;
	let [images, setImages] = useState([]);
	let [selected, setSelected] = useState([]);
	let { userInfo } = useAuth();

	useEffect(() => {
		setImages(entries);
	}, [entries]);
	let selectHandle = (e) => {
		let { name, checked } = e.target;

		let tempArr = images?.map((item) =>
			item?._id === name ? { ...item, isChecked: checked } : item,
		);
		setImages(tempArr);
		let selectIdArr =
			tempArr?.length &&
			tempArr?.filter((item) => item?.isChecked).map((item) => item?._id);
		setSelected(selectIdArr);
	};

	return (
		<div>
			<h5 className=""> Total: {data?.total} </h5>
			<div className=" bg-blue-400 inline-block mb-3">
				<DeleteModal
					value={{
						name: "Delete selected videos",
						id: selected,
						message: `Do you want to delete ${selected?.length} ${selected?.length > 1 ? "items" : "item"} `,
						action: deleteAction,
					}}
				/>
			</div>
			<div className=" grid md:grid-cols-1 lg:grid-cols-1 gap-4 ">
				{images?.length ? (
					images?.map((item) => (
						<div
							key={item?._id}
							className="border w-content  flex items-center relative"
						>
							<div>
								{/* Use the YouTubeEmbed component and pass the video ID */}
								<YouTubeEmbed videoid={item?.youtubeLink}

									height={300}
									width={500} />
							</div>
							<div
								className={
									userInfo?.role !== "admin"
										? " hidden"
										: " absolute top-0 right-0"
								}
							>
								<input
									onChange={selectHandle}
									className=" size-5"
									type="checkbox"
									name={item?._id}
									id={item?._id}
									checked={item?.isChecked || false}
								/>
							</div>
						</div>
					))
				) : (
					<div>No data found</div>
				)}
			</div>
			<div className=" mt-3 ">
				<Pagination
					total={data?.total || 1}
					page={page}
					perPage={perPage}
					spms1="keyword"
					spms1Value=""
				/>{" "}
			</div>
		</div>
	);
};

export default ListPage;
