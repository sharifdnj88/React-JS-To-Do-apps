import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)

        this.state ={
            input:{
                name: "",
                email: "",
                cell: "",
                skill: ""
            }
        }        
    }
  render() {

    const {title, subtitle } = this.props;
    const {name, email, cell, skill} = this.state.input;
    const handleInputChange = (e) => {
        this.setState( (prevState) => ({
            ...prevState,
            input: {
                ...prevState.input,
                [e.target.name] : [e.target.value]
            },
        }) )
    }

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-5 m-auto">
                <div className="card my-5 shadow">
                    <div className="card-header text-center">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                    </div>
                    <div className="card-body">
                      <form action="">
                        <div className="my-3">
                            <label>Name</label>
                            <input onChange={handleInputChange} name='name' value={name} className='form-control' type="text" />
                        </div>
                        <div className="my-3">
                            <label>Email</label>
                            <input onChange={handleInputChange} name='email' value={email} className='form-control' type="text" />
                        </div>
                        <div className="my-3">
                            <label>Cell</label>
                            <input onChange={handleInputChange} name='cell' value={cell} className='form-control' type="text" />
                        </div>
                        <div className="my-3">
                            <label>Skill</label>
                            <input onChange={handleInputChange} name='skill' value={skill} className='form-control' type="text" />
                        </div>
                        <div className="my-3">
                            <button className='btn btn-primary w-100' type="submit">Submit</button>
                        </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Login