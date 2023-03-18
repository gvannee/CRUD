import axios from "axios";
import React from "react";


export default class StudentAdd extends React.Component {
    state = {
        name: '',
        age: ''
    }

    url = "http://localhost:8080/"

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        event.target.reset();
        this.setState({
            name: '',
            age: ''
        })

        const student = {
            name: this.state.name,
            age: this.state.age
        }

        axios.post(this.url + 'add', student)
            .then((res) => {
                console.log(res);
                this.props.reloadStudentList();
            })
    }



    render() {
        return (
            <div className="container text-center mt-3 mb-5">
                <h3 className="bg-warning text-primary- p-2">
                    ADD NEW STUDENT
                </h3>
                <form className="form card p-3 bg-light" onSubmit={this.handleSubmit}>
                    <label className="form-label h5 text-succes">Student Name</label>
                    <input type="text" className="form-control" id="name" value={this.state.name} minLength="3" maxLength="20" required onChange={this.handleChange} />

                    <label className="form-label h5 text-succes">Student Age</label>
                    <input type="text" className="form-control" id="age" value={this.state.age} min="18" max="25" required onChange={this.handleChange} />

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-3 col-md-3">Add Student</button>
                    </div>
                </form>
            </div>
        )
    }

}