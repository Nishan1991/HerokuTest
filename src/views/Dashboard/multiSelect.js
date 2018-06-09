import React, { Component } from "react";
import MultiSelect from "@kenshooui/react-multi-select";
 
export default class MultiSelectField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      items: [
        { id: 0, label: "ABN AMRO" },
        { id: 2, label: "Essent" },
        { id: 3, label: "KPN" },
        { id: 4, label: "Albert Heijn" },
        { id: 5, label: "Rabo Bank" }
      ],
      selectedItems: []
    };
  }
 
  handleChange(selectedItems) {
    this.setState({ selectedItems });
  }
  render() {
    const { items, selectedItems } = this.state;
    return (
      <MultiSelect
        items={items}
        selectedItems={selectedItems}
        onChange={this.handleChange}
      />
    );
  }
}