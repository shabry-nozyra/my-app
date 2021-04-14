import React from 'react'
import { connect } from "react-redux";
import swal from "sweetalert";
import FormComponent from "../../components/TPS/FormComponent";
import { postTpsCreate } from '../../Actions/UserActions';
import BackComponent from '../../components/BackComponent';

const mapStateToProps = (state) => {
    return {
        getResponDataTps: state.tpss.getResponDataTps,
        errorResponDataTps: state.tpss.errorResponDataTps
    };
};

class TambahTps extends React.Component {
    handleSubmit(data) {
        this.props.dispatch(postTpsCreate(data));
      }
    render() {
        if (this.props.getResponDataTps || this.props.errorResponDataTps) {
            if(this.props.errorResponDataTps)
            {
              swal(
                  "Failed!",
                  this.props.errorResponDataTps,
                  "error"
                );
            }else {
              swal( 
                "Success",
                 "Data TPS Berhasil Ditambahkan",
                 "success"
                );
                window.location.href = "/adminpant4u/tps";
            }
            
          }
        return (
            <div className="p-2">
                <h2>Tambah TPS</h2>
                <hr></hr>
                <div className="row">
                    <BackComponent/>
                    <div className="col-12">
                         <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
                    </div>
                </div>
            </div>

        )
    }
}
export default connect(mapStateToProps, null)(TambahTps);




