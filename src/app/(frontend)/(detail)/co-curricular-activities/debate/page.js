import Image from "next/image";

export const metadata = {
	title: "Debate",
	description: "Debate page",
};

const History = async () => {
	return (
		<div>
			<h2 className=" uppercase">Debate</h2>
			<hr />
			<p className=" text-justify py-2">
				AFZAL-AYAN MODEL HIGH SCHOOL Debating Club started its journey in 2028
				with a view to creating a knowledge and ration base society. For this
				purpose, the club arranges workshops and interclass competition time to
				time. The club participated in different debate competitions organized
				by various institutions and TV channels. The club became runner up two
				times.
			</p>
			<div className="mb-3">
				<figure>
					<Image
						className="w-250"
						width={1500}
						height={1000}
						priority={true}
						src="/debate.jpg"
						alt="image"
					/>
					<figcaption></figcaption>
				</figure>
			</div>
		</div>
	);
};

export default History;
