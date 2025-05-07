import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
	const loggedIn = await getLoggedInUser();

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.name || "Guest"}
						subtext="Manage your accounts efficiently"
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.4}
					/>
				</header>
			</div>
			{/* RECENT TRANSACTIONS*/}
			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 543.68 }, { currentBalance: 670.0 }]}
			/>
		</section>
	);
};

export default Home;
