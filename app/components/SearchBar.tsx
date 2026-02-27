export default function SearchBar() {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "50px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      {/* TYPE */}
      <div>
        <p style={{ fontSize: "12px", color: "gray" }}>Vous souhaitez</p>
        <select>
          <option>Réserver un lieu</option>
          <option>Louer du matériel</option>
        </select>
      </div>

      {/* VILLE */}
      <div>
        <p style={{ fontSize: "12px", color: "gray" }}>Localisation</p>
        <input placeholder="Paris, Lyon..." />
      </div>

      {/* TYPE EVENT */}
      <div>
        <p style={{ fontSize: "12px", color: "gray" }}>Type</p>
        <select>
          <option>Mariage</option>
          <option>Anniversaire</option>
          <option>Entreprise</option>
        </select>
      </div>

      {/* BUTTON */}
      <button
        style={{
          background: "#22c55e",
          color: "white",
          padding: "15px 25px",
          borderRadius: "30px",
          border: "none",
          cursor: "pointer",
        }}
      >
        🔍 Rechercher
      </button>
    </div>
  );
}