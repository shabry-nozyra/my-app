import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import TpsValidation from "../../validations/TpsValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      id: state.tpss.getTpsDetail.id,
      no_tps: state.tpss.getTpsDetail.no_tps,
      lokasi: state.tpss.getTpsDetail.lokasi,
      kecamatan: state.tpss.getTpsDetail.kecamatan,
      nagari: state.tpss.getTpsDetail.nagari,
      jorong: state.tpss.getTpsDetail.jorong,
      jpl: state.tpss.getTpsDetail.jpl,
      is_active: state.tpss.getTpsDetail.is_active
    }
  };
};

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
          <FormGroup className="d-none">
              <Field
                 parse={value => Number(value)}
                type="number"
                name="id"
                component={renderField}
              />
            </FormGroup>
            <FormGroup>
              <Field
                 parse={value => Number(value)}
                type="number"
                name="no_tps"
                component={renderField}
                label="No TPS :"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="lokasi"
                type="textarea"
                component={renderField}
                label="Lokasi :" />
            </FormGroup>
            <FormGroup>
              <label className="col-form-label">Kecamatan : </label>
              <Field
                name="kecamatan"
                component="select"
                label="Kecamatan :"
                className="form-control">
                <option>- Pilih Kecamatan - </option>
                <option value="sangir">Sangir</option>
                <option value="sangir jujuan">Sagir Jujuan</option>
                <option value="pauh duo">Pauh Duo</option>
              </Field>
            </FormGroup>
            <FormGroup>
              <label className="col-form-label">Nagari : </label>
              <Field
                name="nagari"
                component="select"
                label="Nagari :"
                className="form-control">
                <option>- Pilih nagari - </option>
                <option value="cingkariang">Cingkariang</option>
                <option value="padang luar">Padang Luar</option>
                <option value="jambu air">Jambu Air</option>
              </Field>
            </FormGroup>
            <FormGroup>
              <label className="col-form-label">Jorong: </label>
              <Field
                name="jorong"
                component="select"
                label="Jorong :"
                className="form-control">
                <option>- Pilih jorong - </option>
                <option value="sungai landai">sungai landai</option>
                <option value="batu palano">batu palano</option>
                <option value="bangkaweh">bangkaweh</option>
              </Field>
            </FormGroup>
            <FormGroup>
              <Field
                parse={value => Number(value)}
                type="number"
                name="jpl"
                component={renderField}
                label="Jumlah Pemilih Tetap :"
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button color="dark" type="submit" disabled={this.props.submitting}>
                Submit
                  </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>

    )
  }
}

FormComponent = reduxForm({
  form: "formCreateTps",
  validate: TpsValidation,
  enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);