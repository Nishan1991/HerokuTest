import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row ,Pagination,PaginationItem,PaginationLink,CardHeader,Table,Badge} 
from 'reactstrap';
import { AppSwitch } from '@coreui/react'

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

class Landing extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {
    return (
      <Row>
      <Col xs="12" lg="7">
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i> Existing Requests
        </CardHeader>
        <CardBody>
          <Table responsive striped>
            <thead>
            <tr>
              <th>Company Name</th>
              <th>Request Date</th>
              <th>Expected Dates</th>
              <th>Response Date</th>
              <th>Request Type</th>
              <th>Status</th>
              <th>Data Received?</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>ABN AMRO</td>
              <td>2018/06/01</td>
              <td>2018/06/01</td>
              <td>2018/06/01</td>
              <td>Personal Data</td>
              <td>
                <Badge color="success">Completed</Badge>
              </td>
              <td><AppSwitch className={'mx-1'} variant={'3d'} outline={'alt'} color={'success'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/></td>
            </tr>
            
            <tr>
              <td>KPN</td>
              <td>2018/06/01</td>
              <td>2018/06/10</td>
              <td></td>
              <td>Personal Data</td>
              <td>
                <Badge color="warning">Active</Badge>
              </td>
              <td><AppSwitch className={'mx-1'} variant={'3d'} outline={'alt'} color={'success'}  label dataOn={'\u2713'} dataOff={'\u2715'}/></td>
            </tr>
            <tr>
              <td>RABO Bank</td>
              <td>2018/05/01</td>
              <td>2018/05/10</td>
              <td></td>
              <td>Data Erase</td>
              <td>
                <Badge color="danger">Expired</Badge>
              </td>
              <td><AppSwitch className={'mx-1'} variant={'3d'} outline={'alt'} color={'success'}  label dataOff={'\u2715'} dataOn={'\u2713'} /></td>
            </tr>
            </tbody>
          </Table>
          <Pagination>
            <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
            <PaginationItem active>
              <PaginationLink tag="button">1</PaginationLink>
            </PaginationItem>
            <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  </Row>
    );
  }
}

export default Landing;
