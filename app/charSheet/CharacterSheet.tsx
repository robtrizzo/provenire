'use client';
import Moves from './Moves';
import { useMemo, useState } from 'react';
import baseAbilities from '@/data/abilities.json';
import statusesData from '@/data/statuses.json';
// import './App.css';
interface Statuses {
  [key: string]: string[] | never[];
}
export default function CharacterSheet() {
  const [abilities, setAbilities] = useState(baseAbilities);
  const statuses: Statuses = statusesData;

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
        setName(content.name);
        setAbilities(content.abilities);
        setCurrentConditions(content.conditions);
        setCurrentAchievments(content.achievments);
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
            name,
            abilities,
            conditions: currentConditions,
            achievments: currentAchievments,
            blood,
            maxBlood,
            donum,
            maxDonum,
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

  const handleRankChange = (
    category: string,
    skill: string,
    newRanks: number
  ) => {
    const newAbilities = abilities.map((cat) => {
      if (category === cat.category) {
        const newSkills = cat.skills.map((sk) => {
          if (sk.name === skill) {
            return {
              ...sk,
              ranks: Math.min(Math.max(newRanks, 0), 11),
            };
          }
          return sk;
        });
        return {
          ...cat,
          skills: newSkills,
        };
      }
      return cat;
    });
    setAbilities(newAbilities);
  };

  const [name, setName] = useState('');
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
  const handleChangeName = (newName: string) => {
    setName(newName);
  };
  const [currentConditions, setCurrentConditions] = useState<string[]>([]);
  const handleClickCondition = (condition: string) => {
    if (currentConditions.includes(condition)) {
      setCurrentConditions(currentConditions.filter((c) => c !== condition));
    } else {
      const status = Object.keys(statuses).find((s) => s === condition);
      if (status) {
        const achievments: string[] = statuses[status];
        const filteredAchievments = currentAchievments.filter(
          (a) => !achievments.includes(a)
        );
        setCurrentAchievments(filteredAchievments);
      }

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
      const status = Object.keys(statuses).find((s) => s === achievment);
      if (status) {
        const conditions: string[] = statuses[status];
        const filteredConditions = currentConditions.filter(
          (c) => !conditions.includes(c)
        );
        setCurrentConditions(filteredConditions);
      }
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
          cat.skills.reduce((total, skill) => {
            return total + skill.ranks;
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
    <main className="h-full p-4 box-border">
      <section
        className=" box-border p-2.5 flex items-center justify-center gap-5"
        style={{ width: '1100px' }}
      >
        <button
          onClick={() => {
            handleDownloadFile();
          }}
        >
          Save
        </button>
        <label htmlFor="file-upload" className="leading-normal">
          <input
            id="file-upload"
            type="file"
            onChange={fileUploadHandler}
            className="hidden"
          />
          Load
        </label>
      </section>
      <input
        type="text"
        value={name}
        onChange={(e) => handleChangeName(e.target.value)}
        className="text-base bg-inherit w-60 border-0"
        placeholder="Name"
      />
      <article
        className=" flex items-center justify-center"
        style={{ width: '1100px' }}
      >
        <section
          className="w-full flex items-center justify-center h-14 border border-slate-300 transition ease-in0out duration-500 hover:shadow-inner-blood hover:cursor-pointer"
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
            className="flex items-center justify-center gap-4 text-xl"
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
                style={{ width: '2ch', textShadow: 'inherit' }}
                className="bg-inherit border-0"
              />
              /{' '}
              <input
                type="text"
                value={maxBlood}
                onChange={(e) => {
                  e.stopPropagation();
                  handleSetNumberField(setMaxBlood, e.target.value);
                }}
                style={{ width: '2ch', textShadow: 'inherit' }}
                className="bg-inherit border-0"
              />
            </span>
          </h3>
        </section>
        <section
          className="w-full flex items-center justify-center h-14 border border-slate-300 transition ease-in0out duration-500 hover:shadow-inner-donum hover:cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setSelected({
              title: 'Donum',
              description:
                'Arborian for "gift". Each power in the world has a proper noun beginning with Donum, but "Donum" is also a word for how much power one has. You may spend 1 donum and explain how your power could help you in a situation to take +1 forward on your next roll.',
              color: '6a5acd',
              moves: ['Unleash Donum'],
            });
          }}
        >
          <h3
            className="flex items-center justify-center gap-4 text-xl"
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
                style={{ width: '2ch', textShadow: 'inherit' }}
                className="bg-inherit border-0"
              />
              /{' '}
              <input
                type="text"
                value={maxDonum}
                onChange={(e) => {
                  e.stopPropagation();
                  handleSetNumberField(setMaxDonum, e.target.value);
                }}
                style={{ width: '2ch', textShadow: 'inherit' }}
                className="bg-inherit border-0"
              />
            </span>
          </h3>
        </section>
      </article>
      <article
        className="achievment-columns flex items-center justify-start"
        style={{ width: '1100px' }}
      >
        <section
          className="achievment-destined shrink-0 border px-2 border-slate-300 transition ease-in0out duration-500 relative group"
          style={{ ...achievmentStyle('Destined'), width: '200px' }}
          onClick={() => {
            setSelected({
              title: 'Destined',
              description: (
                <span>
                  This is your destiny. Your time, your place, your purpose.
                  When{' '}
                  <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                    <em>
                      you put everything on the line to fulfill your destiny
                    </em>
                  </strong>
                  , you recover from all conditions and Raise your Death Flag.
                </span>
              ),
            });
          }}
        >
          Destined
          <input
            type="checkbox"
            className="achievment-checkbox-column absolute top-1 right-2.5 h-4 w-4 transition ease-in0out duration-500 opacity-0 group-hover:opacity-100"
            checked={currentAchievments.includes('Destined')}
            onChange={() => handleClickAchievment('Destined')}
          />
        </section>
        <Achievment
          achievment="Determined"
          achievmentStyle={achievmentStyle}
          currentAchievments={currentAchievments}
          handleClickAchievment={handleClickAchievment}
          handleOnClick={() =>
            setSelected({
              title: 'Determined',
              description: (
                <span>
                  You've made your decision: and you're resolved not to change
                  it. When{' '}
                  <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                    <em>
                      you commit to a difficult task you've failed many times
                      before
                    </em>
                  </strong>
                  , you mark Determined and recover from the Hopeless condition
                </span>
              ),
            })
          }
          orientation="column"
        />
        <Achievment
          achievment="Hopeful"
          achievmentStyle={achievmentStyle}
          currentAchievments={currentAchievments}
          handleClickAchievment={handleClickAchievment}
          handleOnClick={() =>
            setSelected({
              title: 'Hopeful',
              description: (
                <span>
                  The future is bright and full of possibilities. When{' '}
                  <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                    <em>you overcome insurmountable odds</em>
                  </strong>
                  , you mark Hopeful and recover from the Hopeless condition
                </span>
              ),
            })
          }
          orientation="column"
        />
        <Achievment
          achievment="Passionate"
          achievmentStyle={achievmentStyle}
          currentAchievments={currentAchievments}
          handleClickAchievment={handleClickAchievment}
          handleOnClick={() =>
            setSelected({
              title: 'Passionate',
              description: (
                <span>
                  Devotion and love warm your heart and embolden you to action.
                  When{' '}
                  <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                    <em>you find love or a cause you truly believe in</em>
                  </strong>
                  , you mark Passionate and recover from the Guilty condition
                </span>
              ),
            })
          }
          orientation="column"
        />
        <Achievment
          achievment="Content"
          achievmentStyle={achievmentStyle}
          currentAchievments={currentAchievments}
          handleClickAchievment={handleClickAchievment}
          handleOnClick={() =>
            setSelected({
              title: 'Content',
              description: (
                <span>
                  You have everything you want. Your mind is free to wander and
                  focus without the distractions of want. When{' '}
                  <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                    <em>you accomplish a significant personal goal</em>
                  </strong>
                  , you mark Content and recover from the Guilty condition
                </span>
              ),
            })
          }
          orientation="column"
        />
        <Achievment
          achievment="Serene"
          achievmentStyle={achievmentStyle}
          currentAchievments={currentAchievments}
          handleClickAchievment={handleClickAchievment}
          handleOnClick={() =>
            setSelected({
              title: 'Serene',
              description: (
                <span>
                  Despite the turmoil and chaos within and without, you have
                  found inner tranquility. When{' '}
                  <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                    <em>you let go of something you desperately want</em>
                  </strong>
                  , you mark Serene and recover from the Insecure condition
                </span>
              ),
            })
          }
          orientation="column"
        />
        <Achievment
          achievment="Confident"
          achievmentStyle={achievmentStyle}
          currentAchievments={currentAchievments}
          handleClickAchievment={handleClickAchievment}
          handleOnClick={() =>
            setSelected({
              title: 'Confident',
              description: (
                <span>
                  You understand and accept who you are and what you are capable
                  of. When{' '}
                  <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                    <em>
                      you accept a fact about yourself which you previously
                      rejected
                    </em>
                  </strong>
                  , you mark Confident and recover from the Insecure condition
                </span>
              ),
            })
          }
          orientation="column"
        />
      </article>
      <article
        className="condition-columns flex items-center justify-start"
        style={{ width: '1100px' }}
      >
        <section
          className="achievment-destined shrink-0 border px-2 border-slate-300 transition ease-in0out duration-500 relative group"
          style={{ ...conditionStyle('Wounded'), width: '200px' }}
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
            className="condition-checkbox-column absolute opacity-0 h-4 w-4 top-1 right-2.5 transition ease-in-out duration-500 group-hover:opacity-100"
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
                  , you can escape the pain of your situation for a time. Doing
                  so clears the Hopeless condition and gives you +1 forward to
                  your next roll.
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
                  You've done something wrong, or failed to do something right:
                  it's eating at you. You can't shake the feeling that you're a
                  bad person, and that you have to make up for it somehow. By{' '}
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
                  clears the Insecure condition and gives you +1 forward to your
                  next roll.
                </span>
              ),
            });
          }}
          currentConditions={currentConditions}
        />
      </article>
      <div className="flex">
        <div className="abilities-wrapper w-full flex flex-col items-center justify-start">
          <article
            className="abilities-article flex flex-col items-center justify-center"
            style={{ backgroundColor: '#242424' }}
          >
            {abilities.map(
              ({ category, skills, color, description, moves }) => (
                <section
                  key={`category-${category}`}
                  className="abilities-row flex items-center justify-center"
                  style={{ height: '150px' }}
                >
                  <div
                    className={`ability-category ability-category-${category} flex flex-col items-center justify-center border box-border border-slate-300 transition ease-in-out duration-500`}
                    style={{
                      backgroundColor: `#${color}${Math.min(
                        Math.max(
                          Math.floor(
                            skills.reduce(
                              (acc, skill) => acc + skill.ranks - 3,
                              0
                            ) / 6
                          ),
                          1
                        ),
                        10
                      )}a`,
                      width: '200px',
                      height: '150px',
                    }}
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
                    <h4 className="category-score text-xl my-2">
                      {Math.floor(
                        skills.reduce(
                          (acc, skill) => acc + skill.ranks - 3,
                          0
                        ) / 6
                      ) - (currentConditions.includes('Wounded') ? 1 : 0)}
                    </h4>
                  </div>
                  {skills.map(
                    ({
                      name,
                      ranks,
                      description,
                      moves,
                      conditions,
                      achievments,
                    }) => (
                      <div
                        key={`ability-${name}`}
                        className={`ability ability-category-${category} flex flex-col items-center justify-center border border-slate-300 transition ease-in-out duration-500`}
                        style={{
                          backgroundColor: `#${color}${Math.min(
                            Math.max(ranks, 1),
                            10
                          )}a`,
                          width: '150px',
                          height: '150px',
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
                        <h4 className="ability-name mt-auto">{name}</h4>
                        <div className="ability-score-section flex items-center justify-center gap-6">
                          <h5
                            className="ability-score ability-score-button noselect text-lg my-1 rounded-full transition-bg ease-in-out duration-500 hover:bg-gray-800 hover:cursor-pointer select-none text-center"
                            onClick={() => {
                              handleRankChange(category, name, ranks - 1);
                            }}
                            style={{ width: '27px' }}
                          >
                            -
                          </h5>
                          <h5 className="ability-score noselect select-none text-lg my-1">
                            {Math.max(
                              Math.floor(
                                skills.reduce(
                                  (acc, skill) => acc + skill.ranks - 3,
                                  0
                                ) / 6
                              ),
                              ranks - 3
                            ) -
                              currentConditions.filter(
                                (n) => conditions.indexOf(n) > -1
                              ).length +
                              currentAchievments.filter(
                                (n) => achievments.indexOf(n) > -1
                              ).length}
                          </h5>
                          <h5
                            className="ability-score ability-score-button noselect text-lg my-1 rounded-full transition-bg ease-in-out duration-500 hover:bg-gray-800 hover:cursor-pointer select-none text-center"
                            onClick={() => {
                              handleRankChange(category, name, ranks + 1);
                            }}
                            style={{ width: '27px' }}
                          >
                            +
                          </h5>
                        </div>
                        <div className="category-progress-section mt-auto w-full flex items-center justify-center">
                          {Array.from(Array(ranks).keys()).map((r, idx) => (
                            <div
                              key={`rank-${idx}`}
                              className="category-progress active w-full h-3 border border-t-slate-300 border-b-0 border-b-transparent bg-cyan-700"
                            ></div>
                          ))}
                          {Array.from(Array(11 - ranks).keys()).map(
                            (p, idx) => (
                              <div
                                key={`progress-${idx}`}
                                className="category-progress w-full h-3 box-border border border-t-slate-300 border-b-0 border-b-transparent bg-gray-800"
                              ></div>
                            )
                          )}
                        </div>
                      </div>
                    )
                  )}
                </section>
              )
            )}
          </article>
          <article className="abilities-progression-wrapper w-full flex items-center justify-center">
            <section className="abilities-progression-section flex w-full border border-slate-300 py-1 px-2">
              <div className="abilities-progression-column w-full flex items-center justify-center gap-2">
                <h5 className="abilities-progression-name">Genius</h5>
                <div className="abilities-progression-bar w-full flex items-center justify-center">
                  {genius.map((g, i) => (
                    <ProgressionBarSection
                      key={`genius-${i}`}
                      color="#3518ab"
                      selected={g}
                      index={i}
                      setProgress={handleChangeGenius}
                    />
                  ))}
                </div>
              </div>
            </section>
            <section className="abilities-progression-section flex w-full border border-slate-300 py-1 px-2">
              <div className="abilities-progression-column w-full flex items-center justify-center gap-2">
                <h5 className="abilities-progression-name">Power</h5>
                <div className="abilities-progression-bar w-full flex items-center justify-center">
                  {power.map((p, i) => (
                    <ProgressionBarSection
                      key={`power-${i}`}
                      color="#c7401f"
                      selected={p}
                      index={i}
                      setProgress={handleChangePower}
                    />
                  ))}
                </div>
              </div>
            </section>
            <section className="abilities-progression-section flex w-full border border-slate-300 py-1 px-2">
              <div className="abilities-progression-column w-full flex items-center justify-center gap-2">
                <h5 className="abilities-progression-name">Fate</h5>
                <div className="abilities-progression-bar w-full flex items-center justify-center">
                  {fate.map((f, i) => (
                    <ProgressionBarSection
                      key={`fate-${i}`}
                      color="#e9de1e"
                      selected={f}
                      index={i}
                      setProgress={handleChangeFate}
                    />
                  ))}
                </div>
              </div>
            </section>
            <section className="abilities-progression-section flex w-full border border-slate-300 py-1 px-2">
              <h5 className="abilities-progression-name">
                Ranks: {totalRanks}
              </h5>
            </section>
          </article>
          {selected.title ? (
            <article
              className="info-section w-full box-border p-3 border border-slate-300 transition ease-in-out duration-500"
              style={
                selected.color
                  ? { backgroundColor: `#${selected.color}1a` }
                  : {}
              }
            >
              <h3 className="text-lg font-bold font-weight-bold text-center leading-10">
                {selected.title}
              </h3>
              <p className="info-section-description my-3 text-center">
                {selected.description}
              </p>
              <section className="info-moves-section flex items-start justify-center gap-3 flex-wrap">
                {selected.moves?.map((move, idx) => {
                  const selectedMove = Moves.get(move);
                  if (selectedMove) {
                    return selectedMove({
                      ranks: idx === 0 ? 3 : idx === 1 ? 6 : 10,
                    });
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
                    ready to explode. You can't think straight. But you can act.
                    By{' '}
                    <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                      <em>
                        hurting someone or by breaking something important
                      </em>
                    </strong>{' '}
                    , you can release some of that pressure. Doing so clears the
                    Angry condition and gives you +1 forward to your next roll.
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
                    friends, your future, your life? You can't take the thought
                    of losing that thing. By{' '}
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
        <article className="achievment-rows">
          <Achievment
            achievment="Interested"
            achievmentStyle={achievmentStyle}
            currentAchievments={currentAchievments}
            handleClickAchievment={handleClickAchievment}
            handleOnClick={() =>
              setSelected({
                title: 'Interested',
                description: (
                  <span>
                    The cogs and wheels of your mind are spinning: concieving of
                    possibilities you'd never considered before. When{' '}
                    <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                      <em>
                        you find a new subject or idea that fascinates you
                      </em>
                    </strong>
                    , mark Interested and recover from the Angry condition
                  </span>
                ),
              })
            }
            orientation="row"
          />
          <Achievment
            achievment="Inspired"
            achievmentStyle={achievmentStyle}
            currentAchievments={currentAchievments}
            handleClickAchievment={handleClickAchievment}
            handleOnClick={() =>
              setSelected({
                title: 'Inspired',
                description: (
                  <span>
                    An internal urge to action, a motivation to do great things
                    and make your own mark. When{' '}
                    <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                      <em>
                        you see someone accomplish something incredible, or if
                        you witness a piece of art that truly moves you
                      </em>
                    </strong>
                    , mark Inspired and recover from the Angry condition
                  </span>
                ),
              })
            }
            orientation="row"
          />
          <Achievment
            achievment="Excited"
            achievmentStyle={achievmentStyle}
            currentAchievments={currentAchievments}
            handleClickAchievment={handleClickAchievment}
            handleOnClick={() =>
              setSelected({
                title: 'Excited',
                description: (
                  <span>
                    You'd rather be nowhere else; you'd rather be doing nothing
                    else, than where you are and what you're about to do right
                    now. When{' '}
                    <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                      <em>
                        you get a chance to do something you've always wanted to
                        do
                      </em>
                    </strong>
                    , mark Excited and recover from the Afraid condition
                  </span>
                ),
              })
            }
            orientation="row"
          />
          <Achievment
            achievment="Courageous"
            achievmentStyle={achievmentStyle}
            currentAchievments={currentAchievments}
            handleClickAchievment={handleClickAchievment}
            handleOnClick={() =>
              setSelected({
                title: 'Courageous',
                description: (
                  <span>
                    Fear and doubt: present but overcome with perseverence and
                    dicipline. When{' '}
                    <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
                      <em>you face down and overcome a great fear of yours</em>
                    </strong>
                    , mark Courageous and recover from the Afraid condition
                  </span>
                ),
              })
            }
            orientation="row"
          />
        </article>
      </div>
      <aside></aside>
    </main>
  );
}

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
      className={`${
        orientation === 'column' ? 'w-full' : ''
      } relative px-2 box-border border border-slate-300 transition ease-in0out duration-500 group hover:cursor-pointer`}
      style={{
        ...conditionStyle(condition),
        ...(orientation === 'row'
          ? {
              height: '300px',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
            }
          : {}),
      }}
      onClick={handleOnClick}
    >
      {condition}
      <input
        type="checkbox"
        className={`absolute opacity-0 h-4 w-4 top-1 right-3 transition ease-in0out duration-500 checked:opacity-100 checked:accent-red-900 group-hover:opacity-100`}
        checked={currentConditions.includes(condition)}
        onChange={() => handleClickCondition(condition)}
      />
    </section>
  );
};

interface AchievmentProps {
  orientation: 'row' | 'column';
  achievmentStyle: (achievment: string) => React.CSSProperties;
  handleClickAchievment: (achievment: string) => void;
  achievment: string;
  handleOnClick: () => void;
  currentAchievments: string[];
}

const Achievment: React.FC<AchievmentProps> = ({
  orientation,
  achievmentStyle,
  handleClickAchievment,
  achievment,
  handleOnClick,
  currentAchievments,
}) => {
  return (
    <section
      className={`${
        orientation === 'column' ? 'w-full' : ''
      } relative px-2 box-border border border-slate-300 transition ease-in0out duration-500 group hover:cursor-pointer`}
      style={{
        ...achievmentStyle(achievment),
        ...(orientation === 'row'
          ? {
              height: '150px',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
            }
          : {}),
      }}
      onClick={handleOnClick}
    >
      {achievment}
      <input
        type="checkbox"
        className={`absolute opacity-0 h-4 w-4 top-1 right-3 transition ease-in0out duration-500 checked:opacity-100 checked:accent-cyan-700 group-hover:opacity-100`}
        checked={currentAchievments.includes(achievment)}
        onChange={() => handleClickAchievment(achievment)}
      />
    </section>
  );
};

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
      className={`abilities-progression-bar-section w-full h-4 border border-slate-300 transition ease-in0out duration-500 hover:cursor-pointer`}
      style={selected ? { backgroundColor: color } : {}}
      onClick={() => setProgress(index)}
    ></div>
  );
};
