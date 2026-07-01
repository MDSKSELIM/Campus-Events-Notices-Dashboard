export default function ErrorState({ message }) {
  return (
    <div className="error-state">
      <p>Couldn't load this. {message ? `(${message})` : ""}</p>
      <p className="error-hint">Try refreshing the page.</p>
    </div>
  );
}
