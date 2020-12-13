export default function Gig({ date, description, title }) {
  return (
    <div className="shadow mb-8 p-4 rounded-2xl">
      <p className="text-gray-500 text-sm" style={{ margin: 0 }}>
        {date}
      </p>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      <p style={{ margin: 0 }}>{description}</p>
    </div>
  );
}
