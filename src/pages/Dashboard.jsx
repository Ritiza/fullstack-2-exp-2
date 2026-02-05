import React from "react";
import { Box, Card, CardContent, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningIcon from '@mui/icons-material/Warning';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import students from '../data/students';

function SummaryCard({ title, value, color, icon }) {
  return (
    <Card sx={{ minWidth: 180 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
            <Typography variant="h5" sx={{ color }}>{value}</Typography>
          </Box>
          <Box sx={{ fontSize: 36, color: color }}>{icon}</Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const total = students.length;
  const high = students.filter(s => s.riskLevel === 'High').length;
  const medium = students.filter(s => s.riskLevel === 'Medium').length;
  const low = students.filter(s => s.riskLevel === 'Low').length;

  return (
    <div className="container my-4">
      <h3 className="mb-3">Dashboard</h3>
      <div className="row g-3">
        <div className="col-12 col-sm-6 col-md-3">
          <SummaryCard title="Total Students" value={total} color="#1976d2" icon={<TrendingUpIcon />} />
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <SummaryCard title="High Risk" value={high} color="#d32f2f" icon={<WarningIcon />} />
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <SummaryCard title="Medium Risk" value={medium} color="#ed6c02" icon={<ReportProblemIcon />} />
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <SummaryCard title="Low Risk" value={low} color="#2e7d32" icon={<CheckCircleIcon />} />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-muted">Overview of student risk distribution. Use the Students page for details.</p>
      </div>
    </div>
  );
}
