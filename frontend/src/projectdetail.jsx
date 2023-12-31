import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function projectdetail() {
  const {id} = useParams();
  const navigate = useNavigate()
  const [employee, setEmployee] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:8081/get/'+id)
    .then(res =>setEmployee(res.data.Result[0]))
    .catch(err => console.log(err));
  })
  const handleDelete = () =>{
    axios.get('http://localhost:8081/logout')
    .then(res => {
        navigate('/start')
    }).catch(err => console.log(err));
}

  return (
    <div>
        <div className="d-flex justify-content-center flex-column align-items-center mt-3">
            <img src={`http://localhost:8081/images/`+employee.image} alt="" className='empImg'/>
            <div className="d-flex align-items-center flex-column mt-5">
                <h3>Project Assigned: {employee.name} </h3>
                <h3>Email:{employee.email}</h3>
                <h3>Salary:{employee.salary}</h3>
            </div>
            <div>
                <button className="btn btn-primary me-2">Edit</button>
                <button className="btn btn-danger" onClick={handleDelete}>Logout</button>
            </div>
        </div>
      
    </div>
  )
}

export default projectdetail
