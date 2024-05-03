import React from 'react';
import { Card } from 'react-bootstrap';
import PageTitle from '../PageTitle';

const IncomeCategories = () => {
    return (
        <>
        <PageTitle
                breadCrumbItems={[

                    { label: "Accounting", path: "/components/accounting-report", active: true },

                ]}
                title={"Income Categories"}
            />
        
        <Card>
            <div class="">
           <table class="table table-striped ">
  <thead>
    <tr >
      <th scope="col">Serial</th>
      <th scope="col">Old Visitors</th>
      <th scope="col">New Visitors</th>
      <th scope="col">From Campaign</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <th scope="row">1</th>
      <td>10$</td>
      <td>20$</td>
      <td>25$</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>5$</td>
      <td>7$</td>
      <td>12$</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >17$</td>
      <td>15$</td>
      <td>22$</td>
    </tr>
    <tr >
      <th scope="row">4</th>
      <td>10$</td>
      <td>20$</td>
      <td>25$</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>5$</td>
      <td>7$</td>
      <td>12$</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td >17$</td>
      <td>15$</td>
      <td>22$</td>
    </tr>
    <tr >
      <th scope="row">7</th>
      <td>10$</td>
      <td>20$</td>
      <td>25$</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>5$</td>
      <td>7$</td>
      <td>12$</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td >17$</td>
      <td>15$</td>
      <td>22$</td>
    </tr>
  </tbody>
</table>
        </div>
        </Card>
        </>
    );
};

export default IncomeCategories;