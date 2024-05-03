import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "../../Table";
import { records as data } from "./data";
import PageTitle from "../../PageTitle";
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
                <i class="bi bi-pencil-square fs-3 p-2 text-primary"></i>
                <i class="bi bi-trash fs-3 p-2 text-primary"></i>
            </div>


        ),
    },
];
const sizePerPageList = [
    {
        text: "5",
        value: 5,
    },
    {
        text: "10",
        value: 10,
    },
    {
        text: "25",
        value: 25,
    },
    {
        text: "All",
        value: data.length,
    },
];
const ExpensesTable = () => {
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
                                </Col >
                                <Col xs={12} md={6} class="align-center ">
                                    <ButtonGroup className="mb-2 ">
                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                            <button type="button" class="btn btn-outline-primary"><i class="bi bi-files fs-3 p-2"></i>copy</button>
                                            <button type="button" class="btn btn-outline-primary"><i class="bi bi-file-earmark-excel  fs-3 p-2"></i>Excel</button>
                                            <button type="button" class="btn btn-outline-primary"><i class="bi bi-file-ruled fs-3 p-2"></i>CSB</button>
                                            <button type="button" class="btn btn-outline-primary"><i class="bi bi-file-earmark-pdf fs-3 p-2"></i>PDF</button>
                                        </div>
                                    </ButtonGroup>
                                </Col>
                                <Col xs={12} md={2}>
                                    <Link to="/components/accounting-create-expenses">
                                        <Button class="primary ">
                                            <i class="bi bi-plus-lg p-2"></i>
                                            <span>Create</span>
                                        </Button></Link>
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