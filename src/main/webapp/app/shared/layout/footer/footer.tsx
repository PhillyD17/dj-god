import './footer.css';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
        <p>
          <h6>DJ, CuseHacks 2019</h6>
        </p>
      </Col>
    </Row>
  </div>
);

export default Footer;
