import React from 'react'
import { connect } from "react-redux";
import swal from "sweetalert";
import { postPaslonCreate} from '../../Actions/PaslonActions';
import BackComponent from '../../components/BackComponent';
import FormTambahPaslon from './FormTambahPaslon';

const mapStateToProps = (state) => {
    return {
        getResponDataPaslon: state.paslons.getResponDataPaslon,
        errorResponDataPaslon: state.paslons.errorResponDataPaslon
    };
};

class TambahPaslon extends React.Component {
    handleSubmit(data) {
        this.props.dispatch(postPaslonCreate(data));
      }
    render() {
        if (this.props.getResponDataPaslon || this.props.errorResponDataPaslon) {
            if(this.props.errorResponDataPaslon)
            {
              swal(
                  "Failed!",
                  this.props.errorResponDataPaslon,
                  "error"
                );
            }else {
              swal( 
                "Success",
                 "Data Paslon Berhasil Ditambahkan",
                 "success"
                );
                window.location.href = "/adminpant4u/paslon";
            }
            
          }
        return (
            <div className="p-2">
                <h2>Tambah Paslon</h2>
                <hr></hr>
                <div className="row">
                    <BackComponent/>
                    <div className="col-12">
                         <FormTambahPaslon onSubmit={(data) => this.handleSubmit(data)} />
                    </div>
                </div>
            </div>

        )
    }
}
export default connect(mapStateToProps, null)(TambahPaslon);




