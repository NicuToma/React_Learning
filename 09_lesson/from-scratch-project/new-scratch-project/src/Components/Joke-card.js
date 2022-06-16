export default function Joke(props) {
  return (
    <div className="joke-content">
      <h5>{props.setup}</h5>
      <h5>{props.punchline}</h5>
    </div>
  );
}
