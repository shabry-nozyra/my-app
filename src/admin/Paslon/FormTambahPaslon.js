import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";

import PaslonValidation from "../../validations/PaslonValidation";

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
      id: state.paslons.getPaslonDetail.id,
      bupati: state.paslons.getPaslonDetail.bupati,
      wakil: state.paslons.getPaslonDetail.wakil,
      no_urut: state.paslons.getPaslonDetail.no_urut,
      foto: state.paslons.getPaslonDetail.foto
    }
  };
};

class FormTambahPaslon extends Component {
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
                type="text"
                name="bupati"
                component={renderField}
                label="Bupati :"
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="wakil"
                type="text"
                component={renderField}
                label="Wakil :" />
            </FormGroup>
            <FormGroup>
              <Field
                parse={value => Number(value)}
                name="no_urut"
                type="number"
                component={renderField}
                label="No urut :" />
            </FormGroup>
            <FormGroup>
              <Field
                name="foto"
                type="text"
                component={renderField}
                label="Foto :" />
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

FormTambahPaslon = reduxForm({
  form: "FormTambahPaslon",
  validate: PaslonValidation,
  enableReinitialize: true,
})(FormTambahPaslon);
export default connect(mapStateToProps, null)(FormTambahPaslon);