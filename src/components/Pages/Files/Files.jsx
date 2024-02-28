import React, { useState } from 'react'
import "./Files.scss";
import axios from 'axios';
import { BarLoader } from 'react-spinners';

const Files = () => {
    const [images, setImages] = useState([]);
    const [loader, setLoader] = useState(false);

    const handleImagesUpload = (e) => {
        setImages((prevState) => [...prevState, ...Array.from(e.target.files)]);
    }
    const handleImageDelete = (file) => {
        const updateList = images.filter((data) => data !==file);
        setImages(updateList);
    }

    const handleImageUploadSubmit = () => {
        setLoader(true);
        const data = new FormData();
        let i = 1;
        images.forEach((item) => {
            data.append("file", item);
            data.append("cloud_name", "daxqzxfut");
            data.append("upload_preset", "sharif971");

            axios.post("https://api.cloudinary.com/v1_1/daxqzxfut/image/upload", data).then((res) => {
            console.log(res.data);
                if (i === images.length) {
                    setImages([]);
                    setLoader(false);
                }      
                i++;      
            }).catch((error) => {
                console.log(error.message);
            });
        });        
    }
  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 my-3">
                    <div className="card">
                        <div className="card-header"><h3>Image Preview System</h3></div>
                        <div className="card-body">
                            <div className='d-flex'>
                                <input className='form-control' type="file" multiple onChange={handleImagesUpload} />
                                { loader ? <BarLoader className='image-spinner' height={14} color="#36d7b7" /> : <button onClick={handleImageUploadSubmit} className='btn btn-primary btn-sm'>Upload</button> }                                
                            </div>
                        </div>                        
                    </div>
                    {images.length > 0 && 
                        <div className="card">
                        <div className="card-body">
                            <div className="row">
                                    {images.map((item, index) => {
                                        const prevURL = URL.createObjectURL(item);
                                        return(
                                        <div className="col-md-4" key={index}>
                                            <div className="previewImage shadow-sm">
                                                <img className='mw-100' src={prevURL} alt="" />
                                                <button onClick={() => handleImageDelete(item)} className='close'><i class='bx bx-x'></i></button>
                                            </div>
                                        </div>
                                        );
                                    })}                                    

                            </div>
                        </div>
                    </div>
                    }
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Files