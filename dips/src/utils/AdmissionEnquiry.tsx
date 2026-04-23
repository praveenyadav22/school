"use client";

import { useState, FormEvent } from "react";

const CLASSES = [
  "Pre-School","Pre-Primary","Grade I","Grade II","Grade III",
  "Grade IV","Grade V","Grade VI","Grade VII","Grade VIII","Grade IX","Grade XI",
];

export default function AdmissionEnquiry() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", cls:"", address:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="enquiry-box">
        <h2>Admission Enquiry</h2>
        <p style={{ color: "#3db166", fontSize: 18 }}>✓ Thank you! We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="enquiry-box">
      <h2>Admission Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <label>Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your full name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="col-sm-6">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="Enter your email address" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="col-sm-6" style={{ marginTop: 25 }}>
            <label>Phone Number</label>
            <input type="text" className="form-control" placeholder="Enter 10-digit mobile number" name="phone" maxLength={10}
              value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value.replace(/[^0-9]/g,"") }))} />
          </div>
          <div className="col-sm-6" style={{ marginTop: 25 }}>
            <label>Select Class</label>
            <select className="form-control" name="cls" value={form.cls} onChange={handleChange}>
              <option value="">Choose a Class</option>
              {CLASSES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="col-sm-12" style={{ marginTop: 25 }}>
            <label>Your Address</label>
            <textarea className="form-control" rows={1} placeholder="Enter your complete address" name="address" value={form.address} onChange={handleChange} />
          </div>
          <div className="col-sm-12" style={{ marginTop: 25 }}>
            <label>Your Message</label>
            <textarea className="form-control" rows={3} placeholder="Write your message here..." name="message" value={form.message} onChange={handleChange} />
          </div>
          <div className="col-sm-12" style={{ marginTop: 35 }}>
            <button type="submit" className="btn-submit">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}
