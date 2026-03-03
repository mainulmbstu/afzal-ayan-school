import Profile from "@/lib/components/Profile";

export const metadata = {
	title: "User Dashboard",
	description: "User Dashboard page",
};
const UserDashboard = () => {
	return (
		<div className=" h-[93vh]">
			<Profile />
		</div>
	);
};

export default UserDashboard;
