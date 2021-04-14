import React from 'react'

const TpsValidation = (values) => {
    const errors = {};
  
    if (!values.lokasi || values.lokasi === "") {
      errors.lokasi = "lokasi harus diisi";
    }
  
    if (!values.no_tps || values.no_tps === "") {
      errors.no_tps = "no_tps harus diisi";
    }
  
    if (!values.kecamatan || values.kecamatan === "") {
      errors.kecamatan = "kecamatan harus diisi";
    }
  
    if (!values.jorong || values.jorong === "") {
      errors.jorong = "jorong harus diisi";
    }
    if (!values.jpl || values.jpl === "") {
        errors.jpl = "jpl harus diisi";
      }
  
    return errors
  };
  
  export default TpsValidation;