import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CrewMemberRequest } from "../services/interfaces/CrewMemberRequest";
import { BoatRequest } from "../services/interfaces/BoatRequest";
import { BoatService } from "../services/boatService";

export interface CreateBoardModalProps {}

const CreateBoardModal = (props: any) => {
  const onSubmit = async () => {
    const body: BoatRequest = {
      name: boatName,
      producer,
      loA,
      B,  
      crewMembers: [],
    };

    const result = await BoatService.createBoat(body);

    console.log("res", result);

    props.onHide();
  };

  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState(new Date());

  const [producer, setProducer] = useState("");
  const [boatName, setBoatName] = useState("");
  const [loA, setLoA] = useState(0);
  const [B, setB] = useState(0);

  const onProducerChange = (e: any) => {
    setProducer(e.currentTarget.value);
  };

  const onBoatNameChange = (e: any) => {
    setBoatName(e.currentTarget.value);
  };

  const onLoAChange = (e: any) => {
    setLoA(e.currentTarget.value);
  };

  const onBChange = (e: any) => {
    setB(e.currentTarget.value);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form>
        {step === 1 && (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add a Boat
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="producer">
                  <Form.Label>Producer</Form.Label>
                  <Form.Control
                    value={producer}
                    onChange={onProducerChange}
                    type="text"
                    placeholder="Enter producer name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={boatName}
                    onChange={onBoatNameChange}
                    placeholder="Enter Boat name"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="loA">
                  <Form.Label>LoA</Form.Label>
                  <Form.Control
                    onChange={onLoAChange}
                    type="number"
                    placeholder="Enter LoA"
                    step="0.01"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="b">
                  <Form.Label>B</Form.Label>
                  <Form.Control
                    onChange={onBChange}
                    type="number"
                    placeholder="Enter B"
                    step="0.01"
                  />
                </Form.Group>
              </Form.Row>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onSubmit} variant="primary" type="button">
                Submit
              </Button>
            </Modal.Footer>
          </>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add a Crew Member
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridNameCrew">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Crew member name"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridLoA">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Crew member age"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridB">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="e-mail"
                    placeholder="Enter crew member e-mail"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Crew Member Role</Form.Label>
                  <Form.Control as="select">
                    <option>Captain</option>
                    <option>DeckCadet</option>
                    <option>ChiefEngineer</option>
                    <option>Motorman</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridBuildNumber">
                  <Form.Label>Certified Until</Form.Label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                  />
                </Form.Group>
              </Form.Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => setStep(1)}
                variant="secondary"
                type="button"
              >
                Back
              </Button>
              <Button onSubmit={onSubmit} variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </>
        )}
      </Form>
    </Modal>
  );
};

export default CreateBoardModal;
