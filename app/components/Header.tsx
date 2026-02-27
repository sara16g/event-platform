export default function Header() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      background: "#0f172a",
      color: "white"
    }}>
      <h2>🎉 Event Platform</h2>

      <nav>
        <a href="/" style={{ marginRight: "15px", color: "white" }}>Accueil</a>
        <a href="/spaces" style={{ marginRight: "15px", color: "white" }}>Espaces</a>
        <a href="/equipment" style={{ marginRight: "15px", color: "white" }}>Matériel</a>
        <a href="/login" style={{ color: "white" }}>Connexion</a>
      </nav>
    </header>
  );
}