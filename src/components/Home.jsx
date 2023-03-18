import StudentAdd from "./StudentAdd";
import StudentList from "./StudentList";
import React, { useState } from "react";


export default function Home() {
    const [reloadList, setReloadList] = useState(false);

  const handleReloadList = () => {
    setReloadList(!reloadList);
  }
    return (
        <div className="container text-center card mt-3">
            <div className="row">
                <div className="col">
                    <StudentAdd reloadStudentList={handleReloadList} />
                </div>
                <div className="col">
                    <StudentList reloadList={reloadList} />
                </div>
            </div>
        </div>
    )
}