import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";



export default class StudentList extends React.Component {
    state = {
        students: []
    };

    url = "http://localhost:8080/";

    componentDidMount() {
        this.fetchStudentList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.reloadList !== prevProps.reloadList) {
            this.fetchStudentList();
        }
    }

    fetchStudentList = () => {
        axios.get(this.url).then((res) => {
            const students = res.data;
            this.setState({ students });
        })
    };

    deleteRow = (id) => {
        axios.delete(`${this.url}delete/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                const students = this.state.students.filter(item => item.id !== id);
                this.setState({ students })
            })
    }


    render() {
        return (
            <div className="container text-center mt-3">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th colSpan="4" className="h3 text text-danger bg-warning">STUDENT LIST</th>
                        </tr>
                        <tr className="h5 text-success">
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">AGE</th>
                            <th scope="col">MORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students
                            .map(student => {
                                return (
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.age}</td>
                                        <td>
                                            <Link to={"/update/" + student.id  } className="btn btn-primary">EDIT</Link>
                                            

                                            <button className="btn btn-danger" onClick={() => { this.deleteRow(student.id) }}>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}