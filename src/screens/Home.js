import React, { useState } from "react";
import List from "../components/Home/List";
import Header from "../components/Home/Header";
import "../style/Form.css";
import Form from "../components/Home/Form";

export default function Home() {

	///console.log(q2);
	return (
		<div class='container-fluid'>
			<Header />
			<Form />
			<List/>
		</div>
	);
}
