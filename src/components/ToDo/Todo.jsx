import React, { Component } from 'react'
import "./ToDo.scss";
import axios from 'axios';
import swal from 'sweetalert';

class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {
            todos: [],
            input: {
                title: "",
                status: "pending"
            }
        };
    }

    componentDidMount = () => {
        axios.get("http://localhost:5050/todos").then((res) => {
            this.setState((prevState) => ({
                ...prevState,
                todos: [...res.data],
            }));
        }).catch();
    }

    handleInputChange = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            input: {
                ...prevState.input,
                [e.target.name] : e.target.value,
            },
        }));
    }

    handleToDoSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5050/todos", this.state.input)
        .then((res) => {
            this.setState((prevState) => ({
                ...prevState,
                todos: [...prevState.todos, this.state.input],
                input: {
                    title: "",
                    status: "pending"
                }
            }));
        }).catch();
    }

    handleToDoDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`http://localhost:5050/todos/${id}`).then((res) => {
                this.setState((prevState) => ({
                    ...prevState,
                    todos: [...prevState.todos.filter((data) => data.id !== id )],
                }));
            }).catch();
              swal("Done", "Your data has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Save", "Your data is safe", "success");
            }
          });        
    }

  render() {
    const { todos, input } = this.state;
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-5 m-auto">
                <div className="card my-5 shadow">
                    <div className="card-header text-center">
                    <h3>To Do Apps</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleToDoSubmit} className='d-flex'>
                            <input name='title' value={input.title} onChange={this.handleInputChange} className='form-control mx-2' type="text" />
                            <select name='status' value={input.status} onChange={this.handleInputChange} className='form-control'>
                                <option value="pending">Pending</option>
                                <option value="complete">Complete</option>
                                <option value="cancel">Cancel</option>
                            </select>  &nbsp;
                            <button className='btn btn-primary btn-sm'>Add</button>
                        </form>
                        <hr />
                        <ul className='list-group'>
                            {todos.reverse().map((item, index) => {
                                let bgColor = "#FFF";
                                let color = "#FFF";
                                switch( item.status ) {
                                    case "pending":
                                        bgColor ="yellow";
                                        color ="#000";
                                        break;
                                    case "complete":
                                        bgColor ="green";
                                        color ="#FFF";
                                        break;
                                    case "cancel":
                                        bgColor ="red";
                                        color ="#FFF";
                                        break;
                                    default:
                                        bgColor = "white";

                                }
                                return(
                                    <li style={{backgroundColor: bgColor,color : color}} key={index} className='list-group-item justify-content-between d-flex align-items-center my-1'>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <img style={{height: "30px"}} src="https://khalifameditechbd.com/public/assets/img/download.png" alt="" />
                                    <span>{item.title}</span>
                                    </div>
                                    <button style={{color: color}} onClick={() => this.handleToDoDelete(item.id)} className='del-icon'><i class='bx bx-trash'></i></button>
                                </li>
                                )
                            })}
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Todo