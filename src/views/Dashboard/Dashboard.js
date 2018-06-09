import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import MultiSelectField from './multiSelect'
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  FormGroup,
  Label,
  Input

} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

class Dashboard extends Component {
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

  render () {
    return (
      <Row>
      <Col xs="12" sm="6">
      <Card>
        <CardHeader>
          <strong>Request</strong>
          <small> Form</small>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label htmlFor="company">Company</Label>
            {/* <Input type="text" id="company" placeholder="Enter your company name" /> */}
           <MultiSelectField />
          </FormGroup>
          <FormGroup>
            <Row>
                <Button block color="primary">Reuest Data</Button>
                <Button block color="primary">Erase Data</Button>
            </Row>
            </FormGroup>
        </CardBody>
      </Card>
    </Col>
    </Row>
    )
  }
}

export default Dashboard;
