import React, { Component } from "react";
import { Menu, Dropdown, Icon, Button } from "antd";

class TableHeader extends Component {
  state = {};
  render() {
    const menu = (
      <Menu>
        <Menu.Item onClick={this.props.filterDog}>🐶</Menu.Item>
        <Menu.Item onClick={this.props.filterCat}>😼</Menu.Item>
        <Menu.Item onClick={this.props.noFilter}>None</Menu.Item>
      </Menu>
    );
    return (
      <React.Fragment>
        <Dropdown className="sort-filter-buttons" overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Filter by <Icon type="down" />
          </a>
        </Dropdown>
        <Button className="sort-filter-buttons" onClick={this.props.nameSort}>
          Sort by name
        </Button>
        <Button className="sort-filter-buttons" onClick={this.props.breedSort}>
          Sort by breed
        </Button>
        <div className="tableheader">
          <div className="type">Type</div>
          <div className="name">Name</div>
          <div className="breed">Breed</div>
        </div>
      </React.Fragment>
    );
  }
}

export default TableHeader;
