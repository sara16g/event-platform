export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          height: "90vh",
          backgroundImage:
            "url('/planner event.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>
          La plateforme événementielle
        </h1>

        <p style={{ fontSize: "20px", marginTop: "10px" }}>
          Louez des espaces et du matériel en quelques clics
        </p>

        {/* SEARCH BAR */}
        <div
          style={{
            marginTop: "30px",
            background: "white",
            padding: "15px",
            borderRadius: "50px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            maxWidth: "700px",
          }}
        >
          <input
            placeholder="Que cherchez-vous ?"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
            }}
          />

          <input
            placeholder="Ville"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
            }}
          />

          <button
            style={{
              background: "#22c55e",
              border: "none",
              padding: "10px 20px",
              borderRadius: "30px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Rechercher
          </button>
        </div>
      </section>
    </main>
  );
}