// Dependecies
import React, { Component } from 'react';
import $ from 'jquery';


class Tree extends Component {
  constructor(props){
    super(props);
    this.handleTree = this.handleTree.bind(this);
  }

  handleTree(){
    $('#jstree').jstree();
  }

  render(){
      return(
        <div id="jstree">
       
        <ul>
          <li>Root node 1
            <ul>
              <li id="child_node_1">Child node 1</li>
              <li>Child node 2</li>
            </ul>
          </li>
          <li>Root node 2</li>
        </ul>
      </div>
      );
  }
}

export default Tree;
