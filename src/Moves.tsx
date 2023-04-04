const Move = ({ title, preface, hit, partial, miss, children }) => {
  return (
    <article className="move">
      <h3>{title}</h3>
      {preface && <p>{preface}</p>}
      {hit && [
        <div className="result-row">
          <h4 className="result-row-value">19+</h4>
          <p className="result-row-description">{hit}</p>
        </div>,
        <hr />,
      ]}
      {partial && [
        <div className="result-row">
          <h4 className="result-row-value">13-18</h4>
          <p className="result-row-description">{partial}</p>
        </div>,
        <hr />,
      ]}
      {miss && [
        <div className="result-row">
          <h4 className="result-row-value">12-</h4>
          <p className="result-row-description">{miss}</p>
        </div>,
        <hr />,
      ]}
      {children}
    </article>
  );
};

const ResultList = ({ results }) => {
  return (
    <ul className="result-row-list">
      {results.map((result, idx) => [
        <li key={idx} className="result-row-list-item">
          {result}
        </li>,
      ])}
    </ul>
  );
};

export const GutCheck = () => {
  return (
    <Move
      title="Gut Check"
      hit="Ask the GM 3 questions from the list below."
      partial="Ask the GM 1 question from the list below."
    >
      <p>Take +1 forward while acting on the answers</p>
      <ResultList
        results={[
          'Am I in imminent danger?',
          'Is there someone watching me?',
          'Does something smell off?',
          "What's the quickest way to escape?",
          'Who is everyone else afraid of?',
          'Who is afraid of me?',
        ]}
      />
    </Move>
  );
};

export const UnleashDonum = () => {
  return (
    <Move
      title="Unleash your Donum"
      preface="Spend a donum as part of using this move. On a hit, it works"
      hit="Choose 1 from the list below."
      miss="Something bad happens"
    >
      <p>
        If you don't choose an option from the list below, assume the opposite
        is true.
      </p>
      <ResultList
        results={[
          "There's no collateral damage",
          "You don't expose yourself to danger",
        ]}
      />
    </Move>
  );
};

export const NewDonumApplication = () => {
  return (
    <Move
      title="New Application of your Donum"
      hit="You do it, and this is now a new way you can use your powers without requiring a roll."
      partial="You do it, but just this time. +1 forward to attempting this move for this particular new application."
      miss="You mess it up, or aren't ready to use your power in this way. +1 forward to attemtping this move for this particular new application."
    />
  );
};

export const DirectlyEngageThreat = () => {
  return (
    <Move
      title="Directly Engage a Threat"
      preface="On a hit, you trade blows."
      hit="Pick 2 from the list below."
      partial="Pick 1 from the list below."
    >
      <ResultList
        results={[
          'Resist or avoid their blows',
          'Take something from them',
          'Create an opportunity for your allies',
          'Impress, surprise, or frighten your opposition.',
        ]}
      />
    </Move>
  );
};

export const Defend = () => {
  return (
    <Move
      title="Defend"
      preface="On a hit, you keep them safe and choose 1 from the list below."
      partial="It costs you: expose yourself to danger or escalate the situation"
    >
      <ResultList
        results={[
          'Add 1 Team to the pool',
          'Take influence over someone you protect',
          'Clear a condition',
        ]}
      />
      <p>
        When defending against PC threats, give them a -2 to their roll on a
        hit. On a 7-9, you expose yourself to cost, retribution, or judgement.
      </p>
    </Move>
  );
};

export const TakePowerfulBlow = () => {
  return (
    <Move
      title="Take a Powerful Blow"
      hit="Stand strong. Mark potential and say how you weather the blow."
      partial={
        <>
          <span>Choose 1</span>
          <ResultList
            results={[
              'You lash out verbally: provoke a teammate to foolhardy action or take advantage of your influence to inflict a condition on them.',
              'You give ground: your opposition gets an opportunity or you struggle past the pain: mark two conditions.',
            ]}
          />
        </>
      }
      miss={
        <>
          <span>Choose 1</span>
          <ResultList
            results={[
              'You must remove yourself from the situation, flee, pass out, etc.',
              'You lose control of yourself or your powers in a terrible way',
              'Two options from the 13-18 list',
            ]}
          />
        </>
      }
    ></Move>
  );
};

const AssessSituation = () => {
  return (
    <Move
      title="Assess the Situation"
      hit="Ask 2 questions from the list below"
      partial="Ask 1 question from the list below"
    >
      <p>Take +1 forward while acting on the answers</p>
      <ResultList
        results={[
          'What here can I use to ___?',
          'What here is in the greatest danger?',
          'How could we best end this quickly?',
        ]}
      />
    </Move>
  );
};

const Moves = new Map([
  ['Gut Check', GutCheck],
  ['Unleash Donum', UnleashDonum],
  ['New Donum Application', NewDonumApplication],
  ['Directly Engage a Threat', DirectlyEngageThreat],
  ['Defend', Defend],
  ['Take a Powerful Blow', TakePowerfulBlow],
  ['Assess the Situation', AssessSituation],
]);
export default Moves;
