import React from 'react';
import { Col, Card, Row, CardTitle, CardBody } from 'reactstrap';

const user = ({ data, history }) => {
    return (
        <Col className="ml-auto mr-auto" lg="7" xl="6" style={{cursor:'pointer'}} 
            onClick={() => history.push({ pathname: '/blog', state: { selectedUser: data } })}>
            <Card className="card-profile">
                <Row>
                    <Col md="5">
                        <div className="card-image">
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                <img
                                    alt="..."
                                    style={{ height: 180, width: 300 }}
                                    src={require(`../../../../icons/${data.firstName + " " + data.lastName}.jpg`)}
                                ></img>
                            </a>
                        </div>
                    </Col>
                    <Col md="7">
                        <CardBody style={{ padding: '0px 10px 0px 10px' }}>
                            <CardTitle tag="h3">{data.firstName + " " + data.lastName}</CardTitle>
                            <h6 className="category text-info">{data.title}</h6>
                            <p className="card-description">
                                {data.shortSummary}
                            </p>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
}

export default user;