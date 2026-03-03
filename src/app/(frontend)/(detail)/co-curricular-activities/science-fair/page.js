import Image from "next/image";

export const metadata = {
	title: "Science Fair",
	description: "Science Fair page",
};

const History = async () => {
	return (
		<div>
			<h2 className=" uppercase">Science Fair</h2>
			<hr />

			<div className="mb-3">
				<figure>
					<Image
						className="w-250"
						width={1500}
						height={1000}
						priority={true}
						src="/sfair1.jpg"
						alt="image"
					/>
					<figcaption>Science fair</figcaption>
				</figure>
			</div>
			<div>
				<figure>
					<Image
						className="w-250"
						width={1500}
						height={1000}
						priority={true}
						src="/sfair2.jpg"
						alt="image"
					/>
					<figcaption>Science fair</figcaption>
				</figure>
			</div>
		</div>
	);
};

export default History;
