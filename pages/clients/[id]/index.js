import { useRouter } from "next/router";
import React from "react";

const ClientPageWithID = () => {
	const router = useRouter();

	const loadProjectHandler = () => {
		// load data
		router.push("/clients/anmol/prjectA");
	};

	return (
		<div>
			<h1>Client wit an Id</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
		</div>
	);
};

export default ClientPageWithID;
