import React from "react";

const sample = [
  { id: 1, title: "Card One", text: "This is the first card." },
  { id: 2, title: "Card Two", text: "This is the second card." },
  { id: 3, title: "Card Three", text: "This is the third card." },
  { id: 4, title: "Card Four", text: "This is the fourth card." },
  { id: 5, title: "Card Five", text: "This is the fifth card." },
  { id: 6, title: "Card Six", text: "This is the sixth card." },
];

export default function Experiment2Cards() {
  return (
    <div className="container my-4">
      <h5 className="mb-3">Bootstrap Card Layout</h5>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {sample.map((c) => (
          <div className="col" key={c.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h6 className="card-title">{c.title}</h6>
                <p className="card-text">{c.text}</p>
                <button className="btn btn-outline-primary btn-sm">Action</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
