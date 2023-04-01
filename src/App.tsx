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

  const [blood, setBlood] = useState(3);
  const [maxBlood, setMaxBlood] = useState(3);
  const [donum, setDonum] = useState(3);
  const [maxDonum, setMaxDonum] = useState(3);
  const [selected, setSelected] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <h1>PTBA + Disco Elysium = ???</h1>
      </header>
      <main>
        <article className="resources">
          <section className="resource">
            <h3
              className="resource-content"
              style={{
                color: 'crimson',
                textShadow:
                  '0px 0px 0px crimson, 0 0 0.5em crimson, 0 0 0.1em crimson',
              }}
            >
              Blood{' '}
              <span>
                <input
                  type="text"
                  value={blood}
                  onChange={(e) => {
                    e.stopPropagation();
                    setBlood(parseInt(e.target.value));
                  }}
                  className="resource-input"
                />
                /{' '}
                <input
                  type="text"
                  value={maxBlood}
                  onChange={(e) => {
                    e.stopPropagation();
                    setMaxBlood(parseInt(e.target.value));
                  }}
                  className="resource-input"
                />
              </span>
            </h3>
          </section>
          <section className="resource">
            <h3
              className="resource-content"
              style={{
                color: 'steelblue',
                textShadow:
                  '0px 0px 0px steelblue, 0 0 0.5em steelblue, 0 0 0.1em steelblue',
              }}
            >
              Donum{' '}
              <span>
                <input
                  type="text"
                  value={donum}
                  onChange={(e) => {
                    e.stopPropagation();
                    setDonum(parseInt(e.target.value));
                  }}
                  className="resource-input"
                />
                /{' '}
                <input
                  type="text"
                  value={maxDonum}
                  onChange={(e) => {
                    e.stopPropagation();
                    setMaxDonum(parseInt(e.target.value));
                  }}
                  className="resource-input"
                />
              </span>
            </h3>
          </section>
        </article>
        <div className="abilities-wrapper">
          <article className="abilities-article">
            {abilities.map(
              ({
                category,
                abilities,
                score,
                progress,
                color,
                description,
              }) => (
                <section key={`category-${category}`} className="abilities-row">
                  <div
                    className={`ability-category ability-category-${category}`}
                    style={{ backgroundColor: `#${color}${score + 3}a` }}
                    onClick={() => {
                      setSelected({ title: category, color, description });
                    }}
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
                  {abilities.map(({ name, ranks, description }) => (
                    <div
                      key={`ability-${name}`}
                      className={`ability ability-category-${category}`}
                      style={{
                        backgroundColor: `#${color}${Math.min(
                          Math.max(ranks + score + 3, 1),
                          10
                        )}a`,
                      }}
                      onClick={() => {
                        setSelected({ title: name, color, description });
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
          <article className="abilities-progression-wrapper">
            <section className="abilities-progression-section">
              <div className="abilities-progression-column">
                <h5 className="abilities-progression-name">Genius</h5>
                <div className="abilities-progression-bar">
                  <ProgressionBarSection color="#3518ab" />
                  <ProgressionBarSection color="#3518ab" />
                  <ProgressionBarSection color="#3518ab" />
                  <ProgressionBarSection color="#3518ab" />
                  <ProgressionBarSection color="#3518ab" />
                </div>
              </div>
            </section>
            <section className="abilities-progression-section">
              <div className="abilities-progression-column">
                <h5 className="abilities-progression-name">Power</h5>
                <div className="abilities-progression-bar">
                  <ProgressionBarSection color="#c7401f" />
                  <ProgressionBarSection color="#c7401f" />
                  <ProgressionBarSection color="#c7401f" />
                  <ProgressionBarSection color="#c7401f" />
                  <ProgressionBarSection color="#c7401f" />
                </div>
              </div>
            </section>
            <section className="abilities-progression-section">
              <div className="abilities-progression-column">
                <h5 className="abilities-progression-name">Fate</h5>
                <div className="abilities-progression-bar">
                  <ProgressionBarSection color="#e9de1e" />
                  <ProgressionBarSection color="#e9de1e" />
                  <ProgressionBarSection color="#e9de1e" />
                  <ProgressionBarSection color="#e9de1e" />
                  <ProgressionBarSection color="#e9de1e" />
                </div>
              </div>
            </section>
          </article>
          {selected.title ? (
            <article
              className="info-section"
              style={
                selected.color
                  ? { backgroundColor: `#${selected.color}1a` }
                  : {}
              }
            >
              <h3>{selected.title}</h3>
              <p className="info-section-description">{selected.description}</p>
            </article>
          ) : null}
        </div>

        <aside></aside>
      </main>
      <footer></footer>
    </div>
  );
}

const ProgressionBarSection = ({ color }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`abilities-progression-bar-section`}
      style={selected ? { backgroundColor: color } : {}}
      onClick={() => setSelected(!selected)}
    ></div>
  );
};

export default App;
