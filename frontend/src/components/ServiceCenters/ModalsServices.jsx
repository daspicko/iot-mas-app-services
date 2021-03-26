import React, { useState } from 'react';
import { trackPromise } from "react-promise-tracker";
import axios from 'axios';

import { Button, Modal, Form, Table } from 'react-bootstrap';
import { FaList, FaPlus, FaSave, FaTrash } from 'react-icons/fa';

import { LoadingScreen } from '..//Utils';

const SERVICE_CENTERS_URL = "/api/v1/service-centres";

export function ListServiceCenterServices(props) {
    const [show, setShow] = useState(false);

    const handleClose = (e) => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button size="sm" variant="primary" onClick={handleShow}><FaList /></Button>

            <Modal show={show} backdrop="static" onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Popis usluga </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Naziv uređaja</th>
                                <th>Opis uređaja</th>
                                <th>Cijena (HRK)</th>
                                <th>Trajanje (HRK)</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.center && props.center.services ? props.center.services.map((service, index) => (
                                    <tr key={service.id}>
                                        <td>{service.device.name}</td>
                                        <td>{service.device.description}</td>
                                        <td>{service.price}</td>
                                        <td>{service.time}</td>
                                        <td width="1%" style={{ whiteSpace: "nowrap" }}>
                                            <DeleteServiceFromServiceCenter center={props.center} service={service} refreshData={props.refreshData} />
                                        </td>
                                    </tr>

                                )) : undefined
                            }
                        </tbody>
                    </Table>
                    { props.services ? props.services.map(item => {
                        <p>{item}</p>
                    }) 
                    : undefined
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Zatvori</Button>
                </Modal.Footer>
            </Modal>

            <LoadingScreen area="loading-screen" />
        </>
    );
}

export function AddServiceToServiceCenter(props) {
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

        trackPromise(
            axios.post(`${SERVICE_CENTERS_URL}/${props.center.id}/services`, data, {})
                .then(response => {
                    console.log(response);
                    setShow(false);
                    setValidated(false);
                    form.reset();
                    props.refreshData();
                }).catch(error => console.log(error)),
            "loading-screen"
        );
    }

    return (
        <>
            <Button size="sm" variant="success" onClick={handleShow}><FaPlus /></Button>

            <Modal show={show} backdrop="static" onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Modal.Header closeButton>
                        <Modal.Title>Dodaj uslugu</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Naziv uređaja</Form.Label>
                            <Form.Control name="device.name" required />
                            <Form.Control.Feedback type="invalid">Molimo upišite naziv uređaja.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Opis uređaja</Form.Label>
                            <Form.Control name="device.description" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cijena usluge (HRK)</Form.Label>
                            <Form.Control type="number" min="1" name="price" required />
                            <Form.Control.Feedback type="invalid">Molimo upišite ispravan broj pošte.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Trajanje izvršenja usluge (min)</Form.Label>
                            <Form.Control type="number" min="1" name="time" required />
                            <Form.Control.Feedback type="invalid">Molimo upišite trajanje izvršenja usluge.</Form.Control.Feedback>
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Odustani</Button>
                        <Button variant="primary" type="submit"><FaSave /> Spremi</Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <LoadingScreen area="loading-screen" />
        </>
    );
}



export function DeleteServiceFromServiceCenter(props) {
    const [show, setShow] = useState(false);

    const handleClose = (e) => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        trackPromise(
            axios.delete(`${SERVICE_CENTERS_URL}/${props.center.id}/services/${props.service.id}`)
                .then(response => {
                    console.log(response);
                    setShow(false);
                    props.refreshData();
                }).catch(error => console.log(error)),
            "loading-screen"
        );
    }

    return (
        <>
            <Button size="sm" variant="danger" onClick={handleShow}><FaTrash /></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Obriši uslugu: ? </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Jesi li siguran da želiš obrisati uslugu?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Odustani</Button>
                    <Button variant="danger" onClick={handleSubmit}><FaTrash /> Obriši</Button>
                </Modal.Footer>
            </Modal>

            <LoadingScreen area="loading-screen" />
        </>
    );
}