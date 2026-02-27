/*export default function Header() {
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
}*/
export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#0f172a",
        color: "white",
      }}
    >
      {/* LOGO */}
      <h2>🎉 Event Platform</h2>

      {/* NAVIGATION */}
      <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <a href="/spaces" style={{ color: "white" }}>Espaces</a>
        <a href="/equipment" style={{ color: "white" }}>Matériel</a>

        {/* BOUTON PRO */}
        <a
          href="/pro"
          style={{
            padding: "8px 15px",
            border: "1px solid white",
            borderRadius: "20px",
            color: "white",
          }}
        >
          Je suis un professionnel
        </a>

        {/* CONNEXION */}
        <a
          href="/login"
          style={{
            padding: "8px 15px",
            background: "#22c55e",
            borderRadius: "20px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Se connecter
        </a>
      </nav>
    </header>
  );
}