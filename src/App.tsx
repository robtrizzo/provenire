import { useMemo, useState } from 'react';
import baseAbilities from './data/abilities.json';
import './App.css';
import Moves from './Moves';

function App() {
  const [abilities, setAbilities] = useState(baseAbilities);

  const fileUploadHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const fileReader = new FileReader();
    const { files } = event.target;

    if (files && files.length > 0) {
      fileReader.readAsText(files[0], 'UTF-8');
      fileReader.onload = (e) => {
        const content = JSON.parse(e.target?.result?.toString() || '');
        setAbilities(content.abilities);
        setCurrentConditions(content.conditions);
        setBlood(content.blood);
        setMaxBlood(content.maxBlood);
        setDonum(content.donum);
        setMaxDonum(content.maxDonum);
        setGenius(content.genius);
        setPower(content.power);
        setFate(content.fate);
      };
    }
  };

  const handleDownloadFile = () => {
    const element = document.createElement('a');
    const file = new Blob(
      [
        JSON.stringify(
          {
            abilities: abilities,
            conditions: currentConditions,
            blood: blood,
            maxBlood: maxBlood,
            donum: donum,
            maxDonum: maxDonum,
            genius,
            power,
            fate,
          },
          null,
          2
        ),
      ],
      {
        type: 'application/json',
      }
    );
    element.href = URL.createObjectURL(file);
    element.download = 'character.json';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

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
      const newAbilities = abilities.map((cat: any) => {
        if (cat.category === category) {
          let newCategoryProgress = cat.progress + 1;
          console.log('newCategoryProgress', newCategoryProgress);
          if (newCategoryProgress >= 5 + cat.score) {
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
      const newAbilities = abilities.map((cat: any) => {
        if (cat.category === category) {
          let newCategoryProgress = cat.progress - 1;
          console.log('newCategoryProgress', newCategoryProgress);
          if (newCategoryProgress < 0) {
            console.log('decrease category');
            catDecrease = true;
            return {
              ...cat,
              progress: 5 + cat.score - 2,
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
    const newAbilities = abilities.map((cat: any) => {
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
    const newAbilities = abilities.map((cat: any) => {
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

  const [blood, setBlood] = useState(3);
  const [maxBlood, setMaxBlood] = useState(3);
  const [donum, setDonum] = useState(3);
  const [maxDonum, setMaxDonum] = useState(3);
  const handleSetNumberField = (setter: any, value: string) => {
    const newNumber = parseInt(value);
    console.log(newNumber, value);
    if (newNumber && !isNaN(newNumber)) {
      setter(newNumber);
    } else {
      setter(0);
    }
  };
  const [selected, setSelected] = useState<{
    title?: string;
    color?: string;
    description?: React.ReactNode;
    moves?: string[];
  }>({});
  const [currentConditions, setCurrentConditions] = useState<string[]>([]);
  const handleClickCondition = (condition: string) => {
    if (currentConditions.includes(condition)) {
      setCurrentConditions(currentConditions.filter((c) => c !== condition));
    } else {
      setCurrentConditions([...currentConditions, condition]);
    }
  };
  const conditionStyle = (condition: string) => {
    return currentConditions.includes(condition)
      ? { boxShadow: 'inset 0px 0px 5px 5px crimson' }
      : {};
  };
  const [currentAchievments, setCurrentAchievments] = useState<string[]>([]);
  const handleClickAchievment = (achievment: string) => {
    if (currentAchievments.includes(achievment)) {
      setCurrentAchievments(currentAchievments.filter((c) => c !== achievment));
    } else {
      setCurrentAchievments([...currentAchievments, achievment]);
    }
  };
  const achievmentStyle = (achievment: string) => {
    return currentAchievments.includes(achievment)
      ? { boxShadow: 'inset 0px 0px 5px 5px steelblue' }
      : {};
  };
  const totalRanks = useMemo(() => {
    return (
      abilities.reduce((total, cat) => {
        return (
          total +
          cat.abilities.reduce((total, ab) => {
            return total + ab.ranks;
          }, 0)
        );
      }, 0) +
      (maxBlood + maxDonum - 6)
    );
  }, [abilities, maxBlood, maxDonum]);
  const [genius, setGenius] = useState([false, false, false]);
  const handleChangeGenius = (index: number) => {
    const newGenius = genius.map((g, i) => {
      if (i === index) {
        return !g;
      }
      return g;
    });
    setGenius(newGenius);
  };
  const [power, setPower] = useState([false, false, false]);
  const handleChangePower = (index: number) => {
    const newPower = power.map((p, i) => {
      if (i === index) {
        return !p;
      }
      return p;
    });
    setPower(newPower);
  };
  const [fate, setFate] = useState([false, false, false]);
  const handleChangeFate = (index: number) => {
    const newFate = fate.map((f, i) => {
      if (i === index) {
        return !f;
      }
      return f;
    });
    setFate(newFate);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PTBA + Disco Elysium = ???</h1>
      </header>
      <main>
        <section className="file-section">
          <button
            onClick={() => {
              handleDownloadFile();
            }}
          >
            Save
          </button>
          <label htmlFor="file-upload" className="custom-file-upload">
            <input id="file-upload" type="file" onChange={fileUploadHandler} />
            Load
          </label>
        </section>
        <article className="resources">
          <section
            className="resource blood"
            onClick={(e) => {
              e.preventDefault();
              setSelected({
                title: 'Blood',
                description:
                  'Blood goes beyond being essential for life. It can be used to empower your body and enhance your mind for short periods of time. You may spend 1 blood to take +1 forward on your next roll.',
                color: 'DC143C',
                moves: ['Take a Powerful Blow', 'Raise the Death Flag'],
              });
            }}
          >
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
                    console.log(e.target.value);
                    e.stopPropagation();
                    handleSetNumberField(setBlood, e.target.value);
                  }}
                  className="resource-input"
                />
                /{' '}
                <input
                  type="text"
                  value={maxBlood}
                  onChange={(e) => {
                    e.stopPropagation();
                    handleSetNumberField(setMaxBlood, e.target.value);
                  }}
                  className="resource-input"
                />
              </span>
            </h3>
          </section>
          <section
            className="resource donum"
            onClick={(e) => {
              e.preventDefault();
              setSelected({
                title: 'Donum',
                description: 'Powaaah',
                color: '6a5acd',
                moves: ['Unleash Donum'],
              });
            }}
          >
            <h3
              className="resource-content"
              style={{
                color: 'slateblue',
                textShadow:
                  '0px 0px 0px slateblue, 0 0 0.5em slateblue, 0 0 0.1em slateblue',
              }}
            >
              Donum{' '}
              <span>
                <input
                  type="text"
                  value={donum}
                  onChange={(e) => {
                    e.stopPropagation();
                    handleSetNumberField(setDonum, e.target.value);
                  }}
                  className="resource-input"
                />
                /{' '}
                <input
                  type="text"
                  value={maxDonum}
                  onChange={(e) => {
                    e.stopPropagation();
                    handleSetNumberField(setMaxDonum, e.target.value);
                  }}
                  className="resource-input"
                />
              </span>
            </h3>
          </section>
        </article>
        <article className="achievment-columns">
          <section
            className="achievment-empowered"
            style={achievmentStyle('Empowered')}
            onClick={() => {
              handleClickAchievment('Empowered');
            }}
          >
            Empowered
          </section>
          <section
            className="achievment-column"
            style={achievmentStyle('Joyous')}
            onClick={() => {
              handleClickAchievment('Joyous');
            }}
          >
            Joyous
          </section>
          <section
            className="achievment-column"
            style={achievmentStyle('Joyous')}
            onClick={() => {
              handleClickAchievment('Joyous');
            }}
          >
            Joyous
          </section>
          <section
            className="achievment-column"
            style={achievmentStyle('Joyous')}
            onClick={() => {
              handleClickAchievment('Joyous');
            }}
          >
            Joyous
          </section>
          <section
            className="achievment-column"
            style={achievmentStyle('Joyous')}
            onClick={() => {
              handleClickAchievment('Joyous');
            }}
          >
            Joyous
          </section>
          <section
            className="achievment-column"
            style={achievmentStyle('Joyous')}
            onClick={() => {
              handleClickAchievment('Joyous');
            }}
          >
            Joyous
          </section>
          <section
            className="achievment-column"
            style={achievmentStyle('Joyous')}
            onClick={() => {
              handleClickAchievment('Joyous');
            }}
          >
            Joyous
          </section>
        </article>
        <article className="condition-columns">
          <section
            className="condition-wounded"
            style={conditionStyle('Wounded')}
            onClick={() => {
              setSelected({
                title: 'Wounded',
                description: (
                  <span>
                    You've been seriously injured. Your vision is swimming, your
                    body aching. You don't know for how much longer you can keep
                    going. By{' '}
                    <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                      <em>receiving significant medical attention</em>
                    </strong>
                    , you can recover from this condition and mark Fate.
                  </span>
                ),
              });
            }}
          >
            Wounded
            <input
              type="checkbox"
              className="condition-checkbox-column"
              checked={currentConditions.includes('Wounded')}
              onChange={() => handleClickCondition('Wounded')}
            />
          </section>
          <Condition
            orientation="column"
            conditionStyle={conditionStyle}
            handleClickCondition={handleClickCondition}
            condition="Hopeless"
            handleOnClick={() => {
              setSelected({
                title: 'Hopeless',
                description: (
                  <span>
                    The state of the world, or your own personal situation is so
                    bad that you feel like there is no hope for you or anyone
                    else. By{' '}
                    <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                      <em>flinging yourself into easy relief</em>
                    </strong>
                    , you can escape the pain of your situation for a time.
                    Doing so clears the Hopeless condition and gives you +1
                    forward to your next roll.
                  </span>
                ),
              });
            }}
            currentConditions={currentConditions}
          />
          <Condition
            orientation="column"
            conditionStyle={conditionStyle}
            handleClickCondition={handleClickCondition}
            condition="Guilty"
            handleOnClick={() => {
              setSelected({
                title: 'Guilty',
                description: (
                  <span>
                    You've done something wrong, or failed to do something
                    right: it's eating at you. You can't shake the feeling that
                    you're a bad person, and that you have to make up for it
                    somehow. By{' '}
                    <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                      <em>making a personal sacrifice to absolve your guilt</em>
                    </strong>{' '}
                    , you can clear the Guilty condition and give yourself +1
                    forward to your next roll.
                  </span>
                ),
              });
            }}
            currentConditions={currentConditions}
          />
          <Condition
            orientation="column"
            conditionStyle={conditionStyle}
            handleClickCondition={handleClickCondition}
            condition="Insecure"
            handleOnClick={() => {
              setSelected({
                title: 'Insecure',
                description: (
                  <span>
                    You're not sure you're good enough, smart enough, strong
                    enough, brave enough, worthy of respect, or worthy of love.
                    Proving yourself to yoursel by{' '}
                    <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                      <em>taking foolhardy action without consulting anyone</em>
                    </strong>{' '}
                    clears the Insecure condition and gives you +1 forward to
                    your next roll.
                  </span>
                ),
              });
            }}
            currentConditions={currentConditions}
          />
        </article>
        <div style={{ display: 'flex', gap: '2px' }}>
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
                  moves,
                }) => (
                  <section
                    key={`category-${category}`}
                    className="abilities-row"
                  >
                    <div
                      className={`ability-category ability-category-${category}`}
                      style={{ backgroundColor: `#${color}${score + 4}a` }}
                      onClick={() => {
                        setSelected({
                          title: category,
                          color,
                          description,
                          moves,
                        });
                      }}
                    >
                      <h3>{category}</h3>
                      <h4 className="category-score">
                        {score -
                          (currentConditions.includes('Wounded') ? 1 : 0)}
                      </h4>
                      <div className="category-progress-section">
                        {Array.from(Array(progress).keys()).map(() => (
                          <div className="category-progress active"></div>
                        ))}
                        {Array.from(Array(5 + score - progress).keys()).map(
                          () => (
                            <div className="category-progress"></div>
                          )
                        )}
                      </div>
                    </div>
                    {abilities.map(
                      ({ name, ranks, description, moves, conditions }) => (
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
                            setSelected({
                              title: name,
                              color,
                              description,
                              moves,
                            });
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
                              {score +
                                ranks -
                                currentConditions.filter(
                                  (n) => conditions.indexOf(n) > -1
                                ).length}
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
                          <div className="category-progress-section">
                            {Array.from(Array(ranks).keys()).map(() => (
                              <div className="category-progress active"></div>
                            ))}
                            {Array.from(Array(5 - ranks).keys()).map(() => (
                              <div className="category-progress"></div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </section>
                )
              )}
            </article>
            <article className="abilities-progression-wrapper">
              <section className="abilities-progression-section">
                <div className="abilities-progression-column">
                  <h5 className="abilities-progression-name">Genius</h5>
                  <div className="abilities-progression-bar">
                    {genius.map((g, i) => (
                      <ProgressionBarSection
                        color="#3518ab"
                        selected={g}
                        index={i}
                        setProgress={handleChangeGenius}
                      />
                    ))}
                  </div>
                </div>
              </section>
              <section className="abilities-progression-section">
                <div className="abilities-progression-column">
                  <h5 className="abilities-progression-name">Power</h5>
                  <div className="abilities-progression-bar">
                    {power.map((p, i) => (
                      <ProgressionBarSection
                        color="#c7401f"
                        selected={p}
                        index={i}
                        setProgress={handleChangePower}
                      />
                    ))}
                  </div>
                </div>
              </section>
              <section className="abilities-progression-section">
                <div className="abilities-progression-column">
                  <h5 className="abilities-progression-name">Fate</h5>
                  <div className="abilities-progression-bar">
                    {fate.map((f, i) => (
                      <ProgressionBarSection
                        color="#e9de1e"
                        selected={f}
                        index={i}
                        setProgress={handleChangeFate}
                      />
                    ))}
                  </div>
                </div>
              </section>
              <section className="abilities-progression-section">
                <h5 className="abilities-progression-name">
                  Ranks: {totalRanks}
                </h5>
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
                <p className="info-section-description">
                  {selected.description}
                </p>
                <section className="info-moves-section">
                  {selected.moves?.map((move) => {
                    const selectedMove = Moves.get(move);
                    if (selectedMove) {
                      return selectedMove();
                    }
                    return null;
                  })}
                </section>
              </article>
            ) : null}
          </div>
          <article className="condition-rows">
            <Condition
              orientation="row"
              conditionStyle={conditionStyle}
              handleClickCondition={handleClickCondition}
              condition="Angry"
              handleOnClick={() => {
                setSelected({
                  title: 'Angry',
                  description: (
                    <span>
                      The pressure in your head and chest is building. You're
                      ready to explode. You can't think straight. But you can
                      act. By{' '}
                      <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                        <em>
                          hurting someone or by breaking something important
                        </em>
                      </strong>{' '}
                      , you can release some of that pressure. Doing so clears
                      the Angry condition and gives you +1 forward to your next
                      roll.
                    </span>
                  ),
                });
              }}
              currentConditions={currentConditions}
            />
            <Condition
              orientation="row"
              conditionStyle={conditionStyle}
              handleClickCondition={handleClickCondition}
              condition="Afraid"
              handleOnClick={() => {
                setSelected({
                  title: 'Afraid',
                  description: (
                    <span>
                      Something precious is at stake. Your loved ones, your
                      friends, your future, your life? You can't take the
                      thought of losing that thing. By{' '}
                      <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                        <em>running away from something hard</em>
                      </strong>{' '}
                      , you can escape the fear. Doing so clears the Afraid
                      condition and gives you +1 forward to your next roll.
                    </span>
                  ),
                });
              }}
              currentConditions={currentConditions}
            />
            <div style={{ height: '42px', flexShrink: 0 }}></div>
          </article>
        </div>
        <aside></aside>
      </main>
      <footer></footer>
    </div>
  );
}

const ProgressionBarSection = ({
  color,
  selected,
  index,
  setProgress,
}: {
  color: string;
  selected: boolean;
  index: number;
  setProgress: { (index: number): void };
}) => {
  return (
    <div
      className={`abilities-progression-bar-section`}
      style={selected ? { backgroundColor: color } : {}}
      onClick={() => setProgress(index)}
    ></div>
  );
};

interface ConditionProps {
  orientation: 'row' | 'column';
  conditionStyle: (condition: string) => React.CSSProperties;
  handleClickCondition: (condition: string) => void;
  condition: string;
  handleOnClick: () => void;
  currentConditions: string[];
}

const Condition: React.FC<ConditionProps> = ({
  orientation,
  conditionStyle,
  handleClickCondition,
  condition,
  handleOnClick,
  currentConditions,
}) => {
  return (
    <section
      className={`condition-${orientation}`}
      style={conditionStyle(condition)}
      onClick={handleOnClick}
    >
      {condition}
      <input
        type="checkbox"
        className={`condition-checkbox-${orientation}`}
        checked={currentConditions.includes(condition)}
        onChange={() => handleClickCondition(condition)}
      />
    </section>
  );
};

export default App;
