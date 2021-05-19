import React, { Component } from 'react'

function Currency(bilangan) {
    let number_string = bilangan,
    sisa 	= number_string.length % 3,
    rupiah 	= number_string.substr(0, sisa),
    ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
      }
      return rupiah
}
 class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { details: [] };
    }
    
    componentDidMount() {
        var kecamatan = this.props.kecamatan;
        fetch('https://pantaumicro.azurewebsites.net/detailkec/'+kecamatan)
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
                    details: result
                });
            });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        Jumlah Nagari
                    </div>
                    <div className="col-4">{this.state.details.total_nagari}</div>
                </div>
                <div className="row">
                    <div className="col-8">
                        Jumlah TPS
                    </div>
                    <div className="col-4">{this.state.details.total_tps}</div>
                </div>
                <div className="row">
                    <div className="col-8">
                        Jumlah Pemilih Tetap
                    </div>
                    <div className="col-4">{Currency(String(this.state.details.total_jpl))}</div>
                </div>
            </div>
        )
    }
}

export default CardComponent
