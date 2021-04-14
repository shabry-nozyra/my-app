import React from 'react';
import { connect } from "react-redux";
import { getPaslonDetail, putPaslonUpdate } from '../../Actions/PaslonActions';
import swal from "sweetalert";
import FormTambahPaslon from './FormTambahPaslon';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const mapStateToProps = (state) => {
    return {
        getResponDataPaslon: state.paslons.getResponDataPaslon,
        errorResponDataPaslon: state.paslons.errorResponDataPaslon
    };
};

class EditPaslon extends React.Component {
    componentDidMount() {
        this.props.dispatch(getPaslonDetail(this.props.match.params.id));
    }
    handleSubmit(data) {
        this.props.dispatch(putPaslonUpdate(data));
    }
    render() {
        if (this.props.getResponDataPaslon || this.props.errorResponDataPaslon) {
            if (this.props.errorResponDataPaslon) {
                swal(
                    "Failed!",
                    this.props.errorResponDataPaslon,
                    "error"
                );
            } else {
                swal(
                    "Success",
                    "Data TPS Berhasil Diubah",
                    "success"
                );
                window.location.href = "/adminpant4u/paslon"

            }

        }
        return (
            <div className="p-2">
                <h2>Edit Pasangan Calon Bupati</h2>
                <hr></hr>
                <Link to="/adminpant4u/paslon">
                    <Button color="dark" className="mb-2 ml-3 btn-sm">
                        <FontAwesomeIcon icon={faArrowLeft} /> Kembali
                    </Button>
                </Link>
                <div className="row">
                    <div className="col-12">
                        <FormTambahPaslon onSubmit={(data) => this.handleSubmit(data)} />
                    </div>
                </div>
            </div>

        )
    }
}

export default connect(mapStateToProps, null)(EditPaslon);




