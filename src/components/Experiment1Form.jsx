import React, { useState } from "react";

export default function Experiment1Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}`);
    setName("");
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <div className="card shadow-sm" style={{ maxWidth: 420, width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">Bootstrap Form UI</h5>
          <p className="card-text">Centered card with an input field and submit button.</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
