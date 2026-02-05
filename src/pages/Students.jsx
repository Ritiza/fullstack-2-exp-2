import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import students from '../data/students';

function riskChip(level) {
  if (level === 'High') return <Chip label="High" color="error" />;
  if (level === 'Medium') return <Chip label="Medium" sx={{ bgcolor: '#ff9800', color: '#fff' }} />;
  return <Chip label="Low" color="success" />;
}

export default function Students() {
  return (
    <div className="container my-4">
      <h3 className="mb-3">Students</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Attendance %</th>
              <th>Grades</th>
              <th>Risk Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.department}</td>
                <td>{s.attendance}%</td>
                <td>{s.grades}</td>
                <td>{riskChip(s.riskLevel)}</td>
                <td>
                  <Link className="btn btn-sm btn-primary" to={`/students/${s.id}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
