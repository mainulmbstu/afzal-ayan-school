"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaListOl } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const UserMenu = () => {
	const path = usePathname();
	const menus = [
		{
			name: "profile",
			href: "/dashboard/user",
			icon: <ImProfile />,
		},
	];

	return (
		<div className="card p-2 w-full text-xl">
			{/* <Link
				className={
					path === "/dashboard/user"
						? "bg-blue-300 p-3"
						: "hover:bg-zinc-300 p-3"
				}
				href={"/dashboard/user"}
			>
				Dashboard
			</Link> */}
			<ul className="menu rounded-box w-full">
				{menus.map((item, i) => (
					<li
						key={i}
						className={item.href === path ? "bg-blue-300 text-xl" : " text-xl"}
					>
						<Link href={item.href}>
							{item.icon}
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserMenu;
