import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>This is a simple page styled with PicoCSS.</p>
      <section>
        {" "}
        <Image src="/image.png" alt="Sample Image" width={600} height={400} />
      </section>
      <section className="grid">
        <button className="">Click Me</button>
        <button className="secondary">Click Me To!</button>
        <button className="contrast">And Click Me To!</button>
      </section>
      <div role="group">
        <button className="outline">Click Me</button>
        <button className="outline secondary">Click Me To!</button>
        <button className="outline contrast">And Click Me To!</button>
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button className="">Click Me</button>
        <button className="secondary">Click Me To!</button>
        <button className="contrast">And Click Me To!</button>
      </div>

      <fieldset></fieldset>

      <p>1. This is a paragraph!</p>
      <p>2. This is a paragraph!</p>
      <p>3. This is a paragraph!</p>
      <p>4. This is a paragraph!</p>
      <code>print("Hello World!");</code>
    </div>
  );
}
