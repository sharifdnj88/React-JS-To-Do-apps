import { Component } from "react";

class Order extends Component {

    constructor(props){
        super(props);
        this.state ={
            counter: 0
        }
    }

    render(){
        const {counter} = this.state;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-5 m-auto">
                        <div className="card my-5 shadow">
                            <div className="card-header">
                            <h1>Class Components</h1>
                            </div>
                            <div className="card-body">
                                <h1 className="text-center fw-bold">{counter}</h1>
                                <div className="counter-btn text-center">
                                <button className='btn btn-danger btn-sm mx-1' onClick={() => this.setState((prevState) => ({ ...prevState, counter:prevState.counter +1 }))}>++</button>
                                <button className='btn btn-warning btn-sm' onClick={() => this.setState((prevState) => ({
                                    ...prevState, counter:prevState.counter -1
                                }))} >--</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Order;