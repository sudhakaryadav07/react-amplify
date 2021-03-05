import React from 'react';
import { Col, Card, Row, CardTitle, CardBody } from 'reactstrap';

const user = ({ data, history }) => {
    return (
        <Col className="ml-auto mr-auto" lg="7" xl="6" style={{ cursor: 'pointer' }}
            onClick={() => history.push({ pathname: '/blog', state: { selectedUser: data } })}
        >
            <Card className="card-profile" style={{ margin: '20px 0px 50px 0px',backgroundColor: 'transparent',boxShadow:'none' }}>
                <Row>
                    <Col md="5">
                        <div >
                            <a href="#image" onClick={(e) => e.preventDefault()}>
                                <img
                                    alt="..."
                                    style={{ minWidth: 264 }}
                                    src={data ? data.images.length > 0 ? data.images[1] : "" : ""}
                                ></img>
                            </a>
                        </div>
                    </Col>
                    <Col md="7">
                        <CardBody style={{ padding: '0px 10px 0px 10px' }}>
                            <CardTitle style={{ fontSize: 30, marginBottom: 6 }} >{data.name ? data.name.length >= 16 ? data.name.substring(0, 15) + "..." : data.name : ""}</CardTitle>
                            <h6 className="category text-info">{data.title ? data.title : "Default Title"}</h6>
                            <p className="card-description"
                                style={{ paddingLeft: 5, textAlign: 'left',color:'#000', height: 110, overflow: 'hidden', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
                                {data.summary ? data.summary : ""}...
                            </p>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </Col >
    );
}

export default user;