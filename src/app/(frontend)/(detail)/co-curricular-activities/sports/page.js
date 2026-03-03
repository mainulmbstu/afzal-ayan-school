import Image from "next/image";

export const metadata = {
	title: "Sports",
	description: "Sports page",
};

const History = async () => {
	return (
		<div>
			<h2 className=" uppercase">Sports</h2>
			<hr />

			<div className="mb-3">
				<p>
					Our achievements in the fields of Sports & Cultural Activities as well
					at National & International levels bear testimony to such floral
					activities inside the institution.
				</p>
				<figure>
					<Image
						className="w-250"
						width={1500}
						height={1000}
						priority={true}
						src="/sp1.jpg"
						alt="image"
					/>
				</figure>
			</div>
			<div>
				<figure>
					<Image
						className="w-250"
						width={1500}
						height={1000}
						priority={true}
						src="/sp2.jpg"
						alt="image"
					/>
				</figure>
			</div>
		</div>
	);
};

export default History;
