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
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>let your instincts tell you what you need to know</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#c92a2a 1px 0 10px' }}>
            <em>Instinct</em>
          </strong>
        </span>
      }
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
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>push your powers beyond normal</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#6a5acd 1px 0 10px' }}>
            <em>Donum</em>
          </strong>
          . Spend a donum as part of using this move. On a hit, it works
        </span>
      }
      hit="Choose one"
      partial="Choose two"
      miss="Something bad happens"
    >
      <ResultList
        results={[
          "There's unwanted collateral damage",
          'You expose yourself to danger',
          'The effect is unstable or temporary',
          'You lose control of your powers in a terrible way',
          'You take a condition',
        ]}
      />
    </Move>
  );
};

export const NewDonumApplication = () => {
  return (
    <Move
      title="New Application of your Donum"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>develop new powers or evolve an existing one</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Psyche</em>
          </strong>
        </span>
      }
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
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>engage your opposition with straightforward determination</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#c92a2a 1px 0 10px' }}>
            <em>Body</em>
          </strong>
          . On a hit, you trade blows.
        </span>
      }
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
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>defend someone or something from an immediate threat</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#2b8a3e 1px 0 10px' }}>
            <em>Motorics</em>
          </strong>
          . On a hit, you keep them safe and choose 1 from the list below.
        </span>
      }
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
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>take a powerful blow</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: 'crimson 1px 0 10px' }}>
            <em>Conditions</em>
          </strong>
        </span>
      }
      miss="Stand strong. Mark Fate and say how you weather the blow."
      partial={
        <>
          <span>Choose 1</span>
          <ResultList
            results={[
              'You lash out verbally: provoke a teammate to foolhardy action or take advantage of your influence to inflict a condition on them.',
              'You give ground: your opposition gets an opportunity to push their advantage',
              'You struggle past the pain: mark a condition.',
              'You boil your blood, healing your body as you take the blow. Spend 1 blood.',
            ]}
          />
        </>
      }
      hit={
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
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>quickly gather your thoughts about what's happening</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#1864ab 1px 0 10px' }}>
            <em>Intellect</em>
          </strong>
        </span>
      }
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
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>comfort or support someone</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Empathy</em>
          </strong>
          . On a hit, they hear you: they mark fate or clear a condition.
        </span>
      }
      hit="You can also add a Team to the pool, mark genius, or clear a condition yourself."
    />
  );
};

const EmotionalAnalysis = () => {
  return (
    <Move
      title="Emotional Analysis"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>coldly analyze a person's emotions or psyche</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Empathy</em>
          </strong>
          . On a hit, you gain insight on a piece of their mind. Ask one
          question listed below.
        </span>
      }
      hit="Gain influence over them."
      miss="You probe carelessly into their personal experiences. You lose influence over them or they distance themself from you."
    >
      <ResultList
        results={[
          'How do they feel about ___?',
          'What are they really feeling right now?',
          'How could I get them to ___?',
          'What would be incredibly traumatic for them?',
        ]}
      />
    </Move>
  );
};

const ProvokeSomeone = () => {
  return (
    <Move
      title="Provoke Someone"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>provoke someone into foolhardy action</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Suggestion</em>
          </strong>
        </span>
      }
    >
      <p>
        For NPCs: on a 19+, they rise to the bait and do what you want. On a
        13-18, choose one.
        <ResultList
          results={[
            'they stumble: you take +1 forward when taking advantage of it',
            'they err: you gain a critical opportunity over them',
            'they overreact: you gain Influence over them',
          ]}
        />
      </p>
      <p>
        For PCs: on a 10+, choose both. On a 13-18, choose one.{' '}
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

const MakeContact = () => {
  return (
    <Move
      title="Make Contacts"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>socialize to make useful friends</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Suggestion</em>
          </strong>
          . On a hit, you befriend someone who can help you.
        </span>
      }
      partial="They'll help you, but only if you do something for them first."
      miss="You make a bad impression. Mark a condition or they gain influence over you"
    />
  );
};

const DiscernIntentions = () => {
  return (
    <Move
      title="Discern Intentions"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>understand the true intention of someone's words</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#1864ab 1px 0 10px' }}>
            <em>Rhetoric</em>
          </strong>
        </span>
      }
      hit="ask three"
      partial="ask one"
    >
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
const Decieve = () => {
  return (
    <Move
      title="Decieve"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>
              use your words to create misunderstandings or obscure the truth
            </em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#1864ab 1px 0 10px' }}>
            <em>Rhetoric</em>
          </strong>
        </span>
      }
      hit="choose two"
      partial="choose one"
      miss="You're caught in a lie, the GM will tell you how"
    >
      <ResultList
        results={[
          'Drive a wedge between two people',
          'Create a false impression',
          'Make someone doubt their own senses',
          'No one is the wiser',
        ]}
      />
    </Move>
  );
};

const CheckItOut = () => {
  return (
    <Move
      title="Check it Out"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>learn more about a location by using your senses</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#2b8a3e 1px 0 10px' }}>
            <em>Perception</em>
          </strong>
        </span>
      }
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
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>bend someone to your will</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Authority</em>
          </strong>
        </span>
      }
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

const Lead = () => {
  return (
    <Move
      title="Lead"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>lead a group of people to accomplish a task</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Authority</em>
          </strong>
        </span>
      }
      hit="the group acts as a cohesive team, they take +1 forward to accomplish the task"
      partial="the group works together, but it takes longer than expected or it's shoddy work"
      miss="the group is ineffective and disorganized. mark a condition"
    />
  );
};

const RecallInformation = () => {
  return (
    <Move
      title="Recall Information"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>recall information you've learned in the past</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#1864ab 1px 0 10px' }}>
            <em>Encyclopedia</em>
          </strong>
          . Tell the team one important detail you've learned from your studies.
          The GM will tell you what, if anything, seems different from what you
          remember.
        </span>
      }
      hit="ask the GM a follow-up question; they will answer it honestly"
      miss="the situation is well outside your base of knowledge; the GM will tell you why"
    />
  );
};
const SeekKnowledge = () => {
  return (
    <Move
      title="Seek Knowledge"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>recall who or where you might learn something from</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#1864ab 1px 0 10px' }}>
            <em>Encyclopedia</em>
          </strong>
          .
        </span>
      }
      hit="you know who to seek out or where to go to learn more about this"
      partial="you only know a cryptic clue to the answer"
      miss="you don't know where to start"
    />
  );
};

const Intimidate = () => {
  return (
    <Move
      title="Intimidate"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>frighten someone</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#c92a2a 1px 0 10px' }}>
            <em>Menace</em>
          </strong>
          . On a hit, they are thrown off and make themselves vulnerable to you,
          or they flee.
        </span>
      }
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
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>use tools that require fine motor skills</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#2b8a3e 1px 0 10px' }}>
            <em>Interfacing</em>
          </strong>
        </span>
      }
      hit="you do it, no problem"
      partial="you still do it, but the GM will offer you two options between suspicion, danger, or cost"
    />
  );
};

const DeftlyEngageAThreat = () => {
  return (
    <Move
      title="Deftly Engage a Threat"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>engage your opposition with precision and quick wits</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#2b8a3e 1px 0 10px' }}>
            <em>Coordination</em>
          </strong>
          . On a hit, you trade blows
        </span>
      }
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
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>engage your opposition with overwhelming force and skill</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#c92a2a 1px 0 10px' }}>
            <em>Execution</em>
          </strong>
          . On a hit, you trade blows.
        </span>
      }
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
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>forsee the situation's chain of cause/effect</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#1864ab 1px 0 10px' }}>
            <em>Logic</em>
          </strong>
        </span>
      }
      hit="ask one, then you get to ask a follow-up question. The GM must answer it honestly."
      partial="choose one"
      miss="you critically misunderstand the situation, leaving yourself open to danger or too slow to respond"
    >
      <ResultList
        results={[
          "if I do nothing, what's most likely to happen?",
          'how would ___ react to ___?',
          "what's the key to the enemy's plan?",
        ]}
      />
    </Move>
  );
};
const Investigate = () => {
  return (
    <Move
      title="Investigate"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>spend time investigating something</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#1864ab 1px 0 10px' }}>
            <em>Logic</em>
          </strong>
        </span>
      }
      hit="choose two"
      partial="choose one"
      miss="you're careless and caught unawares"
    >
      <ResultList
        results={[
          'you find a critical location',
          'you find a critical clue',
          'you find a critical person',
          "you aren't noticed",
        ]}
      />
    </Move>
  );
};

const Rouse = () => {
  return (
    <Move
      title="Rouse"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>use your words to inspire someone</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#1864ab 1px 0 10px' }}>
            <em>Drama</em>
          </strong>
          . On a hit, your words stir them: they get +1 forward
        </span>
      }
      hit="You can also add a Team to the pool or the roused ally gets +1 ongoing for the encounter"
      miss="Your words fall flat: both you and they take -1 forward"
    />
  );
};
const MakeWaves = () => {
  return (
    <Move
      title="Make Waves"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>use your words to spread information</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#1864ab 1px 0 10px' }}>
            <em>Drama</em>
          </strong>
          . On a hit, your words spread and people listen: you get +1 forward to
          act on the results.
        </span>
      }
      hit="You may choose between: attracting the attention you desire / not being known as the origin of the information."
      miss="Your words don't spread far. You may choose between: attracting the wrong kind of attention / your words being twisted to suit someone else's agenda."
    />
  );
};

const WorkOfArt = () => {
  return (
    <Move
      title="Work of Art"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>create a piece of art</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#1864ab 1px 0 10px' }}>
            <em>Conceptualization</em>
          </strong>
          . On a hit, you create a piece of art significant to you or someone
          you know.
        </span>
      }
      hit="If you made the art for yourself, clear a condition. If you made it for someone else, you gain influence over them."
      miss="Your best efforts resulted in a mess. Mark a condition."
    />
  );
};

const DecypherAesthetic = () => {
  return (
    <Move
      title="Decypher Aesthetic"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>
              attentively observe someone's art or form of personal expression
            </em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#1864ab 1px 0 10px' }}>
            <em>Conceptualization</em>
          </strong>
          .
        </span>
      }
      hit="ask two"
      partial="ask one"
      miss="This person is a mystery to you. You take -1 forward to interact with them."
    >
      <ResultList
        results={[
          'How do they want to be regarded by others?',
          'What sort of background do they have?',
          'What emotions do they want to evoke in others?',
          'What piece of themselves do they want to hide from others?',
        ]}
      />
    </Move>
  );
};

const ShrewdlyEngageAThreat = () => {
  return (
    <Move
      title="Shrewdly Engage a Threat"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>engage your opposition with tactics and careful planning</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#1864ab 1px 0 10px' }}>
            <em>Visual Calculus</em>
          </strong>
          . On a hit, you trade blows.
        </span>
      }
      hit="choose two"
      partial="choose one"
      miss="your plan backfires, or a new complication you couldn't have accounted for appears"
    >
      <ResultList
        results={[
          'you avoid their blows',
          'you impress or confuse the opposition',
          'you disrupt the enemy’s plans',
          'you set up your next move, take +1 forward to it',
        ]}
      />
    </Move>
  );
};

const WeildDonum = () => {
  return (
    <Move
      title="Weild your Donum"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>skillfully weild your powers</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Volition</em>
          </strong>
          . Spend a donum as part of using this move. On a hit, you do it.
        </span>
      }
      hit={
        <>
          <p>Choose one:</p>
          <ResultList
            results={[
              "it doesn't cost significant energy, regain a donum",
              'take hold of something vulnerable to you',
              'create something useful from your environment',
              'neutralize an opponent or threat... for now',
            ]}
          />
        </>
      }
      miss="You lose control of your donum. The GM will tell you how."
    ></Move>
  );
};

const ResistTemptation = () => {
  return (
    <Move
      title="Resist Temptation"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>resist an addiction, fascination, or temptation</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Volition</em>
          </strong>
          . On a hit, you resist.
        </span>
      }
      hit="take +1 forward to resist the temptation again"
      miss="you succumb to the temptation or mark a condition"
    />
  );
};

const ReadTheRoom = () => {
  return (
    <Move
      title="Read the Room"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>assess the social forces at play</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Contemporary</em>
          </strong>
          . On a hit, ask one. The GM will answer honestly.
        </span>
      }
      hit="take +1 forward when acting on the answer"
      miss="you misread the situation, and the GM will tell you how"
    >
      <ResultList
        results={[
          "what's the biggest threat?",
          'how could I gain influence over ___?',
          'who is really in charge here?',
          'how can I avoid trouble or hide here?',
        ]}
      />
    </Move>
  );
};

const SeekAssets = () => {
  return (
    <Move
      title="Seek Assets"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>look for something specific and hard to find</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Contemporary</em>
          </strong>
          . On a hit, you find something useful and specific to your current
          situation.
        </span>
      }
      hit="Choose two"
      partial="Choose one"
      miss="You find something, but it's not what you were looking for. The GM will tell you what you found."
    >
      <ResultList
        results={[
          "it's in good condition",
          "it's exactly what you were looking for",
          "it doesn't attract attention",
          "it doesn't cost you dearly",
        ]}
      />
    </Move>
  );
};

const LookInward = () => {
  return (
    <Move
      title="Look Inward"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>seek to understand the root of your emotions</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Introspection</em>
          </strong>
          . On a hit, pick a condition; the GM will tell you a constructive way
          to remove that condition rather than the self-destructive
          alternatives.
        </span>
      }
      hit="When you overcome the condition, mark Genius."
      miss="Your inner turmoil overcomes your sensibilities, mark another condition."
    />
  );
};

const EmbraceTheAngst = () => {
  return (
    <Move
      title="Embrace the Angst"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>use your negative emotions to empower your donum</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#5f3dc4 1px 0 10px' }}>
            <em>Introspection</em>
          </strong>
        </span>
      }
      hit="Spend a donum to add your conditions to your next Unleash Your Donum roll."
      partial={
        <span>
          Take +1 forward to your next Unleash Your Donum roll. Choose 1:
          <ResultList
            results={[
              'You take a condition',
              'You escalate the situation',
              'You have an emotional breakdown, lose influence over someone who sees you',
            ]}
          />
        </span>
      }
      miss="You lose control of your donum in a terrible way. The GM will tell you how."
    />
  );
};

const WithstandAPowerfulBlow = () => {
  return (
    <Move
      title="Withstand a Powerful Blow"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>take a powerful blow straight on</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#c92a2a 1px 0 10px' }}>
            <em>Stoicism</em>
          </strong>
        </span>
      }
      hit="Stand strong. Say how you weather the blow."
      partial={
        <>
          <span>Choose 1</span>
          <ResultList
            results={[
              "You don't flinch, and shock the opposition: take +1 forward against them. Spend two blood or mark two conditions.",
              'You keep moving despite the blow, repositioning yourself to your advantage. Spend two blood or mark two conditions.',
              'You stand strong despite the pain: add 1 to the team pool. Spend two blood or mark two conditions.',
            ]}
          />
        </>
      }
      miss={
        <>
          <span>Choose 1</span>
          <ResultList
            results={[
              'You buckle under the blow: spend two blood or mark two conditions.',
              "You're knocked back and off balance: take -1 forward and mark a condition.",
              "You're seriously injured: maimed, broken, or otherwise disabled, your choice.",
              'Two options from the 13-18 list',
            ]}
          />
        </>
      }
    />
  );
};

const PushYourBody = () => {
  return (
    <Move
      title="Push your Body"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>perform a feat of strength or overcome a physical obstacle</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#c92a2a 1px 0 10px' }}>
            <em>Endurance</em>
          </strong>
          . On a hit, you do it.
        </span>
      }
      partial="You hurt yourself in the process. Spend one blood or mark a condition."
    />
  );
};

const ShrugItOff = () => {
  return (
    <Move
      title="Shrug it Off"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>withstand an enironmental or internal ailment</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#c92a2a 1px 0 10px' }}>
            <em>Impunity</em>
          </strong>
          . On a hit, your body handles it, no sweat.
        </span>
      }
      hit="Impress any opponent who knows what you overcame. Take +1 forward against them."
      miss="The effect takes its toll, take a powerful blow"
    ></Move>
  );
};

const TakeTheInitiative = () => {
  return (
    <Move
      title="Take the Initiative"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>react to a dramatic change in situation or environment</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#2b8a3e 1px 0 10px' }}>
            <em>Reaction</em>
          </strong>
        </span>
      }
      hit="choose two"
      partial="choose one"
      miss="you're caught off-guard. take -1 forward."
    >
      <ResultList
        results={[
          'you act before anyone else has a chance to react',
          'you add a Team to the pool',
          'you gain an opportunity or opening',
          'you avoid danger',
        ]}
      />
    </Move>
  );
};

const TraverseTreacherousGround = () => {
  return (
    <Move
      title="Traverse Treacherous Ground"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>traverse treacherous ground</em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#2b8a3e 1px 0 10px' }}>
            <em>Grace</em>
          </strong>
        </span>
      }
      hit="you do it, no problem"
      partial="you do it, but you expose yourself to danger or escalate the situation: your choice"
    />
  );
};

const KeepYourCool = () => {
  return (
    <Move
      title="Keep your Cool"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>
              stay focused despite a dramatic change in situation or environment
            </em>
          </strong>
          , roll +{' '}
          <strong style={{ textShadow: '#2b8a3e 1px 0 10px' }}>
            <em>Composure</em>
          </strong>
        </span>
      }
      hit="choose two"
      partial="choose one"
      miss="you buckle under the pressure, mark a condition"
    >
      <ResultList
        results={[
          'you reassure someone, they clear a condition',
          'you impress, surprise, or frighten someone',
          'you deny the opposition an opportunity or opening',
          'mark power',
        ]}
      />
    </Move>
  );
};

const RaiseTheDeathFlag = () => {
  return (
    <Move
      title="Raise the Death Flag"
      preface={
        <span>
          When you{' '}
          <strong style={{ textShadow: '#FC0 1px 0 10px' }}>
            <em>put your life on the line in a bad situation</em>
          </strong>
          , add 2 Team to the pool and raise your death flag. While raised, you
          get +1 ongoing, but you die if you miss on a powerful blow or if you
          would mark a condiiton while wounded. When the scene ends, you can
          lower your death flag and mark Fate.
        </span>
      }
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
  ['Emotional Analysis', EmotionalAnalysis],
  ['Provoke Someone', ProvokeSomeone],
  ['Make Contact', MakeContact],
  ['Discern Intentions', DiscernIntentions],
  ['Decieve', Decieve],
  ['Check it Out', CheckItOut],
  ['Order', Order],
  ['Lead', Lead],
  ['Recall Information', RecallInformation],
  ['Seek Knowledge', SeekKnowledge],
  ['Intimidate', Intimidate],
  ['Quick Hands', QuickHands],
  ['Deftly Engage a Threat', DeftlyEngageAThreat],
  ['Ferociously Engage a Threat', FerociouslyEngageAThreat],
  ['Put the Pieces Together', PutThePiecesTogether],
  ['Investigate', Investigate],
  ['Rouse', Rouse],
  ['Make Waves', MakeWaves],
  ['Work of Art', WorkOfArt],
  ['Decypher Aesthetic', DecypherAesthetic],
  ['Shrewdly Engage a Threat', ShrewdlyEngageAThreat],
  ['Weild your Donum', WeildDonum],
  ['Resist Temptation', ResistTemptation],
  ['Read the Room', ReadTheRoom],
  ['Seek Assets', SeekAssets],
  ['Look Inward', LookInward],
  ['Embrace the Angst', EmbraceTheAngst],
  ['Withstand a Powerful Blow', WithstandAPowerfulBlow],
  ['Push your Body', PushYourBody],
  ['Shrug it Off', ShrugItOff],
  ['Take the Initiative', TakeTheInitiative],
  ['Traverse Treacherous Ground', TraverseTreacherousGround],
  ['Keep your Cool', KeepYourCool],
  ['Raise the Death Flag', RaiseTheDeathFlag],
]);
export default Moves;
