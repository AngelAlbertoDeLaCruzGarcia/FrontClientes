import React from "react";
import usuario from "../../fmc.jpg";
import "../../style/Form.css";
import "../../style/MsgContent.css";

export default function Name() {
	return (
		<div class='d-flex justify-content-start mb-4'>
			<img src={usuario} class='rounded-circle user_img' alt='' />
			<div class='msg_cotainer'>
				<strong>¿Cual es tu nombre?</strong>
				<input
					class='form-control'
					type='text'
					value='Nombre'
					readonly
					style={{ marginTop: 20 }}
				/>
				<input
					class='form-control campos'
					type='text'
					value='Segundo nombre'
					readonly
				/>
				<input
					class='form-control campos'
					type='text'
					value='Apellido Materno'
					readonly
				/>
				<input
					class='form-control campos'
					type='text'
					value='Apellido Paterno'
					readonly
				/>
			</div>
		</div>
	);
}
