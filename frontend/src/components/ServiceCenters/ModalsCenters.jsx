import React, { useState } from 'react';
import axios from 'axios';

import { Button, Modal, Form } from 'react-bootstrap';
import { FaBuilding, FaSave, FaTrash } from 'react-icons/fa';


const SERVICE_CENTERS_URL = "/api/v1/service-centres";

export function AddServiceCenter(props) {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleClose = (e) => {
        setShow(false);
        setValidated(false);
    }
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        let form = e.target.closest("form");
        let data = new FormData(form);

        setValidated(true);
        if (form.checkValidity() === false) {
            return;
        }

        axios.post(`${SERVICE_CENTERS_URL}`, data, {})
            .then(response => {
                console.log(response);
                setShow(false);
                setValidated(false);
                form.reset();
                props.refreshData();
            }).catch(error => console.log(error));
    }

    return (
        <>
            <Button className="float-right" variant="success" onClick={handleShow}><FaBuilding /> Dodaj servisni centar</Button>

            <Modal show={show} backdrop="static" onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Modal.Header closeButton>
                        <Modal.Title>Dodaj servis</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form.Group>
                            <Form.Label>Naziv</Form.Label>
                            <Form.Control name="name" required />
                            <Form.Control.Feedback type="invalid">Molimo upišite naziv servisa.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Ulica i kućni broj</Form.Label>
                            <Form.Control name="address.street" required />
                            <Form.Control.Feedback type="invalid">Molimo upišite adresu servisa.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Poštanski broj</Form.Label>
                            <Form.Control type="number" min="10000" max="60000" name="address.postNumber" required />
                            <Form.Control.Feedback type="invalid">Molimo upišite ispravan broj pošte.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mjesto</Form.Label>
                            <Form.Control name="address.city" required />
                            <Form.Control.Feedback type="invalid">Molimo upišite grad.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Telefon</Form.Label>
                            <Form.Control name="contact.phone" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control name="contact.email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                            <Form.Control.Feedback type="invalid">Email adresa je obavezna u formatu korisnik@domena.tld .</Form.Control.Feedback>
                        </Form.Group>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Odustani</Button>
                        <Button variant="primary" type="submit"><FaSave /> Spremi</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export function DeleteServiceCenter(props) {
    const [show, setShow] = useState(false);

    const handleClose = (e) => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.delete(`${SERVICE_CENTERS_URL}/${props.center.id}`)
            .then(response => {
                console.log(response);
                setShow(false);
                props.refreshData();
            }).catch(error => console.log(error));
    }

    return (
        <>
            <Button size="sm" variant="danger" onClick={handleShow}><FaTrash /></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Obriši servisni centar: ? </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Jesi li siguran da želiš obrisati centar?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Odustani</Button>
                    <Button variant="danger" onClick={handleSubmit}><FaTrash /> Obriši</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

