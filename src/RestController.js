import React from 'react';
 
class RestController extends React.Component {
 
	constructor(props) {
		super(props);
		this.state = {paslons: []};
		this.headers = [
			{ key: 'id', label: 'Id' },
			{ key: 'bupati', label: 'Bupati' },
			{ key: 'wakil', label: 'Wakil' },
			{ key: 'no_urut', label: 'No Urut' }
		];
	}
	componentDidMount() {
		fetch('http://localhost:8080/paslon/add')
			.then(response => {
				return response.json();
			}).then(result => {
				this.setState({
					paslons:result
				});
			});
	}
	render() {                            
		return (
			<table>
				<thead>
					<tr>
					{
						this.headers.map(function(h) {
							return (
								<th key = {h.key}>{h.label}</th>
							)
						})
					}
					</tr>
				</thead>
				<tbody>
					{
						this.state.paslons.map(function(item, key) {             
						return (
								<tr key = {key}>
								  <td>{item.id}</td>
								  <td>{item.bupati}</td>
								  <td>{item.wakil}</td>
								  <td>{item.no_urut}</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		)
	}
}
 
export default RestController;