import React from 'react';
import TodoTitle from './TodoTitle.js';
import TodoAddForm from './TodoAddForm.js';
import TodoList from './TodoList.js';
import './done.css';
import funny from'./273dda796cabca8b99e39091c0c89502.jpg';

var todoItems = [];
todoItems.push({index: 1, value: "Playing Basketball", done: false});
todoItems.push({index: 2, value: "Coding", done: true});
todoItems.push({index: 3, value: "看妹", done: true});
class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = { todoItems: todoItems };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.TodoDone = this.TodoDone.bind(this);
    } 
    addItem(todoItem) {
        todoItems.unshift({
            index: todoItems.length+1, 
            value: todoItem.newItemValue, 
            done: false
        });
        this.setState({todoItems: todoItems});
    }
    removeItem (itemIndex) {
        todoItems.splice(itemIndex, 1);
        this.setState({todoItems: todoItems});
    }
    TodoDone(itemIndex) {
        var todo = todoItems[itemIndex];
        todoItems.splice(itemIndex, 1);
        todo.done = !todo.done;
        todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
        this.setState({todoItems: todoItems});
    }
    render() {
        return (
            <div id="main"> 
                <TodoTitle />
                <TodoList items={this.state.todoItems} removeItem={this.removeItem} TodoDone={this.TodoDone}/>
                <TodoAddForm addItem={this.addItem} />
                <img src={funny} alt="funny"/>
            </div>
        );
    }
}
export default TodoApp
