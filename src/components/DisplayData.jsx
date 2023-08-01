export default function Character({ character }) {
    console.log(character);
    return character.map((character) => {
      return (
        <p>
          character: {character.character}
          <br />
          date: {character.date}
        </p>
      );
    });
  }