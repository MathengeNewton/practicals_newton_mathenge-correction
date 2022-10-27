import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { redirect } from "react-router-dom";

function AddStudent() {
    const [data, setData] = useState({})
    const [ loading, setLoading] = useState(false);
    const [streams, setStreams ] = useState([])
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const [error, setError]= useState({
        status:false,
        message:''
    });

    const [success, setSuccess]= useState({
        status:false,
        message:''
    });

    const getStreams = async ()=>{
        try{
            setLoading(true)
            setError({
                status:false,
                message:''
            })
            const { data } = await axios.get('http://localhost:5000/api/school/streams/');
            if(data.length){
                setStreams(data)
                setLoading(false)
            }else{
                setLoading(false)
                setError({
                    status:true,
                    message:'Unable to fetch streams'
                })
            }
        }
        catch(error){
            setLoading(false)
            setError({
                status:true,
                message:error.message
            })
        }
    }

    const createStudent = async ()=>{
        try{
            setLoading(true)
            setError({
                status:false,
                message:''
            })
            setSuccess({
                status:false,
                message:''
            })
            const req  = await axios.post('http://localhost:5000/api/school/student',data);
            if(req.status === 200){
                setSuccess({
                    status:true,
                    message:'Created Successfully'
                })
            }else{
                setLoading(false)
                setError({
                    status:true,
                    message:'Unable to create student'
                })
            }
        }
        catch(error){
            setLoading(false)
            setError({
                status:true,
                message:error.message
            })
        }
    }

    useEffect(()=>{getStreams()},[])
    
  return (
    <Form onSubmit={(e)=>e.preventDefault()}>  
    {error.status ? (
        <Alert variant="danger">
            {error.message}
        </Alert>
    ):null}  
    {success.status ? (
        <Alert variant="success">
            {success.message}
        </Alert>
    ):null}

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleChange} placeholder="Students Name" required/>
      </Form.Group>      

      <Form.Group className="mb-3">
        <Form.Label>Streams</Form.Label>
        <Form.Select name="stream" onChange={handleChange} required>
          <option value="">select</option>
          {streams && streams.map(stream =>(
            <option value={stream.id}>{stream.name}</option>
          ))}
        </Form.Select>
      </Form.Group>
      
      {loading ? (
            <Spinner />
        ):(
            error.status ? (
                <Button variant="primary" type="submit" disabled>
                    Create
                </Button>
            ):(
                <Button variant="primary" type="submit" onClick={createStudent}>
                    Create
                </Button>
            )
            
        )}     
    </Form>
  );
}

export default AddStudent;