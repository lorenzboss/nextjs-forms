export default function DemoForm() {
  return (
    <div>
      <h1>Plan Form</h1>
      <label>Gender </label>
      <fieldset>
        <input type="radio" id="male" name="gender" />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" />
        <label htmlFor="female">Female</label>
        <input type="radio" id="other" name="gender" />
        <label htmlFor="other">Other</label>
      </fieldset>

      <label>
        First Name <input></input>
      </label>
      <label>
        Last Name <input></input>
      </label>
      <label>
        Email <input></input>
      </label>
      <label>
        Phone <input></input>
      </label>
      <label>
        Street <input></input>
      </label>
      <label>
        House Number <input></input>
      </label>
      <label>
        City <input></input>
      </label>
      <label>
        Zip <input></input>
      </label>
      <label>
        State <input></input>
      </label>

      <label>
        Password <input></input>
      </label>
      <label>
        Confirm Password <input></input>
      </label>
      <label>
        <input type="checkbox" role="switch"></input> I agree to the terms and
        conditions
      </label>
      <button>Submit</button>
    </div>
  );
}
