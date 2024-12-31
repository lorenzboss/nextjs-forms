export default function TestPage() {
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <article>
        <header>Hello</header>
        <p>This is my Body!</p>
        <p>Do you think this looks good?</p>
        <section>
          <p className="success">This is a success message!</p>
          <p className="warning">This is a warning message!</p>
          <p className="error">This is an error message!</p>
          <p className="info">This is an info message!</p>
        </section>
      </article>
    </div>
  );
}
