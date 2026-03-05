import { Suspense } from "react";
import ContactPage from "./ContactPage";
import MessagePage from "./MessagePage";
import { YouTubeEmbed } from '@next/third-parties/google';

export const metadata = {
	title: "Contact",
	description: "Contact page",
};

const Contacts = async ({ searchParams }) => {
	return (
		<div className="">
			<h2 className=" uppercase">Contact us</h2>
			<hr />

			<Suspense fallback="sending">
				<ContactPage />
			</Suspense>

			<Suspense fallback=<h3>Loading message</h3>>
				<MessagePage searchParams={searchParams} />
			</Suspense>
		</div>
	);
};

export default Contacts;
