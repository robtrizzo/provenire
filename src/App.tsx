import { useState } from 'react';
import baseAbilities from './data/abilities.json';
import './App.css';

function App() {
  const [abilities, setAbilities] = useState(baseAbilities);
  const handleAbilityScoreChange = (
    category: string,
    ability: string,
    newRanks: number
  ) => {
    let oldRanks;
    const newAbilities = abilities.map((cat) => {
      if (cat.category === category) {
        return {
          ...cat,
          abilities: cat.abilities.map((ab) => {
            if (ab.name === ability) {
              oldRanks = ab.ranks;
              console.log(`setting ${ability} from ${oldRanks} to ${newRanks}`);
              return {
                ...ab,
                ranks: newRanks,
              };
            }
            return ab;
          }),
        };
      }
      return cat;
    });
    setAbilities(newAbilities);
    handleCategoryChange(newAbilities, category, newRanks, oldRanks || 0);
  };

  const handleCategoryChange = (
    abilities: any,
    category: string,
    newRanks: number,
    oldRanks: number
  ) => {
    console.log('category change', category, oldRanks, newRanks);
    if (newRanks > oldRanks) {
      let catIncrease = false;
      console.log('new score > old score');
      const newAbilities = abilities.map((cat) => {
        if (cat.category === category) {
          let newCategoryProgress = cat.progress + 1;
          console.log('newCategoryProgress', newCategoryProgress);
          if (newCategoryProgress >= 3 + cat.score) {
            catIncrease = true;
            return {
              ...cat,
              progress: 0,
            };
          }
          return {
            ...cat,
            progress: cat.progress + 1,
          };
        }
        return cat;
      });
      setAbilities(newAbilities);
      if (catIncrease) {
        handleCategoryIncrease(newAbilities, category);
      }
    } else if (newRanks < oldRanks) {
      let catDecrease = false;
      const newAbilities = abilities.map((cat) => {
        if (cat.category === category) {
          let newCategoryProgress = cat.progress - 1;
          console.log('newCategoryProgress', newCategoryProgress);
          if (newCategoryProgress < 0) {
            console.log('decrease category');
            catDecrease = true;
            return {
              ...cat,
              progress: 3 + cat.score - 2,
            };
          }
          return {
            ...cat,
            progress: cat.progress - 1,
          };
        }
        return cat;
      });
      console.log('new abilities', newAbilities);
      setAbilities(newAbilities);
      if (catDecrease) {
        handleCategoryDecrease(newAbilities, category);
      }
    }
  };

  const handleCategoryIncrease = (abilities: any, category: string) => {
    console.log('category increase', category);
    const newAbilities = abilities.map((cat) => {
      if (cat.category === category) {
        return {
          ...cat,
          score: cat.score + 1,
        };
      }
      return cat;
    });
    console.log(newAbilities);
    setAbilities(newAbilities);
  };

  const handleCategoryDecrease = (abilities: any, category: string) => {
    const newAbilities = abilities.map((cat) => {
      if (cat.category === category) {
        return {
          ...cat,
          score: cat.score - 1,
        };
      }
      return cat;
    });
    setAbilities(newAbilities);
  };

  console.log(abilities);

  return (
    <div className="App">
      <header className="App-header">
        <h1>PTBA + Disco Elysium = ???</h1>
      </header>
      <main>
        <article>
          <section>Blood</section>
          <section>Donum</section>
        </article>
        <div className="abilities-wrapper">
          <article className="abilities-article">
            {abilities.map(
              ({ category, abilities, score, progress, color }) => (
                <section key={`category-${category}`} className="abilities-row">
                  <div
                    className={`ability-category ability-category-${category}`}
                    style={{ backgroundColor: `#${color}${score + 3}a` }}
                  >
                    <h3>{category}</h3>
                    <h4 className="category-score">{score}</h4>
                    <div className="category-progress-section">
                      {Array.from(Array(progress).keys()).map(() => (
                        <div className="category-progress active"></div>
                      ))}
                      {Array.from(Array(3 + score - progress).keys()).map(
                        () => (
                          <div className="category-progress"></div>
                        )
                      )}
                    </div>
                  </div>
                  {abilities.map(({ name, ranks }) => (
                    <div
                      key={`ability-${name}`}
                      className={`ability ability-category-${category}`}
                      style={{
                        backgroundColor: `#${color}${Math.min(
                          Math.max(ranks + score + 3, 1),
                          10
                        )}a`,
                      }}
                    >
                      <h4 className="ability-name">{name}</h4>
                      <div className="ability-score-section">
                        <h5
                          className="ability-score ability-score-button noselect"
                          onClick={() => {
                            handleAbilityScoreChange(
                              category,
                              name,
                              Math.max(ranks - 1, 0)
                            );
                          }}
                        >
                          -
                        </h5>
                        <h5 className="ability-score noselect">
                          {score + ranks}
                        </h5>
                        <h5
                          className="ability-score ability-score-button noselect"
                          onClick={() => {
                            handleAbilityScoreChange(
                              category,
                              name,
                              Math.min(ranks + 1, 5)
                            );
                          }}
                        >
                          +
                        </h5>
                      </div>
                    </div>
                  ))}
                </section>
              )
            )}
          </article>
          <aside className="abilities-progression-wrapper">
            <section className="abilities-progression-section">
              <div>
                <h5>Genius</h5>
              </div>
            </section>
            <section className="abilities-progression-section">
              <div>
                <h5>Power</h5>
              </div>
            </section>
            <section className="abilities-progression-section">
              <div>
                <h5>Fate</h5>
              </div>
            </section>
          </aside>
        </div>

        <aside></aside>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
