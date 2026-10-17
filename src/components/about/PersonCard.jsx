// ukf/src/components/about/PersonCard.jsx

export default function PersonCard({
  image,
  name,
  role,
  description,
  color = "blue",
  descriptionWidth = "wide",
}) {
  return (
    <article className="board-member-card">
      <img
        className="board-member-image"
        src={image}
        alt={`Portrett av ${name}`}
        loading="lazy"
      />

      <div className="board-member-content">
        <div className="board-member-header">
          <div className={`board-member-name board-member-name--${color}`}>
            {name}
          </div>

          <div className={`board-member-role board-member-role--${color}`}>
            {role}
          </div>
        </div>

        <p
          className={`board-member-description board-member-description--${color} board-member-description--${descriptionWidth}`}
        >
          {description}
        </p>
      </div>
    </article>
  );
}