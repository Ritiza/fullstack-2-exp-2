import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import students from '../data/students';

export default function InterventionForm({ onSubmit }) {
  const [studentId, setStudentId] = useState(students[0]?.id || '');
  const [riskType, setRiskType] = useState('Academic');
  const [notes, setNotes] = useState('');
  const [action, setAction] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentId || !riskType) return;
    const payload = { studentId, riskType, notes, action };
    if (onSubmit) onSubmit(payload);
    setNotes(''); setAction('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField select label="Student" value={studentId} onChange={(e) => setStudentId(e.target.value)}>
        {students.map(s => <MenuItem key={s.id} value={s.id}>{s.name}</MenuItem>)}
      </TextField>

      <TextField select label="Risk Type" value={riskType} onChange={(e) => setRiskType(e.target.value)}>
        <MenuItem value="Academic">Academic</MenuItem>
        <MenuItem value="Attendance">Attendance</MenuItem>
        <MenuItem value="Behavioral">Behavioral</MenuItem>
      </TextField>

      <TextField label="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} multiline rows={3} />
      <TextField label="Action Taken" value={action} onChange={(e) => setAction(e.target.value)} />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="submit" variant="contained">Submit</Button>
      </Box>
    </Box>
  );
}
