import React from 'react';
import { Col, Card, Row, CardTitle, CardBody } from 'reactstrap';

const user = ({ data, history }) => {
    return (
        <Col className="ml-auto mr-auto" lg="7" xl="6" style={{ cursor: 'pointer' }}
            onClick={() => history.push({ pathname: '/blog', state: { selectedUser: data } })}
            >
            <Card className="card-profile">
                <Row>
                    <Col md="5">
                        <div className="card-image">
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                <img
                                    alt="..."
                                    style={{ minWidth:250 }}
                                    src={data ? data.images.length > 0 ? data.images[1] : "" : ""}
                                ></img>
                            </a>
                        </div>
                    </Col>
                    <Col md="7">
                        <CardBody style={{ padding: '0px 10px 0px 10px' }}>
                            <CardTitle tag="h3">{data.name ? data.name : ""}</CardTitle>
                            <h6 className="category text-info">{data.title ? data.title : "Title assdfsdfsf"}</h6>
                            <p className="card-description"
                             style={{paddingLeft:5,wordWrap: 'break-word',textAlign:'left', textOverflow: 'ellipsis',height: 110,overflow: 'hidden'}}>
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