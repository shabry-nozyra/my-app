import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Paslon extends React.Component {
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
            <div className="p-2">
                <h2>Daftar Pasangan Calon</h2>
                <hr></hr>
               <div className="text-right p-3">
               <a className="btn btn-primary" href="tambahpaslon">Tambahkan Pasangan Calon</a>
               </div>
                <div className="row">

                {
						this.state.paslons.map(function(item, key) {             
						return (
                            <div className="col-3" key={'i'+key}>
                                <Card key={key}>
                                    <Card.Img variant="top"
                                        src={
                                            "./assets/images/paslonbupati/" +
                                            item.foto
                                        }
                                    />
                                    <Card.Body className="text-center">
                                        <Card.Title className="NamaBupati">{item.bupati} - {item.wakil}</Card.Title>
                                        <Card.Text>
                                            {item.no_urut}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
							)
						})
					}
                </div>
            </div>
        )
    }
}
export default Paslon;
