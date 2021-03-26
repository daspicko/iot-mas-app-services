import React from 'react';
import { Col, InputGroup, FormControl, Container, Row, Table } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import { trackPromise } from "react-promise-tracker";
import axios from 'axios';

import { LoadingIcon } from '..//Utils';
import MOCKED_SERVICES from '../../data/mocked/services.json';
import { AddServiceCenter, DeleteServiceCenter } from './ModalsCenters';
import { AddServiceToServiceCenter, ListServiceCenterServices, DeleteServiceFromServiceCenter } from './ModalsServices';

const SERVICE_CENTERS_URL = "/api/v1/service-centres";

class ServiceCenters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfCentersToShow: 20,
            searchTerm: "",
            serviceCenters: [],
        }
    }

    componentDidMount() {
        trackPromise(
            axios.get(SERVICE_CENTERS_URL)
                .then(response => {
                    this.setState({ serviceCenters: response.data || [] });
                })
                .catch(error => {
                    if (process.env.NODE_ENV !== 'production') {
                        this.setState({ serviceCenters: MOCKED_SERVICES })
                    }
                    console.log(error);
                })
            , "loading-centers");
    }

    refreshData = () => {
        axios.get(SERVICE_CENTERS_URL)
                .then(response => {
                    this.setState({ serviceCenters: response.data || [] });
                })
                .catch(error => {
                    if (process.env.NODE_ENV !== 'production') {
                        this.setState({ serviceCenters: MOCKED_SERVICES })
                    }
                    console.log(error);
                });
    }

    simpleUpdateFieldValue = e => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    filterCenters = () => {
        let searchTerm = this.state.searchTerm ? this.state.searchTerm.toLowerCase() : "";
        let results = this.state.serviceCenters || [];
        results = results.filter(center => {
            return center.name.toLowerCase().includes(searchTerm) ||
                center.address.street.toLowerCase().includes(searchTerm) ||
                center.address.postNumber == searchTerm ||
                center.address.city.toLowerCase().includes(searchTerm) ||
                center.contact.phone.toLowerCase().includes(searchTerm) ||
                center.contact.email.toLowerCase().includes(searchTerm)
        });
        return results;
    }

    incrementNumberOfServicesToShow = () => {
        this.setState({
            numberOfCentersToShow: this.state.numberOfCentersToShow + 10
        });
    }

    render() {
        let filteredCenters = this.filterCenters();

        return (
            <Container>
                <Row>
                    <Col sm md lg="8">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text><FaSearch /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Pretraži" name="searchTerm" onChange={this.simpleUpdateFieldValue} />
                        </InputGroup>
                    </Col>
                    <Col>
                        <AddServiceCenter refreshData={this.refreshData} />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Naziv</th>
                                <th>Ulica i kućni broj</th>
                                <th>Poštanski broj</th>
                                <th>Mjesto</th>
                                <th>Telefon</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.serviceCenters ? filteredCenters.slice(0, this.state.numberOfCentersToShow).map((center, index) => (
                                    <tr key={center.id}>
                                        <td>{center.name}</td>
                                        <td>{center.address.street}</td>
                                        <td>{center.address.postNumber}</td>
                                        <td>{center.address.city}</td>
                                        <td>{center.contact.phone}</td>
                                        <td>{center.contact.email}</td>
                                        <td width="1%" style={{ whiteSpace: "nowrap" }}>
                                            <ListServiceCenterServices refreshData={this.refreshData} center={center} />&nbsp;
                                            <AddServiceToServiceCenter refreshData={this.refreshData} center={center} />&nbsp;
                                            <DeleteServiceCenter refreshData={this.refreshData} center={center} />
                                        </td>
                                    </tr>

                                )) : undefined
                            }

                        </tbody>
                    </Table>
                    <p hidden={filteredCenters.length < this.state.numberOfCentersToShow} className="text-primary mb-4" style={{ textAlign: "center" }} onClick={this.incrementNumberOfServicesToShow}>Load more...</p>
                    <LoadingIcon area="loading-centers" />
                </Row>
            </Container>

        )
    }
}

export default ServiceCenters;
