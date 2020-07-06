import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import NewBoatCard from "../components/NewBoatCard";
import { BoatService } from "../services/boatService";

export const Dashboard = () => {
  const [boats, setBoats] = useState([] as any);

  useEffect(() => {
    (async () => {
      setBoats(await BoatService.getBoats());
    })();
  }, []);

  return (
    <Container>
      <Row>
        {boats &&
          boats.length &&
          boats.map((item: any) => (
            <Col key={item.id} md={3}>
              <NewBoatCard {...item} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};
