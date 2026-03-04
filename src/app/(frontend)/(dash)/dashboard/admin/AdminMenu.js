"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImProfile } from "react-icons/im";
import { MdAllInclusive } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";

const AdminMenu = () => {
	const path = usePathname();
	const menus = [
		{
			name: "profile",
			href: "/dashboard/admin/profile",
			icon: <ImProfile />,
		},
		{
			name: "User List",
			href: "/dashboard/admin/user-list",
			icon: <PiUserListFill />,
		},

		{
			name: "Contacts",
			href: "/dashboard/admin/contacts",
			icon: <MdAllInclusive />,
		},
	];

	return (
		<div className="card p-2 w-full text-xl">
			<Link
				className={
					path === "/dashboard/admin"
						? "bg-blue-300 p-3"
						: "hover:bg-zinc-300 p-3"
				}
				href={"/dashboard/admin"}
			>
				Dashboard
			</Link>
			<ul className="menu rounded-box w-full">
				{menus.map((item, i) => (
					<li
						key={i}
						className={
							item.href === path
								? "bg-blue-300 text-xl"
								: " text-xl hover:bg-blue-200"
						}
					>
						<Link href={item.href} className="z-20">
							{item.icon}
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AdminMenu;
