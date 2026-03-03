import AdminMenu from "./AdminMenu";

export const metadata = {
	title: {
		default: "Academic",
		template: "%s | AFZAL-AYAN MODEL HIGH SHOOL",
		// absolute:""
	},
	description: "A school website",
};
export default function AdminLayout({ children }) {
	return (
		<div className=" grid md:grid-cols-12 gap-2 px-2 border ">
			<div className="col-span-12 md:col-span-3 ">
				<AdminMenu />
			</div>
			<div className="col-span-12 md:col-span-9 md:px-3">{children}</div>
		</div>
	);
}
