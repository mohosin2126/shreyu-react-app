import React, { useState, useRef } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import PageTitle from "../../PageTitle";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ContractorReportForms = () => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [selectedDateRange, setSelectedDateRange] = useState("");
    const [showDetails, setShowDetails] = useState({
        showGroupTests: false,
        showPayment: false,
    });
    const [tableData, setTableData] = useState([]);
    const tableRef = useRef(null); 

    const options = [
        { id: 1, value: "Sample", label: "Sample" },
        { id: 2, value: "drJaneSmith", label: "Dr Jane Smith" },
        { id: 3, value: "drJohnDoe", label: "Dr John Doe" },
        { id: 4, value: "drJohnDoe", label: "Dr John Doe" },
        { id: 5, value: "drJaneSmith", label: "Dr Jane Smith" },
    ];

    const DaysOptions = [
        { id: 1, label: "Today" },
        { id: 2, label: "Yesterday" },
        { id: 3, label: "Last 7 days" },
        { id: 4, label: "Last 30 days" },
        { id: 5, label: "This month" },
        { id: 6, label: "Last month" },
        { id: 7, label: "This year" },
        { id: 8, label: "Last year" },
    ];

    const handleOptionClick = (label) => {
        let minDate, maxDate;
        const currentDate = new Date();
        switch (label) {
            case "Today":
                minDate = currentDate;
                maxDate = currentDate;
                break;
            case "Yesterday":
                minDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
                maxDate = minDate;
                break;
            case "Last 7 days":
                minDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
                maxDate = currentDate;
                break;
            case "Last 30 days":
                minDate = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
                maxDate = currentDate;
                break;
            case "This month":
                minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
                maxDate = currentDate;
                break;
            case "Last month":
                minDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
                maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
                break;
            case "This year":
                minDate = new Date(currentDate.getFullYear(), 0, 1);
                maxDate = currentDate;
                break;
            case "Last year":
                minDate = new Date(currentDate.getFullYear() - 1, 0, 1);
                maxDate = new Date(currentDate.getFullYear() - 1, 11, 31);
                break;
            default:
                break;
        }
        setSelectedDateRange(`${minDate.toLocaleDateString()} - ${maxDate.toLocaleDateString()}`);
    };

    const onChangeSingleSelection = (selected) => {
        setSingleSelections(selected);
    };

    const handleShowDetailsChange = (event) => {
        setShowDetails({
            ...showDetails,
            [event.target.name]: event.target.checked,
        });
    };

    const handleSave = () => {
        const tableRow = {
            dateRange: selectedDateRange,
            doctor: singleSelections.length > 0 ? singleSelections[0].label : "",
            showGroupTests: showDetails.showGroupTests,
            showPayment: showDetails.showPayment,
        };

        setTableData([tableRow]);
    };

    const handleDownloadPDF = () => {
        const input = tableRef.current;

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, "JPEG", 0, 0, width, height);
            pdf.save("contractor_report.pdf");
        });
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "Contractor Reports", path: "/components/accounting-report", active: true },
                ]}
                title={"Accounting"}
            />
            <Card>
                <h4 className="px-2 bg-primary text-light p-2">Contractor Reports</h4>
                <Card.Body>
                    <Row>
                        <Col>
                            <p className="mb-1 fw-bold">Date range:</p>
                            <Typeahead
                                id="select2"
                                labelKey="label"
                                multiple={false}
                                options={DaysOptions}
                                placeholder="Choose a date range..."
                                selected={[{ label: selectedDateRange }]}
                                onChange={(selected) => {
                                    if (selected.length > 0) {
                                        handleOptionClick(selected[0].label);
                                    }
                                }}
                            />
                        </Col>
                        <Col>
                            <p className="mb-1 fw-bold">Doctor:</p>
                            <Typeahead
                                id="select2"
                                labelKey="label"
                                multiple={false}
                                onChange={onChangeSingleSelection}
                                options={options}
                                placeholder="Choose a doctor..."
                                selected={singleSelections}
                            />
                        </Col>
                        <Col>
                            <p className="mb-1 fw-bold">Show Details</p>
                            <Form.Check
                                type="checkbox"
                                id="showGroupTests"
                                name="showGroupTests"
                                label="Show Group tests"
                                onChange={handleShowDetailsChange}
                            />
                            <Form.Check
                                type="checkbox"
                                id="showPayment"
                                name="showPayment"
                                label="Show Payment"
                                onChange={handleShowDetailsChange}
                            />
                        </Col>
                        <Col>
                            <Button className="primary width-xs align-center" onClick={handleSave}>
                                <i className="bi bi-gear-fill p-2"></i>
                                <span>Save</span>
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {tableData.length > 0 && (
                <Card className="mt-3">
                    <Card.Body>
                        <Card.Title as="h5" className="mb-4">Accounting Report</Card.Title>
                        <Table striped bordered hover responsive="sm" variant="dark">
                            <thead>
                                <tr>
                                    <th>Date Range</th>
                                    <th>Doctor</th>
                                    <th>Show Group Tests</th>
                                    <th>Show Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.dateRange}</td>
                                        <td>{row.doctor}</td>
                                        <td>{row.showGroupTests ? "Yes" : "No"}</td>
                                        <td>{row.showPayment ? "Yes" : "No"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Button className="primary width-xs align-center" onClick={handleDownloadPDF}>
                            <i className="bi bi-download p-2"></i>
                            <span>Download as PDF</span>
                        </Button>
                    </Card.Body>
                </Card>
            )}
        </>
    );
};

export default ContractorReportForms;
