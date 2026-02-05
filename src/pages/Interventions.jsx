import React from 'react';
import InterventionForm from '../components/InterventionForm';

export default function Interventions() {
  const handleSubmit = (payload) => {
    // For demo, simply alert the JSON payload. In a real app this would POST to the server.
    alert('Intervention submitted: ' + JSON.stringify(payload, null, 2));
  };

  return (
    <div className="container my-4">
      <h3 className="mb-3">Interventions</h3>
      <div className="row">
        <div className="col-md-8">
          <div className="card p-3">
            <InterventionForm onSubmit={handleSubmit} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h6>Recent Interventions</h6>
            <p className="text-muted">No recent interventions in demo data.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
