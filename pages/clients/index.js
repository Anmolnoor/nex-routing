import React from "react";
import Link from "next/link";

const ClientPage = () => {
	const clients = [
		{ id: "anmol", name: "Anmol noor" },
		{ id: "noor", name: "Noor Anmol" }
	];
	return (
		<div>
			<h1>ClientPage</h1>
			<ul>
				{clients.map((el, i) => {
					return (
						<li>
							{/* <Link href={`/cients/${el.id}`}>{el.name}</Link> */}
							<Link
								href={{
									pathname: "/clients/[id]",
									query: { id: el.id }
								}}>
								{el.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ClientPage;
