import React, { Component } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import copy from './util/copy';
import './App.css';

class TodoContainer extends Component {
  constructor() {
    super();

    this.state = {
      itemData: [{id: 1, task: '写代码', complete: false}]
    };

    this.addItem = this.addItem.bind(this);
    this.handleCompelete = this.handleCompelete.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  id = 2;

  createId() {
    let id = this.id++;
    return id;
  }

  //新增任务项
  addItem(val) {
    if(val) {
      let newItem = {
        id: this.createId(),
        task: val,
        complete: false
      };
      let itemDataTemp = copy(this.state.itemData);
      itemDataTemp.push(newItem);
      this.setState({
        itemData: itemDataTemp
      });
    }
  }

  // 完成任务
  handleCompelete(id) {
    let itemDataTemp = copy(this.state.itemData);
    let item = itemDataTemp.find((item) => item.id === id);
    item.complete = !item.complete;
    this.setState({
      itemData: itemDataTemp
    })
  }

  //删除任务
  deleteItem(id) {
    let itemDataTemp = copy(this.state.itemData);
    let itemIndex = itemDataTemp.findIndex((item) => item.id === id);
    itemDataTemp.splice(itemIndex,1);
    this.setState({
      itemData: itemDataTemp
    })
  }


  render() {
    return (
      <div className="App">
          <h1>Todo List </h1>
          <TodoAdd addItem={this.addItem}/>
          <TodoList itemData={this.state.itemData} handleCompelete={this.handleCompelete} deleteItem={this.deleteItem}/>
          <TodoFooter itemData={this.state.itemData} />
      </div>
    );
  }
}

export default TodoContainer;
