import React, { useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

function AddStream() {
    const [data, setData] = useState({})
    const [ loading, setLoading] = useState(false);
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
    const createStream = async ()=>{
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
            const req  = await axios.post('http://localhost:5000/api/school/stream',data);
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
        <Form.Control type="text" name="name" onChange={handleChange} placeholder="Stream Name" required/>
      </Form.Group>      

      
      
      {loading ? (
            <Spinner />
        ):(
            error.status ? (
                <Button variant="primary" type="submit" disabled>
                    Create
                </Button>
            ):(
                <Button variant="primary" type="submit" onClick={createStream}>
                    Create
                </Button>
            )
            
        )}     
    </Form>
  );
}

export default AddStream;