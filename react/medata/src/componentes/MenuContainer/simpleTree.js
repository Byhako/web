// Dependecies
import React, {Component} from 'react';
import TreeView from 'react-simple-jstree';
 
class Tree extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      data: {
        core: {
          data: [
            {
              text: 'Root node', children: [
              {text: 'Child node 1'},
              {text: 'Child node 2'},
              {text: 'archivo.txt'}
              ],
            }
          ]
        }
      },

    };
  }
 
  handleChange(e, data) {
    this.setState({
      selected: data.selected,
    })
  }
 
  render() {
    const data = this.state.data;
 
    return (
      <div>
        
        <TreeView treeData={data} onChange={(e, data) => this.handleChange(e, data)} />
        
      </div>
    );
  }
}

export default Tree;