import SearchBar from "./components/SearchBar";
import EventCard from "./components/EventCard";
export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          height: "90vh",
          backgroundImage:
            "url('/event.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
          {/*<SearchBar />*/}

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
            🔍
          </button> 
          <SearchBar />
        </div>
      </section>
      
      {/* CARTES */}
      <section style={{ padding: "40px" }}>
     <h2>Espaces populaires</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    }}
  >
    <EventCard
      title="Salle de mariage"
      city="Paris"
      price={500}
      image="https://images.unsplash.com/photo-1529634892075-9f7d1e63d4b5"
    />

    <EventCard
      title="Loft événementiel"
      city="Lyon"
      price={300}
      image="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    />

    <EventCard
      title="Jardin extérieur"
      city="Marseille"
      price={200}
      image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    />
  </div>
      </section>

    </main>
  );
}