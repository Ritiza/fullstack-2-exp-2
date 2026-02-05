import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import students from '../data/students';

export default function StudentDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const s = students.find(x => x.id === id);
  if (!s) return <div className="container my-4">Student not found</div>;

  return (
    <div className="container my-4">
      <Button variant="outlined" onClick={() => nav(-1)} sx={{ mb: 2 }}>Back</Button>
      <Card>
        <CardContent>
          <Typography variant="h5">{s.name}</Typography>
          <Typography color="text.secondary">{s.department}</Typography>

          <div className="d-flex flex-wrap gap-3 mt-3">
            <Typography><strong>Risk score:</strong> {s.riskScore}</Typography>
            <Chip label={s.riskLevel} color={s.riskLevel === 'High' ? 'error' : (s.riskLevel === 'Medium' ? 'warning' : 'success')} />
          </div>

          <div className="mt-3">
            <Typography variant="subtitle1">Risk Factors</Typography>
            <ul>
              {s.riskFactors.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>

          <div className="mt-2">
            <Typography variant="subtitle1">Last Intervention</Typography>
            <Typography variant="body2">{s.lastIntervention.date} — {s.lastIntervention.notes}</Typography>
          </div>

          <div className="mt-4 d-flex gap-2">
            <Button variant="contained">Add Intervention</Button>
            <Button variant="outlined">Mark Reviewed</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
