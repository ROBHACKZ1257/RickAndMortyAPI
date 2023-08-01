import rick_morty from "../images/Rick-And-Morty-Logo.png";

export default function Header() {
  return (
    <div className="navbar navbar-dark bg-primary">
      <img src={rick_morty} alt="Rick and Morty Logo" width="400px" />
    </div>
  );
}