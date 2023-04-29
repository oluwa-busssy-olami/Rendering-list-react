function Button({ onButtonClick, children }) {
  return <button onClick={onButtonClick}> {children} </button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onButtonClick={handlePlayClick}> Play "{movieName}" </Button>;
}

function UploadButton() {
  //anonymous function
  return (
    <Button onButtonClick={() => alert("Uploading!")}> Upload Image </Button>
  );
}

export default function Buttons() {
  return (
    <div>
      <PlayButton movieName="Creed 111" />
      <UploadButton />
    </div>
  );
}
