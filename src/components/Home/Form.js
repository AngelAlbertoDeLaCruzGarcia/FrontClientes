import React from "react";
import "../../style/Form.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AddCustomerApi } from "../../api/Customer";

export default function Form(props) {

	const formik = useFormik({
		initialValues: valInicial(),
		validationSchema: Yup.object(validationSchema()),
		onSubmit: async (formData) => {
			try {
				let interests = [] ;
				let places = [];
				let books = [];

				if (formData.intereses1!=null) {
					interests.push({ "personal_interest_id": 1 });
				}else if (formData.intereses2 != null) {
					interests.push({ "personal_interest_id": 2 });
				}else if (formData.intereses3 != null) {
					interests.push({ "personal_interest_id": 3 });
				}else if (formData.intereses4 != null) {
					interests.push({ "personal_interest_id": 4 });
				}

				if (formData.viaje1 != null) {
					places.push({ "place_id": 1 });
				}else if (formData.viaje2 != null) {
					places.push({ "place_id": 2 });
				}else if (formData.viaje3 != null) {
					places.push({"place_id": 3 });
				}else if (formData.viaje4 != null) {
					places.push( { "place_id": 4 });
				}

				if (formData.libro1 != null) {
					books.push({ "book_id": 1 });
				}else if (formData.libro2 != null) {
					books.push({ "book_id": 2 });
				}else if (formData.libro3 != null) {
					books.push({ "book_id": 3 });
				}else if (formData.libro4 != null) {
					books.push({ "book_id": 4 });
				}else if (formData.libro5 != null) {
					books.push({ "book_id": 5 });
				}
				formData.interests = interests;
				formData.places = places;
				formData.books = books;
				formData.room_id = parseInt(formData.room_id)
				formData.income_id = parseInt(formData.income_id)
				formData.travel_id = parseInt(formData.travel_id)
				
				delete formData.intereses1;
				delete formData.intereses2;
				delete formData.intereses3;
				delete formData.intereses4;
				delete formData.viaje1;
				delete formData.viaje2;
				delete formData.viaje3;
				delete formData.viaje4;
				delete formData.libro1;
				delete formData.libro2;
				delete formData.libro3;
				delete formData.libro4;
				delete formData.libro5;
				
				console.log(formData);
				const response = await AddCustomerApi(formData);
				console.log(response);
				if(response.success)
				window.location.reload();
			} catch (error) {
				console.log(error);
			}
		},
	});
	return (
		<div
			class="col-md-10 offset-md-10"
			style={{ marginTop: 10 }}>

			<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#register">
				Nuevo
			</button>

			<form onSubmit={formik.handleSubmit}>
				<div class="modal modal-dialog-scrollable" id="register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								<div class="form-floating mb-3">
									<input type="text" class="form-control" id="floatingInput" name="name" placeholder="Nombre"
										onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}
										className={
											formik.errors.name
												? "form-control is-invalid"
												: "form-control"
										} />
									<label for="floatingInput">Nombre</label>
								</div>

								<div class="row g-2 mb-3">
									<div class="col-md">
										<div class="form-floating">
											<input type="number" class="form-control" id="edad" name="age" placeholder="edad"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.age}
												className={
													formik.errors.age
														? "form-control is-invalid"
														: "form-control"
												} />
											<label for="edad">Edad</label>
										</div>
									</div>
									<div class="col-md">
										<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg" name="gender"
											onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gender}>
											<option selected>Genero</option>
											<option value="Masculino">Masculino</option>
											<option value="Femenino">Femenino</option>
											<option value="Otro">Otro</option>
										</select>
									</div>
								</div>
								<div class="form-floating mb-3">
									<input type="text" class="form-control" id="domicilio" name="address" placeholder="Domicilio"
										onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}
										className={
											formik.errors.address
												? "form-control is-invalid"
												: "form-control"
										} />
									<label for="domicilio">Domicilio</label>
								</div>
								<div class="row g-3">
									<div class="col-md mb-3">
										<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg" name="room_id"
											onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.room_id}>
											<option selected>Vivienda</option>
											<option value="1">Casa propia</option>
											<option value="2">Departamento</option>
											<option value="3">Renta</option>
										</select>
									</div>
									<div class="col-md">
										<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg" name="income_id"
											onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.income_id}>
											<option selected>Ingresos</option>
											<option value="1">2500,5000</option>
											<option value="2">5001,7000</option>
											<option value="3">7001,10000</option>
										</select>
									</div>
									<div class="col-md">
										<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg" name="travel_id"
											onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.travel_id}>
											<option selected>Viajes</option>
											<option value="1">1-3</option>
											<option value="2">4-6</option>
											<option value="3">7-10</option>
										</select>
									</div>
								</div>
								<label>Intereres personales:</label>
								<div class="row g-4 mb-3">
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="intereses1" id="intereses1"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.intereses1} />
											<label class="form-check-label" for="intereses1">
												Música
											</label>
										</div>
									</div>
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="intereses2" id="intereses2"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.intereses2} />
											<label class="form-check-label" for="intereses2">
												Cine
											</label>
										</div>
									</div>
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="intereses3" id="intereses3"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.intereses3} />
											<label class="form-check-label" for="intereses3">
												Modelado
											</label>
										</div>
									</div>
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="intereses4" id="intereses4"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.intereses4} />
											<label class="form-check-label" for="intereses4">
												Compras
											</label>
										</div>
									</div>
								</div>
								<label>Destinos de prefeencia:</label>
								<div class="row g-4 mb-3">
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="viaje1" id="viaje1"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.viaje1} />
											<label class="form-check-label" for="viaje1">
												Desierto
											</label>
										</div>
									</div>
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="viaje2" id="viaje2"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.viaje2} />
											<label class="form-check-label" for="viaje2">
												Playa
											</label>
										</div>
									</div>
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="viaje3" id="viaje3"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.viaje3} />
											<label class="form-check-label" for="viaje3">
												Ciudad
											</label>
										</div>
									</div>
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="viaje4" id="viaje4"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.viaje4} />
											<label class="form-check-label" for="viaje4">
												Montaña
											</label>
										</div>
									</div>
								</div>
								<label>Tipos de libros:</label>
								<div class="row g-4 mb-3">
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="libro1" id="libro1"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.libro1} />
											<label class="form-check-label" for="libro1">
												Romance
											</label>
										</div>
									</div>
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="libro2" id="libro2"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.libro2} />
											<label class="form-check-label" for="libro2">
												Novela
											</label>
										</div>
									</div>
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="libro3" id="libro3"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.libro3} />
											<label class="form-check-label" for="libro3">
												Fantasía
											</label>
										</div>
									</div>
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="libro4" id="libro4"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.libro4} />
											<label class="form-check-label" for="libro4">
												Política
											</label>
										</div>
									</div>
									<div class="form-check col-md">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="libro5" id="libro5"
												onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.libro5} />
											<label class="form-check-label" for="libro5">
												Científicos
											</label>
										</div>
									</div>
								</div>

							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<button type="submit" onClick={formik.handleSubmit} class="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
function valInicial() {
	return {
		name: "",
		age: 0,
		gender: "",
		address: "",
		room_id: 0,
		income_id: 0,
		travel_id: 0,
		intereses1: null,
		intereses2: null,
		intereses3: null,
		intereses4: null,
		viaje1: null,
		viaje2: null,
		viaje3: null,
		viaje4: null,
		libro1: null,
		libro2: null,
		libro3: null,
		libro4: null,
		libro5: null
	};
}
function validationSchema() {
	return {
		name: Yup.string().required(true),
		gender: Yup.string().required(true),
		address: Yup.string().required(true),
		age: Yup.number().integer().min(18, true).max(100, true).required(true),
	};
}
