export default function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "white",
        borderRadius: "50px",
        padding: "15px 20px",
        width: "100%",
        maxWidth: "900px",
        marginTop: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        gap: "20px",
      }}
    >
      {/* TYPE */}
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: "12px", margin: 0 }}>Vous souhaitez</p>
        <select style={{ border: "none", fontSize: "14px" }}>
          <option>Réserver une activité</option>
          <option>Louer une salle</option>
          <option>Louer du matériel</option>
        </select>
      </div>

      {/* LOCALISATION */}
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: "12px", margin: 0 }}>Localisation</p>
        <input
          type="text"
          placeholder="Où recherchez-vous ?"
          style={{ border: "none", fontSize: "14px", width: "100%" }}
        />
      </div>

      {/* SPORT / TYPE */}
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: "12px", margin: 0 }}>Type</p>
        <select style={{ border: "none", fontSize: "14px" }}>
          <option>Tous</option>
          <option>Événement</option>
          <option>Matériel</option>
        </select>
      </div>

      {/* BOUTON */}
      <button
        style={{
          background: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        🔍
      </button>
    </div>
  );
}