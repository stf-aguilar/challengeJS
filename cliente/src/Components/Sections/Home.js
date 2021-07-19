import React, { Component } from 'react';
import { Row, Col, Container, Table } from 'react-bootstrap';
import OperationsList from '../OperationsList';
//import Valor from './Valor';

export class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {/*<Valor />*/}
                    <OperationsList />
                </Row>
            </Container>
        )
    }
}

export default Home
