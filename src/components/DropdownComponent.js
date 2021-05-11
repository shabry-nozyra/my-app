import React from 'react';

class DropdownComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries : [],
			states : [],
			cities : [],
			selectedCountry : '--Choose Country--',
			selectedState : '--Choose State--'
		};
		this.changeCountry = this.changeCountry.bind(this);
		this.changeState = this.changeState.bind(this);
	}
  
	componentDidMount() {
		this.setState({
			countries : [
				{ name: 'Sangir', states: [ {name: 'A', cities: ['1', '2', '3']} ] },
				{ name: 'Sangir Jujuan', states: [ {name: 'B', cities: ['4','5']} ] },
				{ name: 'Pauh Duo', states: [ {name: 'C', cities: ['6','7']} ] },
				{ name: 'Koto Parik Gadang Diateh', states: [ {name: 'D', cities: ['8','9']} ] },
			]
		});
	}
  
	changeCountry(event) {
		this.setState({selectedCountry: event.target.value});
		this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
	}

	changeState(event) {
		this.setState({selectedState: event.target.value});
		const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
		this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
	}
	
	render() {
        console.log(this.state.countries)
		return (
			<div id="container mt-5 " className="col-6">

				<div className="my-3">
					<label>Kecamatan :</label> <br />
					<select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry} className="form-control">
						<option>--Pilih Kecamatan--</option>
						{this.state.countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

				<div className="my-3">
					<label>Nagari :</label><br />
					<select placeholder="State" value={this.state.selectedState} onChange={this.changeState} className="form-control">
						<option>--Pilih Nagari--</option>
						{this.state.states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
				
				<div className="my-3">
					<label>Jorong :</label><br />
					<select placeholder="City" className="form-control">
						<option>--Pilih Jorong--</option>
						{this.state.cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>
			</div>
		)
	}
}

export default DropdownComponent;