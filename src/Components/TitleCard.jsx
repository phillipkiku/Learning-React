function TitleCard({ link, title, description }) {
  return (
    <div>
      <img src={link} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TitleCard;