import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import PageTitle from '../../PageTitle';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 20,
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: { margin: 'auto', flexDirection: 'row' },
  tableColHeader: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#f2f2f2',
    padding: 8,
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 8,
  },
});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Date</Text>
          <Text style={styles.tableColHeader}>Total Customers</Text>
          <Text style={styles.tableColHeader}>New Customers</Text>
          <Text style={styles.tableColHeader}>Total Sell</Text>
        </View>
        {data.map((row, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableCol}>{row.date}</Text>
            <Text style={styles.tableCol}>{row.totalCustomers}</Text>
            <Text style={styles.tableCol}>{row.newCustomers}</Text>
            <Text style={styles.tableCol}>{row.totalSell}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const Summery = () => {
  const data = [
    { date: '10-05-2024', totalCustomers: '550', newCustomers: '250', totalSell: '1200$' },
    { date: '10-05-2024', totalCustomers: '320', newCustomers: '170', totalSell: '940$' },
    { date: '10-05-2024', totalCustomers: '480', newCustomers: '210', totalSell: '1050$' },
    { date: '10-05-2024', totalCustomers: '550', newCustomers: '250', totalSell: '1200$' },
    { date: '10-05-2024', totalCustomers: '320', newCustomers: '170', totalSell: '940$' },
    { date: '10-05-2024', totalCustomers: '480', newCustomers: '210', totalSell: '1050$' },
    { date: '10-05-2024', totalCustomers: '550', newCustomers: '250', totalSell: '1200$' },
    { date: '10-05-2024', totalCustomers: '320', newCustomers: '170', totalSell: '940$' },
    { date: '10-05-2024', totalCustomers: '480', newCustomers: '210', totalSell: '1050$' },
    { date: '10-05-2024', totalCustomers: '550', newCustomers: '250', totalSell: '1200$' },
    { date: '10-05-2024', totalCustomers: '320', newCustomers: '170', totalSell: '940$' },
    { date: '10-05-2024', totalCustomers: '480', newCustomers: '210', totalSell: '1050$' },
  ];

  return (
    <div>
      <PageTitle
        breadCrumbItems={[
          { label: 'Summary', path: '/components/accounting-report', active: true },
        ]}
        title={'Summary'}
      />
      <Card>
        <div>
          <table className="table table-bordered border-primary">
            <thead className="table-dark">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Total Customers</th>
                <th scope="col">New Customers</th>
                <th scope="col">Total Sell</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.totalCustomers}</td>
                  <td>{row.newCustomers}</td>
                  <td>{row.totalSell}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <PDFDownloadLink document={<MyDocument data={data} />} fileName="summary.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : <Button>Download PDF</Button>
            }
          </PDFDownloadLink>
        </div>
      </Card>
    </div>
  );
};

export default Summery;
