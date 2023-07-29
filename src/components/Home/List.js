import React, { useState, useCallback, useEffect } from "react";
import "../../style/Form.css";
import DataTable from 'datatables.net-dt';
import { GetCustomerApi, deleteCustomerApi } from "../../api/Customer";
import { map, size } from "lodash"
const myDtTable = new DataTable('#example');
deleteRow();

export default function List(props) {

	const [customers, setCustomers] = useState(null);
	useEffect(() => {
		(async () => {
			const response = await GetCustomerApi();
			setCustomers(response);
		})()
	}, []);

    //deleteRow();
	async function preguntar(customer){
 		if(window.confirm('¿Esta seguro que desea eliminar '+customer.name+'?')) {
			const reponse = await deleteCustomerApi(customer.id);
			if(reponse.deleted)
				myDtTable.row('.selected').remove().draw(false);
			
		}
	}

	return (
		<div class='container-fluid' style={{ "margin-top": 10, "margin-bottom": 80 }}>
			<table id="example" class="table table-success table-hover table-striped display">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Edad</th>
						<th>Genero</th>
						<th>Domicilio</th>
						<th>Tipo de habitación</th>
						<th>Ingreso mensual</th>
						<th>Viajes</th>
						<th>acciones</th>
					</tr>
				</thead>
				<tbody>
					{map(customers, (customer) => (
						<tr>
							<td>{customer.name}</td>
							<td>{customer.age}</td>
							<td>{customer.gender}</td>
							<td>{customer.address}</td>
							<td>{customer.Room.description}</td>
							<td>${customer.Income.incomeMin}-${customer.Income.incomeMin}</td>
							<td>{customer.Travel.timesMin}-{customer.Travel.timesMin}</td>
							<td><button class="btn btn-danger btn-sm" onClick={() => preguntar(customer)}>Eliminar</button></td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<th>Nombre</th>
						<th>Edad</th>
						<th>Genero</th>
						<th>Domicilio</th>
						<th>Tipo de habitación</th>
						<th>Ingreso mensual</th>
						<th>Viajes</th>
						<th>acciones</th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
function deleteRow() {
	myDtTable.on('click', 'tbody tr', (e) => {
		let classList = e.currentTarget.classList;
		
		if (classList.contains('selected')) {
			classList.remove('selected');
		}
		else {
			myDtTable.rows('.selected').nodes().each((row) => row.classList.remove('selected'));
			classList.add('selected');
		}
	});
}