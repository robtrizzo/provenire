import { useState } from 'react';
import baseAbilities from './data/abilities.json';
import './App.css';

function App() {
  const [abilities, setAbilities] = useState(baseAbilities);
  const handleAbilityScoreChange = (
    category: string,
    ability: string,
    newScore: number
  ) => {
    const newAbilities = abilities.map((cat) => {
      if (cat.category === category) {
        return {
          ...cat,
          abilities: cat.abilities.map((ab) => {
            if (ab.name === ability) {
              return {
                ...ab,
                score: newScore,
              };
            }
            return ab;
          }),
        };
      }
      return cat;
    });
    setAbilities(newAbilities);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>PTBA + Disco Elysium = ???</h1>
      </header>
      <main>
        <article className="abilities-article">
          {abilities.map(({ category, abilities, score }) => (
            <section key={`category-${category}`} className="abilities-row">
              <div className={`ability-category ability-category-${category}`}>
                <h3>{category}</h3>
                <h4 className="category-score">{score}</h4>
              </div>
              {abilities.map(({ name, score }) => (
                <div
                  key={`ability-${name}`}
                  className={`ability ability-category-${category}`}
                >
                  <h4 className="ability-name">{name}</h4>
                  <div className="ability-score-section">
                    <h5
                      className="ability-score ability-score-button"
                      onClick={() => {
                        handleAbilityScoreChange(
                          category,
                          name,
                          Math.max(score - 1, -2)
                        );
                      }}
                    >
                      -
                    </h5>
                    <h5 className="ability-score">{score}</h5>
                    <h5
                      className="ability-score ability-score-button"
                      onClick={() => {
                        handleAbilityScoreChange(
                          category,
                          name,
                          Math.min(score + 1, 3)
                        );
                      }}
                    >
                      +
                    </h5>
                  </div>
                </div>
              ))}
            </section>
          ))}
        </article>
        <aside></aside>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
