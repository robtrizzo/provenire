interface MoveProps {
  title: string;
  preface?: React.ReactNode;
  hit?: React.ReactNode;
  partial?: React.ReactNode;
  miss?: React.ReactNode;
  children?: React.ReactNode;
}
const Move = ({ title, preface, hit, partial, miss, children }: MoveProps) => {
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

const ResultList = ({ results }: { results: string[] }) => {
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
          'Create an opportunity for your allies',
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
              'You boil your blood, healing your body as you take the blow. Spend 1 blood.',
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
              'You boil your blood, healing your body as you take the blow. Spend 2 blood.',
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

const ComfortOrSupport = () => {
  return (
    <Move
      title="Comfort or Support"
      preface="On a hit, they hear you: they mark fate or clear a condition."
      hit="You can also add a Team to the pool or clear a condition yourself."
    />
  );
};

const ProvokeSomeone = () => {
  return (
    <Move title="Provoke Someone">
      <p>
        For NPCs: on a 10+, they rise to the bait and do what you want. On a
        7-9, choose one.
        <ResultList
          results={[
            'they stumble: you take +1 forward when taking advantage of it',
            'they err: you gain a critical opportunity over them',
            'they overreact: you gain Influence over them',
          ]}
        />
      </p>
      <p>
        For PCs: on a 10+, choose both. On a 7-9, choose one.{' '}
        <ResultList
          results={[
            'if they do it, add a Team to the pool',
            'if they don’t do it, they mark a condition',
          ]}
        />
      </p>
    </Move>
  );
};

const DiscernIntentions = () => {
  return (
    <Move title="Discern Intentions" hit="ask three" partial="ask one">
      <ResultList
        results={[
          'What are you really planning?',
          'What do you want me to do?',
          'What do you intend to do?',
        ]}
      />
    </Move>
  );
};

const CheckItOut = () => {
  return (
    <Move
      title="Check it Out"
      hit="ask two"
      partial="ask one"
      miss="You're in over your head, the GM will tell you why this is a bad spot"
    >
      <ResultList
        results={[
          "What's my best way in/out/through?",
          "What's happened here recently?",
          'What here is worth grabbing?',
          'Who or what is not what they seem?',
        ]}
      />
    </Move>
  );
};

const Order = () => {
  return (
    <Move
      title="Order"
      hit="NPC chooses one and you take +1 forward against them"
      partial="NPC chooses one"
      miss="They do as they please and you take -1 forward against them"
    >
      <ResultList
        results={[
          'They do what you say',
          'They get out of your way',
          'They attack you at a disadvantage',
          'They freeze',
        ]}
      />
    </Move>
  );
};

const RecallInformation = () => {
  return (
    <Move
      title="Recall Information"
      preface="Tell the team one important detail you've learned from your studies. The GM will tell you what, if anything, seems different from what you remember."
      hit="ask the GM a follow-up question; they will answer it honestly"
      miss="the situation is well outside your base of knowledge; the GM will tell you why"
    />
  );
};

const Intimidate = () => {
  return (
    <Move
      title="Intimidate"
      preface="On a hit, they are thrown off and make themselves vulnerable to you, or they flee."
      hit="choose one"
      partial="choose two"
      miss="they react with violence, hatred, and paranoia, and you suffer the brunt of it"
    >
      <ResultList
        results={[
          'you frighten others you had not intended to',
          "you hurt someone or break something you shouldn't have",
          "you feel remorse for your actions, mark a condition (GM's choice)",
        ]}
      />
    </Move>
  );
};

const QuickHands = () => {
  return (
    <Move
      title="Quick Hands"
      hit="you do it, no problem"
      partial="you still do it, but the GM will offer you two options between suspicion, danger, or cost"
    />
  );
};

const DeftlyEngageAThreat = () => {
  return (
    <Move
      title="Deftly Engage a Threat"
      preface="On a hit, you trade blows"
      hit="choose two"
      partial="choose one"
      miss="you give away your plans, your position, or a tactical advantage"
    >
      <ResultList
        results={[
          'you take something from them',
          'you create an opportunity for your allies',
          'you avoid their blows',
          'you impress or surprise the opposition',
        ]}
      />
    </Move>
  );
};

const FerociouslyEngageAThreat = () => {
  return (
    <Move
      title="Ferociously Engage a Threat"
      preface="On a hit, you trade blows"
      hit="choose two"
      partial="choose one"
      miss="you give ground, destroy something you shouldn't have, or expose yourself to danger"
    >
      <ResultList
        results={[
          'you avoid their blows',
          'you deliver a devastating blow',
          'you impress or frighten the oppositon',
          'you force them where you want them',
        ]}
      />
    </Move>
  );
};

const PutThePiecesTogether = () => {
  return (
    <Move
      title="Put the Pieces Together"
      hit="ask one, then you get to ask a follow-up question. The GM must answer it honestly."
      partial="choose one"
      miss="you critically misunderstand the situation, leaving yourself open to danger or too slow to respond"
    >
      <ResultList
        results={[
          'who’s really in control here?',
          'how would ___ react to ___?',
          "what's the key to the enemy's plan?",
        ]}
      />
    </Move>
  );
};

const Rouse = () => {
  return (
    <Move
      title="Rouse"
      preface="On a hit, your words stir them: they get +1 forward"
      hit="You can also add a Team to the pool or the roused ally gets +1 ongoing for the encounter"
      miss="Your words fall flat: both you and they take -1 forward"
    />
  );
};

const WorkOfArt = () => {
  return (
    <Move
      title="Work of Art"
      preface="On a hit, you create a piece of art significant to you or someone you know."
      hit="If you made the art for yourself, clear a condition. If you made it for someone else, you gain influence over them."
      miss="Your best efforts resulted in a mess. Mark a condition."
    />
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
  ['Comfort or Support', ComfortOrSupport],
  ['Provoke Someone', ProvokeSomeone],
  ['Discern Intentions', DiscernIntentions],
  ['Check it Out', CheckItOut],
  ['Order', Order],
  ['Recall Information', RecallInformation],
  ['Intimidate', Intimidate],
  ['Quick Hands', QuickHands],
  ['Deftly Engage a Threat', DeftlyEngageAThreat],
  ['Ferociously Engage a Threat', FerociouslyEngageAThreat],
  ['Put the Pieces Together', PutThePiecesTogether],
  ['Rouse', Rouse],
  ['Work of Art', WorkOfArt],
]);
export default Moves;
