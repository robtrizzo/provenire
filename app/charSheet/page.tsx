import CharacterSheet from './CharacterSheet';
// import './App.css';

export default function Home() {
  return (
    <div
      className="App flex w-full h-full flex-col relative items-center justify-start"
      style={{ backgroundColor: '#242424' }}
    >
      <header className="App-header">
        <h1>PTBA + Disco Elysium = ???</h1>
      </header>
      <CharacterSheet />
      <footer></footer>
    </div>
  );
}
