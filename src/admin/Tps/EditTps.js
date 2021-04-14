import React from 'react';
import FormComponent from '../../components/TPS/FormComponent';
import { connect } from "react-redux";
import { getTpsDetail,  putTpsUpdate} from '../../Actions/UserActions';
import swal from "sweetalert";
import BackComponent from '../../components/BackComponent';

const mapStateToProps = (state) => {
    return {
        getResponDataTps: state.tpss.getResponDataTps,
        errorResponDataTps: state.tpss.errorResponDataTps
    };
};

class EditTps extends React.Component {
    componentDidMount() {
        this.props.dispatch(getTpsDetail(this.props.match.params.id));
    }
    handleSubmit(data) {
        this.props.dispatch(putTpsUpdate(data));
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
                "Data TPS Berhasil Diubah",
                "success"
                );
                window.location.href = "/adminpant4u/tps"
                
            }
            
          }
        return (
            <div className="p-2">
                <h2>Edit TPS</h2>
                <hr></hr>
                <BackComponent />
                <div className="row">
                    <div className="col-12">
                        <FormComponent onSubmit={(data) => this.handleSubmit(data)}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default connect(mapStateToProps, null)(EditTps);




