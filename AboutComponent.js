import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutComponent() {
  return (
    <div className="about-container-bg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src="assets/image-about.png" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="about-details">
            <div>
              <h2>Best Offer In Town</h2>
              <b>YOU WILL HAVE THE BEST EXPERIEBNCE</b>
              <br />
              <br />
              <p>
                WE are here to give you a good quality food . give us a chance and add us in your fav list.We are Sure about Our Taste.
              </p>
              <button className="btn btn-custom">Explore More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;