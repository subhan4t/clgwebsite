import React from 'react';
import Footer from './footer.jsx';
import './Dept.css'

const DeptComponent = () => (
    <>
        <div className="topic">
            <h2>Departments</h2>
        </div>
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>Student Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AI/DS</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>AI/ML</td>
                        <td>180</td>
                    </tr>
                    <tr>
                        <td>CSE</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>IT</td>
                        <td>190</td>
                    </tr>
                    <tr>
                        <td>ECE</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>EEE</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>Mechanical</td>
                        <td>100</td>
                    </tr>
                    {/* Add more departments as needed */}
                </tbody>
            </table>
        </div>
        <Footer/>
    </>
);

export default DeptComponent;
