export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "900px",
        margin: "60px auto",
        padding: "20px"
      }}
    >
      <h1>AI Discovery Scanner</h1>

      <p>
        Analyze any website for AI Discovery, structured data,
        semantic architecture, and technical implementation.
      </p>

      <input
        placeholder="https://example.com"
        style={{
          width: "100%",
          padding: "16px",
          fontSize: "16px",
          marginTop: "30px"
        }}
      />

      <button
        style={{
          marginTop: "20px",
          padding: "14px 30px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Scan Website
      </button>
    </main>
  );
}
