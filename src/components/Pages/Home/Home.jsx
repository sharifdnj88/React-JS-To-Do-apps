import { useState } from "react"


const Home = () => {    
    const [input, setInput] = useState({
        name: "",
        email: "",
        gender: "",
        age: "",
        edu: "",
        color: "",
    });

    const handleInputChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }

    const [stack, setStack] = useState([
        "MERN Stack",
        "Laravel",
        "Python",
        "Django",
        "React JS",
        "Next JS",
        "Go"
    ]);

    const [selected, setSelected] = useState([
        // selected data store
    ]);

    const handleCheckboxSelected = (e) => {
        const value = e.target.value;
        const updateList = [...selected];
        if (selected.includes(value)) {
            updateList.splice(selected.indexOf(value), 1);
        }else{
            updateList.push(value);
        }
        setSelected(updateList);
    }


  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 my-5">
                    <div className="card">
                        <div className="card-header"><h1>Registration</h1></div>
                        <div className="card-body">
                           <form action="">
                                <div className="my-3">
                                    <label htmlFor="">Name</label>
                                    <input name="name" value={input.name} onChange={handleInputChange} className="form-control" type="text" />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Email</label>
                                    <input name="email" value={input.email} onChange={handleInputChange} className="form-control" type="text" />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Gendar</label>
                                    <hr />
                                    <label>
                                        <input name="gender" value="Male" onChange={handleInputChange} type="radio" />Male
                                    </label> &nbsp;
                                    <label>
                                        <input name="gender" value="Female" onChange={handleInputChange} type="radio" />Female
                                    </label>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Age</label>
                                    <input name="age" value={input.age} onChange={handleInputChange}  type="range" step={1} min="10" max="70" />{input.age}
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Color </label>&nbsp;
                                    <input name="color" value={input.color} onChange={handleInputChange} type="color" />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Education</label>
                                    <select name="edu" onChange={handleInputChange} className="form-control">
                                        <option value="">-select-</option>
                                        <option value="JSC">JSC</option>
                                        <option value="SSC">SSC</option>
                                        <option value="HSC">HSC</option>
                                        <option value="BSC">BSC</option>
                                        <option value="MSC">MSC</option>
                                    </select>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Department</label>
                                    <hr />
                                    {stack.map((item, index) => {
                                        return(
                                            <>
                                                <label key={index}>
                                                    <input checked={selected.includes(item)} onChange={handleCheckboxSelected} type="checkbox" value={item} /> {item}
                                                </label>
                                                <br />      
                                            </>
                                        );
                                    })}                                                             
                                </div>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home