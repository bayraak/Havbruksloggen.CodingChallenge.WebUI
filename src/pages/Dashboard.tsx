import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import NewBoatCard from "../components/NewBoatCard";
import { BoatService } from "../services/boatService";
import EmptyBoardCard from "../components/EmptyBoardCard";
import CreateBoardModal from "../components/CreateBoardModal";

export const Dashboard = () => {
  const [boats, setBoats] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        setBoats(await BoatService.getBoats());
      } catch (err) {
        setBoats([]);
      }

      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      {!loading && (
        <>
          <Row className="mt-5">
            <h1>Available Boats</h1>
          </Row>
          <Row>
            <Col md={4} onClick={() => setModalShow(true)}>
              <EmptyBoardCard />
            </Col>
            {boats &&
              boats.length &&
              boats.map((item: any) => (
                <Col key={item.id} md={4}>
                  <NewBoatCard {...item} />
                </Col>
              ))}
          </Row>
        </>
      )}
      <CreateBoardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};
