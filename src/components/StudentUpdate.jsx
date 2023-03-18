import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


//form update 

export default function StudentUpdate(props) {
    const {id} = useParams();
    let history = useNavigate()

    const [student, setStudent] = useState({
        name: "",
        age: "",
    
    })

    useEffect(() => {
        fetchStudentList();
        console.log("listStudent");
    },[])

    const {name, age} = student;

    const handleChange = (event) => {
        setStudent({...student,[event.target.id] : event.target.value})
        console.log(student);
    }

    let url = "http://localhost:8080/";

    const submitForm = async (e) => {
        e.preventDefault();
        console.log(student);
        await axios.put(`${url}update/${id}`, student)
            .then((result) => {
                console.log(result);
                history("/");
            })
    }

    let fetchStudentList = async () => {
        await axios.get(url + 'detail/' + id).then((res) => {
            const students = res.data;
            console.log(students);
            setStudent( students );
            console.log(student);
        })
    };



    return (
        <div className="container text-center mt-3 mb-5">
            <h3 className="bg-warning text-primary- p-2">
                EDIT STUDENT
            </h3>
            <form className="form card p-3 bg-light" onSubmit={(e) => {submitForm(e)}}>
                <label className="form-label h5 text-succes">Student Name</label>
                
                <input type="text" className="form-control" id="name" value={name} minLength="3" maxLength="20" required onChange={(e)=>handleChange(e)}  />

                <label className="form-label h5 text-succes">Student Age</label>
                <input type="text" className="form-control" id="age" value={age} min="18" max="25" required onChange={(e)=>handleChange(e)}/>

                <div className="text-center">
                    
                    <button type="submit" className="btn btn-primary mt-3 col-md-3">Add Student</button>
                </div>
            </form>
        </div>
    )
}