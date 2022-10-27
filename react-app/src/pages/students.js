import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import StudentTable from '../components/student-table'
import { Link } from 'react-router-dom'
import ConfirmDeleteModal from '../components/confirmModal'

import EditStudentModal from '../components/editStudentModal'


const Students = () =>{
    const [students, setStudents] = useState([])
    const [loading, setLoading]= useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [delId, setDeleteId] = useState(null)
    const [editObject, setEditObect] = useState({})
    const [editModal, setEditModal] = useState(false)
    const [streams, setStreams] = useState([])
     
    const [error, setError]= useState({
        status:false,
        message:''
    });

    const handleEditModal = (e)=>{
        setEditObect({
            ...editObject,
            [e.target.name]:e.target.value
        })
    }

    const [success, setSuccess]= useState({
        status:false,
        message:''
    });

    const getStudents = async () => {
        try{
            setLoading(true)
            setError({
                status:false,
                message:''
            })
            const { data } = await axios.get('http://localhost:5000/api/school/students/');
            if(data.length){
                setStudents(data)
                setLoading(false)
            }else{
                setLoading(false)
                setError({
                    status:true,
                    message:'Student data not available'
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

    const confirmDelete = async ()=>{
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
            const data = await axios.delete(`http://localhost:5000/api/school/students/${delId}`);
            if(data){ 
                setSuccess({
                    status:true,
                    message:'Request completed successfully'
                })
                setDeleteModal(false)
                getStudents()
            }else{
                setLoading(false)
                setError({
                    status:true,
                    message:'Unable to delete students'
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

    useEffect(()=>{
        getStudents()
        getStreams()
    },[])
    return(
        <div>    
                <Link to='/add-student'>Add student</Link>

                {success.status ? (
                    <Alert variant="success">
                        {success.message}
                    </Alert>
                ):null}
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
                    <StudentTable students={students} setDeleteId={setDeleteId} setDeleteModal={setDeleteModal} setEditModal={setEditModal} setEditObect={setEditObect} streams={streams}/>
                ))}
            { deleteModal ? <ConfirmDeleteModal confirmDelete={confirmDelete} deleteModal={deleteModal} setDeleteModal={setDeleteModal}/> : null}
            { editModal ? <EditStudentModal editModal={editModal} handleEditModal={handleEditModal} editObject={editObject} setEditModal={setEditModal}/> : null}
        </div>
    )
}
export default Students