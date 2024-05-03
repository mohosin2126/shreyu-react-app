import PageTitle from '../../PageTitle';
import { Card } from 'react-bootstrap';
const Summery = () => {
    return (
        <div>
           <>
        <PageTitle
                breadCrumbItems={[

                    { label: "Accounting", path: "/components/accounting-report", active: true },

                ]}
                title={"Summery"}
            />
        <Card>
            <div class="">
           <table class="table table-bordered border-primary ">
  <thead class="table-dark">
    <tr >
      <th scope="col">Date</th>
      <th scope="col">Total Customers</th>
      <th scope="col">New Customers</th>
      <th scope="col">Total Sell</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <th scope="row">10-05-2024</th>
      <td>550</td>
      <td>250</td>
      <td>1200$</td>
    </tr>
    <tr>
      <th scope="row">10-05-2024</th>
      <td>320</td>
      <td>170</td>
      <td>940$</td>
    </tr>
    <tr>
      <th scope="row">10-05-2024</th>
      <td >480</td>
      <td>210</td>
      <td>1050$</td>
    </tr>
    <tr >
      <th scope="row">10-05-2024</th>
      <td>550</td>
      <td>250</td>
      <td>1200$</td>
    </tr>
    <tr>
      <th scope="row">10-05-2024</th>
      <td>320</td>
      <td>170</td>
      <td>940$</td>
    </tr>
    <tr>
      <th scope="row">10-05-2024</th>
      <td >480</td>
      <td>210</td>
      <td>1050$</td>
    </tr>
    <tr >
      <th scope="row">10-05-2024</th>
      <td>550</td>
      <td>250</td>
      <td>1200$</td>
    </tr>
    <tr>
      <th scope="row">10-05-2024</th>
      <td>320</td>
      <td>170</td>
      <td>940$</td>
    </tr>
    <tr>
      <th scope="row">10-05-2024</th>
      <td >480</td>
      <td>210</td>
      <td>1050$</td>
    </tr>
  </tbody>
</table>
        </div>
        </Card>
        </>
        </div>
    );
};

export default Summery;