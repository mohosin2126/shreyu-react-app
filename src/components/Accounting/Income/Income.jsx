import React from 'react';
import PageTitle from '../../PageTitle';
import { Card } from 'react-bootstrap';

const Income = () => {
    return (
        <div>
           <>
        <PageTitle
                breadCrumbItems={[

                    { label: "Accounting", path: "/components/accounting-report", active: true },

                ]}
                title={"Income"}
            />
        
        <Card>
            <div class="">
           <table class="table table-striped ">
  <thead>
    <tr >
      <th scope="col">Serial</th>
      <th scope="col">Name</th>
      <th scope="col">Amount</th>
      <th scope="col">Tnx Id</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <th scope="row">1</th>
      <td>Steven</td>
      <td>20$</td>
      <td>dffhuehe726231uhwdh27</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Alex</td>
      <td>7$</td>
      <td>dffhuehe726231uhwdh27</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Jenifer</td>
      <td>15$</td>
      <td>dffhuehe726231uhwdh27</td>
    </tr>
    <tr >
      <th scope="row">4</th>
      <td>Steven</td>
      <td>20$</td>
      <td>dffhuehe726231uhwdh27</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Alex</td>
      <td>7$</td>
      <td>dffhuehe726231uhwdh27</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td >Jenifer</td>
      <td>15$</td>
      <td>dffhuehe726231uhwdh27</td>
    </tr>
    <tr >
      <th scope="row">7</th>
      <td>Steven</td>
      <td>20$</td>
      <td>dffhuehe726231uhwdh27</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Alex</td>
      <td>7$</td>
      <td>dffhuehe726231uhwdh27</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td >Jenifer</td>
      <td>15$</td>
      <td>dffhuehe726231uhwdh27</td>
    </tr>
  </tbody>
</table>
        </div>
        </Card>
        </>
        </div>
    );
};

export default Income;