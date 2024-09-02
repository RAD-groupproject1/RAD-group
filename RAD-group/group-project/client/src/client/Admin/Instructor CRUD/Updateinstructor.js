import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import '../Student CRUD/addstudent.css'
import axios from "axios";

function UpdateInstructor(){

    const navigate = useNavigate();

    const {id} = useParams();

    
    const [name, setName] = useState();
    const [NIC, setNIC] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [birthday, setBirthday] = useState();

    useEffect(()=>{
        axios.get('http://localhost:5000/addinstructor/getInstructor/'+id) 
        .then(result=>{console.log(result)
           
            setName(result.data.name);
            setNIC(result.data.NIC);
            setAddress(result.data.address);
            setPhone(result.data.phone);
            setEmail(result.data.email);
            setBirthday(result.data.birthday);
        })
        .catch(err=>console.log(err))
    },[id]);

    function update(e){
        e.preventDefault();
        axios.put("http://localhost:5000/addinstructor/"+id, {name, NIC, address,phone,email,birthday})
        .then(result => {
            console.log(result);
            navigate('/admin/instructor')
            
        })
        .catch(err=>console.log(err));
    }

    return(
        <div className="addstu">
            <div className="form">
            <form  onSubmit={update}>
                <h2>Update Instructor</h2>
                
                <div>
                    <label className="detail">Name:</label>
                    <input type="text" placeholder="Enter Name" style={{ width: '100%' }}
                        value={name}  onChange={(e) => setName(e.target.value)}
                    />
                </div><br />
                <div>
                    <label className="detail">NIC:</label>
                    <input type="text" placeholder="Enter NIC" style={{ width: '100%' }}
                        value={NIC} onChange={(e) => setNIC(e.target.value)}
                    />
                </div><br />
                <div>
                    <label className="detail">Address:</label>
                    <input type="text" placeholder="Enter Address" style={{ width: '100%' }}
                        value={address} onChange={(e) => setAddress(e.target.value)}
                    />
                </div><br />
                <div>
                    <label className="detail">Telephone Number:</label>
                    <input type="text" placeholder="Enter Telephone Number" style={{ width: '100%' }}
                        value={phone} onChange={(e) => setPhone(e.target.value)}
                    />
                </div><br />
                
                <div>
                    <label className="detail">Email:</label>
                    <input type="text" placeholder="Enter Email" style={{ width: '100%' }}
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div><br />
                <div>
                    <label className="detail">Birthday:</label>
                    <input type="text" placeholder="Enter Birthday" style={{ width: '100%' }}
                        value={birthday} onChange={(e) => setBirthday(e.target.value)}
                    />
                </div><br />
                <button className='submitStu'>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default UpdateInstructor;