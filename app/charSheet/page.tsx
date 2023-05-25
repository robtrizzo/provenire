import CharacterSheet from './CharacterSheet';

export default function Home() {
  return (
    <div
      className="App flex w-full h-full flex-col relative items-center justify-start"
      style={{ backgroundColor: '#242424' }}
    >
      <CharacterSheet />
      <footer></footer>
    </div>
  );
}
