import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import StreamTable from '../components/stream-table'
import { Link } from 'react-router-dom'
import StreamsModal from '../components/streamsmodal'



const Streams = () =>{
    const [streams, setStreams] = useState([])
    const [loading, setLoading]= useState(false);
    const [show, setShow] = useState(false);
    const [studentData, setStudentData]= useState([])
    const [error, setError]= useState({
        status:false,
        message:''
    });

    const [modalerror, setModalError]= useState({
        status:false,
        message:''
    })

    const getStreams = async () => {
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

    const seeModal =async(id)=>{
        try{
            setLoading(true)
            setError({
                status:false,
                message:''
            })
            const { data } = await axios.get(`http://localhost:5000/api/school/stream-students/${id}`);
            if(data.length){
                setStudentData(data)
                setLoading(false)
                setShow(true)
            }else{
                setLoading(false)
                setModalError({
                    status:true,
                    message:'Unable to fetch streams students'
                })
            }
        }
        catch(error){
            setLoading(false)
            setModalError({
                status:true,
                message:error.message
            })
        }
    }

    useEffect(()=>{
        getStreams()
    },[])
    return(
        <div>           
        <Link to='/add-stream'>Add stream</Link>
            {modalerror.status ? (
                <Alert variant="danger">
                    {modalerror.message}
                </Alert>
            ) : null}

            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ):(
                error.status ? (
                    <Alert variant="danger">
                        {error.message}
                    </Alert>
                ):(
                    <StreamTable streams={streams} seeModal={seeModal}/>
                ))}
            {modalerror.status  ? null : <StreamsModal studentData={studentData} show={show} setShow={setShow}/>}
            
        </div>
    )
}
export default Streams