import { useRouter } from "next/router";
import React from "react";

const Clientid = () => {
	const router = useRouter();
	console.log(router.query);
	return (
		<div>
			<center>
				<h1>Client ID : {router.query.id}</h1>
				<h2>Client Project id : {router.query.clientid}</h2>
			</center>
		</div>
	);
};

export default Clientid;
