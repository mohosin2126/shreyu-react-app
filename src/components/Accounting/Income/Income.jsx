import React, { useState } from "react";
import { Button, ButtonGroup, Card, Col, Modal, Row, Form, Alert } from "react-bootstrap";
import PageTitle from "../../PageTitle";
import Table from "../../Table";
import { records as data } from "./data";

const IncomeTable = () => {
    const [showScrollableModal, setShowScrollableModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [validated, setValidated] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [editedExpense, setEditedExpense] = useState({});
    const [tableData, setTableData] = useState(data);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const handleEdit = (row) => {
        setEditingItem(row);
        setEditedExpense({ ...row });
        setShowEditModal(true);
    };

    const handleSaveEdit = () => {
        const newData = tableData.map((item) => {
            if (item.id === editingItem.id) {
                return { ...item, ...editedExpense };
            }
            return item;
        });
        setTableData(newData);
        setShowEditModal(false);
        setSuccessMessage("Income updated successfully.");
    };

    const handleDelete = (row) => {
        setEditingItem(row);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        const newData = tableData.filter((item) => item.id !== editingItem.id);
        setTableData(newData);
        setShowDeleteModal(false);
        setSuccessMessage("Income deleted successfully.");
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[{ label: "Income", path: "/components/accounting-expense", active: true }]}
                title={"Income"}
            />
            {successMessage && (
                <Alert variant="success" onClose={() => setSuccessMessage("")} dismissible>
                    {successMessage}
                </Alert>
            )}
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md={4}>
                                    <h4 className="header-title">Income</h4>
                                </Col>
                                <Col xs={12} md={6} className="align-center">
                                    <ButtonGroup className="mb-2">
                                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                                            <button type="button" className="btn btn-outline-primary">
                                                <i className="bi bi-files fs-3 p-2"></i>copy
                                            </button>
                                            <button type="button" className="btn btn-outline-primary">
                                                <i className="bi bi-file-earmark-excel  fs-3 p-2"></i>Excel
                                            </button>
                                            <button type="button" className="btn btn-outline-primary">
                                                <i className="bi bi-file-ruled fs-3 p-2"></i>CSB
                                            </button>
                                            <button type="button" className="btn btn-outline-primary">
                                                <i className="bi bi-file-earmark-pdf fs-3 p-2"></i>PDF
                                            </button>
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
                                            <Modal.Title>Add Income Category</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form onSubmit={handleSubmit}>
                                                <h4>Create Income</h4>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="row">
                                                            <Card.Body>
                                                                <Form.Group controlId="category">
                                                                    <Form.Label className="mb-1 fw-bold">Category</Form.Label>
                                                                    <Form.Control type="text" placeholder="Enter category" value={editedExpense.category} onChange={(e) => setEditedExpense({...editedExpense, category: e.target.value})} required />
                                                                </Form.Group>
                                                            </Card.Body>
                                                        </div>
                                                        <div className="row">
                                                            <Card.Body>
                                                                <Form.Group controlId="date">
                                                                    <Form.Label className="mb-1 fw-bold">Date</Form.Label>
                                                                    <Form.Control type="date" placeholder="Select date" value={editedExpense.date} onChange={(e) => setEditedExpense({...editedExpense, date: e.target.value})} required />
                                                                </Form.Group>
                                                            </Card.Body>
                                                        </div>
                                                        <div className="row">
                                                            <Card.Body>
                                                                <Form.Group controlId="amount">
                                                                    <Form.Label className="mb-1 fw-bold">Amount</Form.Label>
                                                                    <Form.Control type="number" placeholder="Enter amount" value={editedExpense.amount} onChange={(e) => setEditedExpense({...editedExpense, amount: e.target.value})} required />
                                                                </Form.Group>
                                                            </Card.Body>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Button type="submit" className="primary width-xs"><i className="bi bi-check-lg p-2"></i><span>Save</span></Button>
                                            </Form>
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                            </Row>
                            <Table
                                columns={[
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
                                                <i className="bi bi-pencil-square fs-3 p-2 text-primary" onClick={() => handleEdit(row)}></i>
                                                <i className="bi bi-trash fs-3 p-2 text-primary" onClick={() => handleDelete(row)}></i>
                                            </div>
                                        ),
                                    },
                                ]}
                                data={tableData}
                                pageSize={13}
                                sizePerPageList={[
                                    { text: "5", value: 5 },
                                    { text: "10", value: 10 },
                                    { text: "25", value: 25 },
                                    { text: "All", value: data.length },
                                ]}
                                isSortable={true}
                                pagination={true}
                                isSearchable={true}
                            />
                            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit Income</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSaveEdit}>
                                        <Form.Group controlId="editCategory">
                                            <Form.Label>Category</Form.Label>
                                            <Form.Control type="text" value={editedExpense.category} onChange={(e) => setEditedExpense({...editedExpense, category: e.target.value})} required />
                                        </Form.Group>
                                        <Form.Group controlId="editDate">
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date" value={editedExpense.date} onChange={(e) => setEditedExpense({...editedExpense, date: e.target.value})} required />
                                        </Form.Group>
                                        <Form.Group controlId="editAmount">
                                            <Form.Label>Amount</Form.Label>
                                            <Form.Control type="number" value={editedExpense.amount} onChange={(e) => setEditedExpense({...editedExpense, amount: e.target.value})} required />
                                        </Form.Group>
                                        <Button type="submit">Save</Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Delete Income</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Are you sure you want to delete this Income?</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                                    <Button variant="danger" onClick={confirmDelete}>Delete</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default IncomeTable;
