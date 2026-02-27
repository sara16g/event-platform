export default function EventCard({
  title,
  city,
  price,
  image,
}: {
  title: string;
  city: string;
  price: number;
  image: string;
}) {
  return (
    <div
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h3>{title}</h3>
        <p>{city}</p>
        <p style={{ fontWeight: "bold" }}>{price}€ / jour</p>
      </div>
    </div>
  );
}