import React, { useState } from "react";
import { Button, ButtonGroup, Card, Col, Form, Modal, Row } from "react-bootstrap";
import Table from "../../Table";
import { records as data } from "./data";
import PageTitle from "../../PageTitle";
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Category from "./Category";
import DatePick from "./Date";
import Doctor from "./Doctor";

const columns = [
    {
        Header: "#",
        accessor: "id",
        sort: true,
    },
    {
        Header: "Category",
        accessor: "category",
        sort: true,
    },
    {
        Header: "Date",
        accessor: "date",
        sort: true,
    },
    {
        Header: "Amount",
        accessor: "amount",
        sort: true,
    },
    {
        Header: "Action",
        accessor: "icon",
        Cell: ({ row }) => (
            <div>
                <i className="bi bi-pencil-square fs-3 p-2 text-primary"></i>
                <i className="bi bi-trash fs-3 p-2 text-primary"></i>
            </div>
        ),
    },
];

const sizePerPageList = [
    { text: "5", value: 5 },
    { text: "10", value: 10 },
    { text: "25", value: 25 },
    { text: "All", value: data.length },
];

const ExpensesTable = () => {
    const [showScrollableModal, setShowScrollableModal] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "Expenses", path: "/components/accounting-expense", active: true },
                ]}
                title={"Expenses"}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md={4}>
                                    <h4 className="header-title">Expenses</h4>
                                </Col>
                                <Col xs={12} md={6} className="align-center">
                                    <ButtonGroup className="mb-2">
                                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                                            <button type="button" className="btn btn-outline-primary"><i className="bi bi-files fs-3 p-2"></i>copy</button>
                                            <button type="button" className="btn btn-outline-primary"><i className="bi bi-file-earmark-excel  fs-3 p-2"></i>Excel</button>
                                            <button type="button" className="btn btn-outline-primary"><i className="bi bi-file-ruled fs-3 p-2"></i>CSB</button>
                                            <button type="button" className="btn btn-outline-primary"><i className="bi bi-file-earmark-pdf fs-3 p-2"></i>PDF</button>
                                        </div>
                                    </ButtonGroup>
                                </Col>
                                <Col xs={12} md={2}>
                                    <Button onClick={() => setShowScrollableModal(true)} className="primary">
                                        <i className="bi bi-plus-lg p-2"></i>
                                        <span>Create</span>
                                    </Button>
                                    <Modal show={showScrollableModal} onHide={() => setShowScrollableModal(false)} scrollable>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Add Expense Category</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
    <Form onSubmit={handleSubmit}>
        <h4>Create Expenses</h4>
        <div className="container">
            <div className="row">
                <div className="row">
                    <Card.Body>
                        <Form.Group controlId="category">
                            <Form.Label className="mb-1 fw-bold">Category</Form.Label>
                            <Category />
                        </Form.Group>
                    </Card.Body>
                </div>
                <div className="row">
                    <Card.Body>
                        <Form.Group controlId="date">
                            <Form.Label className="mb-1 fw-bold">Date</Form.Label>
                            <DatePick />
                        </Form.Group>
                    </Card.Body>
                </div>
                <div className="col">
                    <Card.Body>
                        <Form.Group controlId="doctor">
                            <Form.Label className="mb-1 fw-bold">Doctor</Form.Label>
                            <Doctor />
                        </Form.Group>
                    </Card.Body>
                </div>
                <div className="col">
                    <Card.Body>
                        <Form.Group controlId="amount">
                            <Form.Label className="mb-1 fw-bold">Amount</Form.Label>
                            <Form.Control id="example-number" type="number" name="number" />
                        </Form.Group>
                    </Card.Body>
                </div>
            </div>
        </div>
        <h4 className="header-title mt-0 mb-1">Notes</h4>
        <SimpleMDEReact id="1" options={{ autofocus: true }} />
        <Button type="submit" className="primary width-xs"><i className="bi bi-check-lg p-2"></i><span>Save</span></Button>
    </Form>
</Modal.Body>

                                    </Modal>
                                </Col>
                            </Row>
                            <Table
                                columns={columns}
                                data={data}
                                pageSize={13}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSearchable={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ExpensesTable;
