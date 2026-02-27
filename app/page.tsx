export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🎉 Plateforme Événementielle</h1>

      <p>Bienvenue sur notre plateforme de location d'espaces et de matériel événementiel.</p>

      <div style={{ marginTop: "30px" }}>
        <button style={{ marginRight: "10px", padding: "10px 20px" }}>
          Trouver un espace
        </button>

        <button style={{ padding: "10px 20px" }}>
          Louer mon espace
        </button>
      </div>
    </main>
  );
}