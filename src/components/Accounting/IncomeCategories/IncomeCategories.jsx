import { useState } from "react";
import { Button, ButtonGroup, Card, Col, Form,  Modal, Row } from "react-bootstrap";
import PageTitle from "../../PageTitle";
import Table from "../../Table";
import { records as data } from "./incomedata";

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

const IncomeCategoryTable = () => {
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
                    { label: "Income Categories", path: "/components/accounting-expense-category", active: true },
                ]}
                title={"Incomes"}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row className="border">
                                <Col xs={12} md={4}>
                                    <h4 className="header-title">Income Categories Table</h4>
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
                                    <Button onClick={() => setShowScrollableModal(true)} className="primary ">
                                        <i className="bi bi-plus-lg p-2"></i>
                                        <span>Create</span>
                                    </Button>
                                    <Modal show={showScrollableModal} onHide={() => setShowScrollableModal(false)} scrollable>
    <Modal.Header closeButton>
        <Modal.Title as="h5">Add Income Category</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form className='addExpenseCategoryForm' noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Income Category Name"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please provide an Income category name.
                </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    </Modal.Body>
</Modal>

                                </Col>
                            </Row>
                            <Table
                                columns={columns}
                                data={data}
                                pageSize={5}
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

export default IncomeCategoryTable;
