"use client";

import { useState } from "react";

export default function FormPage() {
  const [formData] = useState({
    name: "",
    email: "",
  });

  const [valid, setValid] = useState(false);
  const [valid2, setValid2] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h1>Settings</h1>
      <form>
        <fieldset>
          <label>
            <input
              name="terms"
              type="checkbox"
              role="switch"
              onChange={(e) => setValid(e.target.checked)}
              defaultChecked={valid}
            />
            First Form Valid
          </label>
          <label>
            <input
              name="opt-in"
              type="checkbox"
              role="switch"
              onChange={(e) => setValid2(e.target.checked)}
              defaultChecked={valid2}
            />
            Second Form Valid
          </label>
        </fieldset>
      </form>

      <h1> Basic Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid">
          <label>
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              aria-invalid={!valid}
            />
            {valid && <small>Thank you for submitting!</small>}
            {!valid && <small>There was an error submitting the form.</small>}
          </label>

          <label>
            E-Mail
            <input
              type="email"
              id="email"
              name="email"
              aria-invalid={!valid2}
            />
            {valid2 && <small>Thank you for submitting!</small>}
            {!valid2 && <small>There was an error submitting the form.</small>}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
