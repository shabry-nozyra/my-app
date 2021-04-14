import React from 'react'

const PaslonValidation= (values) => {
    const errors = {};
  
    if (!values.bupati || values.bupati === "") {
      errors.bupati = "bupati harus diisi";
    }
  
    if (!values.wakil || values.wakil === "") {
      errors.wakil = "wakil harus diisi";
    }
  
    if (!values.foto || values.foto === "") {
      errors.foto = "foto harus diisi";
    }
  
    return errors
  };
  
  export default PaslonValidation;