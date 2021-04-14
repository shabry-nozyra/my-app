import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to="/adminpant4u/tps">
          <Button color="dark"  className="mb-2 ml-3 btn-sm">
            <FontAwesomeIcon icon={faArrowLeft} /> Kembali
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponent;