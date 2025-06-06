import { Survey } from "@/types/survey";

export const arcOneSurvey: Survey = {
  title: "Arc One Player Survey",
  arc: "arc-one",
  categories: [
    {
      title: "Overall",
      questions: [
        {
          id: 1,
          title: "Overall, how are you finding the game so far?",
          type: "multiple-choice",
          options: [
            {
              text: "Very Positively",
              color: "text-green-500",
              value: "very-positively",
            },
            {
              text: "Somewhat Positively",
              color: "text-lime-500",
              value: "somewhat-positively",
            },
            {
              text: "Somewhat Negatively",
              color: "text-rose-500",
              value: "somewhat-negatively",
            },
            {
              text: "Very Negatively",
              color: "text-red-500",
              value: "very-negatively",
            },
          ],
        },
        {
          id: 2,
          title:
            "Do you have any general feedback about the game? (there will be places for specific feedback further in the survey)",
          type: "text",
        },
      ],
    },
    {
      title: "Scheduling",
      questions: [
        {
          id: 3,
          title: "In general, how does the current scheduling work for you?",
          type: "multiple-choice",
          options: [
            {
              text: "Very Well",
              color: "text-green-500",
              value: "very-well",
            },
            {
              text: "Somewhat Well",
              color: "text-lime-500",
              value: "somewhat-well",
            },
            {
              text: "Somewhat Poorly",
              color: "text-rose-500",
              value: "somewhat-poorly",
            },
            {
              text: "Very Poorly",
              color: "text-red-500",
              value: "very-poorly",
            },
          ],
        },
        {
          id: 4,
          title: "How do you feel about session run times?",
          type: "multiple-choice",
          options: [
            {
              text: "I wish they were longer!",
              value: "longer",
            },
            {
              text: "I like how long they are.",
              value: "same",
            },
            {
              text: "I wish they were shorter.",
              value: "shorter",
            },
          ],
        },
        {
          id: 5,
          title: "How do you feel about the two-shift scheduling format?",
          type: "multiple-choice",
          options: [
            {
              text: "Very Positively",
              color: "text-green-500",
              value: "very-positively",
            },
            {
              text: "Somewhat Positively",
              color: "text-lime-500",
              value: "somewhat-positively",
            },
            {
              text: "Somewhat Negatively",
              color: "text-rose-500",
              value: "somewhat-negatively",
            },
            {
              text: "Very Negatively",
              color: "text-red-500",
              value: "very-negatively",
            },
          ],
        },
        {
          id: 6,
          title: "How do you feel about shift crossover sessions?",
          type: "multiple-choice",
          options: [
            {
              text: "I wish there were more!",
              value: "more",
            },
            {
              text: "I like how often they happened.",
              value: "same",
            },
            {
              text: "I wish there were less.",
              value: "less",
            },
          ],
        },
        {
          id: 7,
          title: "Do you have any general feedback about scheduling?",
          type: "text",
        },
      ],
    },
    {
      title: "Narrative",
      questions: [
        {
          id: 8,
          title: "How do you feel about the overall narrative of Arc One?",
          type: "multiple-choice",
          options: [
            {
              text: "Very Positively",
              color: "text-green-500",
              value: "very-positively",
            },
            {
              text: "Somewhat Positively",
              color: "text-lime-500",
              value: "somewhat-positively",
            },
            {
              text: "Somewhat Negatively",
              color: "text-rose-500",
              value: "somewhat-negatively",
            },
            {
              text: "Very Negatively",
              color: "text-red-500",
              value: "very-negatively",
            },
          ],
        },
        {
          id: 9,
          title:
            "Do you think I deliverd on my promise of a dark tone with an undercurrent of hope?",
          type: "multiple-choice",
          options: [
            {
              text: "Yes, absolutely!",
              color: "text-green-500",
              value: "yes",
            },
            {
              text: "Mostly, but I would have liked more hope.",
              color: "text-amber-500",
              value: "mostly-more-hope",
            },
            {
              text: "Mostly, but I would have liked more darkness.",
              color: "text-violet-500",
              value: "mostly-more-darkness",
            },
            {
              text: "No, I don't think so.",
              color: "text-red-500",
              value: "no",
            },
          ],
        },
        {
          id: 10,
          title:
            "Do you think I deliverd on my promise of making your characters grapple with the reality of rebellion?",
          type: "multiple-choice",
          options: [
            {
              text: "Yes, absolutely!",
              color: "text-green-500",
              value: "yes",
            },
            {
              text: "Mostly, but I would have liked to get into the aspects of rebellion more.",
              color: "text-amber-500",
              value: "mostly-more-rebellion",
            },
            {
              text: "Mostly, but I would have liked to focus on rebellion a bit less.",
              color: "text-violet-500",
              value: "mostly-less-rebellion",
            },
            {
              text: "No, I don't think so.",
              color: "text-red-500",
              value: "no",
            },
          ],
        },
        {
          id: 11,
          title:
            "Do you think I deliverd on my promise of focusing on character over plot?",
          type: "multiple-choice",
          options: [
            {
              text: "Yes, absolutely!",
              color: "text-green-500",
              value: "yes",
            },
            {
              text: "Mostly, but I would have liked to focus on characters more.",
              color: "text-amber-500",
              value: "mostly-more-character",
            },
            {
              text: "Mostly, but I would have liked to focus on plot more.",
              color: "text-violet-500",
              value: "mostly-more-plot",
            },
            {
              text: "No, I don't think so.",
              color: "text-red-500",
              value: "no",
            },
          ],
        },
        {
          id: 12,
          title:
            "Do you think I deliverd on my promise of making Rathi culture fucked up, but not uncomfortable to experience?",
          type: "multiple-choice",
          options: [
            {
              text: "Yes, absolutely!",
              color: "text-green-500",
              value: "yes",
            },
            {
              text: "Mostly, but I felt uncomfortable at least once.",
              color: "text-amber-500",
              value: "mostly-but-uncomfortable",
            },
            {
              text: "Mostly, and I think you could push it farther.",
              color: "text-violet-500",
              value: "mostly-go-farther",
            },
            {
              text: "No, I don't think so.",
              color: "text-red-500",
              value: "no",
            },
          ],
        },
        {
          id: 13,
          title:
            "If I made you feel uncomfortable in this way, please tell me how so I can avoid it in the future.",
          type: "text",
        },
        {
          id: 14,
          title:
            "Arc One was 36 sessions long. Do you think that was the right length for the story?",
          type: "multiple-choice",
          options: [
            {
              text: "I would have liked more sessions in the arc.",
              value: "more",
            },
            {
              text: "It felt like the right number.",
              value: "same",
            },
            {
              text: "I would have liked less sessions.",
              value: "less",
            },
          ],
        },
        {
          id: 15,
          title: "How do you feel about the pacing of the Arc?",
          type: "multiple-choice",
          options: [
            {
              text: "The pacing was great!",
              value: "great",
            },
            {
              text: "It felt a bit rushed to me.",
              value: "rushed",
            },
            {
              text: "I would have liked a faster pace.",
              value: "faster",
            },
          ],
        },
        {
          id: 16,
          title: "Do you have any general feedback about the narrative?",
          type: "text",
        },
      ],
    },
    {
      title: "Character Options",
      questions: [
        {
          id: 17,
          title:
            "How did you feel about the number of options when creating your character initially?",
          type: "multiple-choice",
          options: [
            {
              text: "I love them!",
              color: "text-green-500",
              value: "love-them",
            },
            {
              text: "I like them, but I would like more.",
              color: "text-amber-500",
              value: "like-more",
            },
            {
              text: "I like them, but I'd prefer less.",
              color: "text-violet-500",
              value: "like-less",
            },
            {
              text: "Way too many options!",
              color: "text-red-500",
              value: "too-many",
            },
          ],
        },
        {
          id: 18,
          title:
            "How did you feel about the number of options for advancement once you'd begun playing?",
          type: "multiple-choice",
          options: [
            {
              text: "I love them!",
              color: "text-green-500",
              value: "love-them",
            },
            {
              text: "I like them, but I would like more.",
              color: "text-amber-500",
              value: "like-more",
            },
            {
              text: "I like them, but I'd prefer less.",
              color: "text-violet-500",
              value: "like-less",
            },
            {
              text: "Way too many options!",
              color: "text-red-500",
              value: "too-many",
            },
          ],
        },
        {
          id: 19,
          title: "How do you feel about the rate of advancement?",
          type: "multiple-choice",
          options: [
            {
              text: "Felt good, no notes!",
              color: "text-green-500",
              value: "good",
            },
            {
              text: "It was fine, but could be faster.",
              color: "text-amber-500",
              value: "faster",
            },
            {
              text: "It was fine, but could be slower.",
              color: "text-violet-500",
              value: "slower",
            },
            {
              text: "I just didn't like it.",
              color: "text-red-500",
              value: "bad",
            },
          ],
        },
        {
          id: 20,
          title:
            "How do you feel about the strength and relevance of your character's options?",
          type: "multiple-choice",
          options: [
            {
              text: "Felt great!",
              color: "text-green-500",
              value: "great",
            },
            {
              text: "Felt good. Too good. I was overpowered!",
              color: "text-lime-500",
              value: "op",
            },
            {
              text: "It was fine, but I felt underpowered.",
              color: "text-rose-500",
              value: "underpowered",
            },
            {
              text: "I felt irrelevant.",
              color: "text-red-500",
              value: "bad",
            },
          ],
        },
        {
          id: 21,
          title: "What changes to character options would you like to see?",
          type: "text",
        },
        {
          id: 22,
          title: "What changes to advancement would you like to see?",
          type: "text",
        },
      ],
    },
    {
      title: "Mechanics",
      questions: [
        {
          id: 23,
          title: "Overall, how do you feel about the mechanics of the game?",
          type: "multiple-choice",
          options: [
            {
              text: "Very Positively",
              color: "text-green-500",
              value: "very-positively",
            },
            {
              text: "Somewhat Positively",
              color: "text-lime-500",
              value: "somewhat-positively",
            },
            {
              text: "Somewhat Negatively",
              color: "text-rose-500",
              value: "somewhat-negatively",
            },
            {
              text: "Very Negatively",
              color: "text-red-500",
              value: "very-negatively",
            },
          ],
        },
        {
          id: 24,
          title: "Did you like the red/blue die system?",
          type: "multiple-choice",
          options: [
            {
              text: "Yes, I love it!",
              color: "text-green-500",
              value: "love",
            },
            {
              text: "MORE COLORS!",
              color: "text-lime-500",
              value: "more-colors",
            },
            {
              text: "It's fine but I'd like to see it simplified.",
              color: "text-rose-500",
              value: "simplify",
            },
            {
              text: "Hate it, please remove it.",
              color: "text-red-500",
              value: "hate",
            },
          ],
        },
        {
          id: 25,
          title: "Did you like using your actions to make resistance rolls?",
          type: "multiple-choice",
          options: [
            {
              text: "Yes, I love it!",
              color: "text-green-500",
              value: "love",
            },
            {
              text: "Yes but it still feels awkward sometimes.",
              value: "awkward",
            },
            {
              text: "Hate it, please change it.",
              color: "text-red-500",
              value: "hate",
            },
          ],
        },
        {
          id: 26,
          title: "Do you find the current resistance system fair?",
          type: "multiple-choice",
          options: [
            {
              text: "Yes, I love it!",
              color: "text-green-500",
              value: "love",
            },
            {
              text: "Yes but it feels a bit too forgiving.",
              color: "text-amber-500",
              value: "forgiving",
            },
            {
              text: "Yes but it feels a bit too harsh.",
              color: "text-violet-500",
              value: "harsh",
            },
            {
              text: "Hate it, please change it.",
              color: "text-red-500",
              value: "hate",
            },
          ],
        },
        {
          id: 27,
          title:
            "What other changes to resistance rolls would you like to see?",
          type: "text",
        },
        {
          id: 28,
          title: "How do you feel about the current Bonds system?",
          type: "multiple-choice",
          options: [
            {
              text: "Love it!",
              color: "text-green-500",
              value: "love",
            },
            {
              text: "It's okay, but I'd like to see it expanded on.",
              color: "text-amber-500",
              value: "expand",
            },
            {
              text: "It's okay, but I'd like to see it simplified.",
              color: "text-violet-500",
              value: "simplify",
            },
            {
              text: "Hate it, please change it.",
              color: "text-red-500",
              value: "hate",
            },
          ],
        },
        {
          id: 29,
          title: "What other changes to bonds would you like to see?",
          type: "text",
        },
        {
          id: 30,
          title: "How do you feel about group rolls?",
          type: "multiple-choice",
          options: [
            {
              text: "Love it!",
              color: "text-green-500",
              value: "love",
            },
            {
              text: "It's okay, but it felt too strong.",
              color: "text-amber-500",
              value: "op",
            },
            {
              text: "It's okay, but it felt weak",
              color: "text-violet-500",
              value: "weak",
            },
            {
              text: "Hate it, please change it.",
              color: "text-red-500",
              value: "hate",
            },
          ],
        },
        {
          id: 31,
          title: "What other changes to group rolls would you like to see?",
          type: "text",
        },
        {
          id: 32,
          title:
            "How do you feel about choosing two actions (one from each half of your sheet)?",
          type: "multiple-choice",
          options: [
            {
              text: "Love it!",
              color: "text-green-500",
              value: "love",
            },
            {
              text: "It's okay, but I'd like to see it expanded.",
              color: "text-amber-500",
              value: "expand",
            },
            {
              text: "It's okay, but it felt overcomplicated.",
              color: "text-violet-500",
              value: "simplify",
            },
            {
              text: "Hate it, please change it.",
              color: "text-red-500",
              value: "hate",
            },
          ],
        },
        {
          id: 33,
          title: "Do you like that different characters had different actions?",
          type: "multiple-choice",
          options: [
            {
              text: "Love it!",
              color: "text-green-500",
              value: "love",
            },
            {
              text: "It's okay, but I'd prefer even more unique actions.",
              color: "text-amber-500",
              value: "more",
            },
            {
              text: "It's okay, but I'd prefer less unique actions.",
              color: "text-violet-500",
              value: "less",
            },
            {
              text: "Hate it, please change it.",
              color: "text-red-500",
              value: "hate",
            },
          ],
        },
        {
          id: 34,
          title:
            "Do you like the minigame of figuring out which actions to use?",
          type: "multiple-choice",
          options: [
            {
              text: "Love it!",
              color: "text-green-500",
              value: "love",
            },
            {
              text: "It's okay, but I'd prefer actions be even more specific.",
              color: "text-amber-500",
              value: "specific",
            },
            {
              text: "It's okay, but I'd prefer actions be even more general purpose.",
              color: "text-violet-500",
              value: "broad",
            },
            {
              text: "Hate it, please change it.",
              color: "text-red-500",
              value: "hate",
            },
          ],
        },
        {
          id: 35,
          title: "What other changes to actions would you like to see?",
          type: "text",
        },
        {
          id: 36,
          title: "How do you feel about the harms/healing system?",
          type: "multiple-choice",
          options: [
            {
              text: "Love it!",
              color: "text-green-500",
              value: "love",
            },
            {
              text: "It's okay, but I'd prefer it be more punishing.",
              color: "text-amber-500",
              value: "more",
            },
            {
              text: "It's okay, but I'd prefer it be less punishing.",
              color: "text-violet-500",
              value: "less",
            },
            {
              text: "Hate it, please change it.",
              color: "text-red-500",
              value: "hate",
            },
          ],
        },
        {
          id: 37,
          title: "What other changes to harms/healing would you like to see?",
          type: "text",
        },
        {
          id: 38,
          title: "How do you feel about the conditions system?",
          type: "multiple-choice",
          options: [
            {
              text: "Love it!",
              color: "text-green-500",
              value: "love",
            },
            {
              text: "It's okay, but I'd prefer it be more punishing.",
              color: "text-amber-500",
              value: "more",
            },
            {
              text: "It's okay, but I'd prefer it be less punishing.",
              color: "text-violet-500",
              value: "less",
            },
            {
              text: "Hate it, please change it.",
              color: "text-red-500",
              value: "hate",
            },
          ],
        },
        {
          id: 39,
          title: "What other changes to conditions would you like to see?",
          type: "text",
        },
        {
          id: 40,
          title: "How do you feel about the combat system?",
          type: "multiple-choice",
          options: [
            {
              text: "Love it!",
              color: "text-green-500",
              value: "love",
            },
            {
              text: "It's okay, but I'd prefer it be more structured.",
              color: "text-amber-500",
              value: "more",
            },
            {
              text: "It's okay, but I'd prefer it be less structured.",
              color: "text-violet-500",
              value: "less",
            },
            {
              text: "Hate it, please change it.",
              color: "text-red-500",
              value: "hate",
            },
          ],
        },
        {
          id: 41,
          title: "What other changes to combat would you like to see?",
          type: "text",
        },
      ],
    },
    {
      title: "Structure",
      questions: [
        {
          id: 42,
          title:
            "Overall, how do you feel about the flow of Prelude -> Mission -> Churn -> Agendas?",
          type: "multiple-choice",
          options: [
            {
              text: "Very Positively",
              color: "text-green-500",
              value: "very-positively",
            },
            {
              text: "Somewhat Positively",
              color: "text-lime-500",
              value: "somewhat-positively",
            },
            {
              text: "Somewhat Negatively",
              color: "text-rose-500",
              value: "somewhat-negatively",
            },
            {
              text: "Very Negatively",
              color: "text-red-500",
              value: "very-negatively",
            },
          ],
        },
        {
          id: 43,
          title:
            "Did you feel like there are enough things to do in the Prelude?",
          type: "multiple-choice",
          options: [
            {
              text: "Yes!",
              color: "text-green-500",
              value: "yes",
            },
            {
              text: "Yes, but I would have liked less options.",
              color: "text-lime-500",
              value: "less",
            },
            {
              text: "Yes, but I would have liked more options.",
              color: "text-rose-500",
              value: "more",
            },
            {
              text: "No. I frequently didn't know what to do.",
              color: "text-red-500",
              value: "no",
            },
          ],
        },
        {
          id: 44,
          title:
            "How do you feel about the amount of time spent in the Prelude?",
          type: "multiple-choice",
          options: [
            {
              text: "I would have preferred more time.",
              value: "more",
            },
            {
              text: "It felt like the right amount.",
              value: "same",
            },
            {
              text: "I would have preferred less time.",
              value: "less",
            },
          ],
        },
        {
          id: 45,
          title: "What other changes to the Prelude would you like to see?",
          type: "text",
        },
        {
          id: 46,
          title: "Did you enjoy the process of picking the mission approach?",
          type: "multiple-choice",
          options: [
            {
              text: "Yes!",
              color: "text-green-500",
              value: "yes",
            },
            {
              text: "Yes, but I would have liked less options.",
              color: "text-amber-500",
              value: "less",
            },
            {
              text: "Yes, but I would have liked more options.",
              color: "text-violet-500",
              value: "more",
            },
            {
              text: "No. I frequently didn't know what to pick.",
              color: "text-red-500",
              value: "no",
            },
          ],
        },
        {
          id: 47,
          title:
            "Did you enjoy the process of building up the engagement roll?",
          type: "multiple-choice",
          options: [
            {
              text: "Yes!",
              color: "text-green-500",
              value: "yes",
            },
            {
              text: "Yes, but I would have liked more questions.",
              color: "text-amber-500",
              value: "more",
            },
            {
              text: "Yes, but I would have liked less questions.",
              color: "text-violet-500",
              value: "less",
            },
            {
              text: "No. It was boring / overcomplicated.",
              color: "text-red-500",
              value: "no",
            },
          ],
        },
        {
          id: 48,
          title: "How do you feel about the amount of time spent in Missons?",
          type: "multiple-choice",
          options: [
            {
              text: "I would have preferred more time.",
              value: "more",
            },
            {
              text: "It felt like the right amount.",
              value: "same",
            },
            {
              text: "I would have preferred less time.",
              value: "less",
            },
          ],
        },
        {
          id: 49,
          title:
            "There won't be a Subsistence phase in Arc Three, but there will be something similar. How did you feel about the Subsistence phase?",
          type: "multiple-choice",
          options: [
            {
              text: "Loved it!",
              color: "text-green-500",
              value: "loved",
            },
            {
              text: "I liked it, but I crave more pain!",
              color: "text-amber-500",
              value: "more",
            },
            {
              text: "I liked it, but it felt a bit too punishing.",
              color: "text-violet-500",
              value: "less",
            },
            {
              text: "Hated it, please don't make me do it again.",
              color: "text-red-500",
              value: "hated",
            },
          ],
        },
        {
          id: 50,
          title:
            "How did you feel about the variety of Agendas and minigames therewithin?",
          type: "multiple-choice",
          options: [
            {
              text: "Loved it!",
              color: "text-green-500",
              value: "love",
            },
            {
              text: "I liked it, but I would prefer more variety.",
              color: "text-amber-500",
              value: "more",
            },
            {
              text: "I liked it, but I'd prefer it be simplified.",
              color: "text-violet-500",
              value: "simplify",
            },
            {
              text: "Hated it, please change it.",
              color: "text-red-500",
              value: "hated",
            },
          ],
        },
        {
          id: 51,
          title: "How do you feel about the amount of time spent in Agendas?",
          type: "multiple-choice",
          options: [
            {
              text: "I would have preferred more time.",
              value: "more",
            },
            {
              text: "It felt like the right amount.",
              value: "same",
            },
            {
              text: "I would have preferred less time.",
              value: "less",
            },
          ],
        },
        {
          id: 52,
          title: "What other changes to Agendas would you like to see?",
          type: "text",
        },
        {
          id: 53,
          title: "How did the crew advancement feel?",
          type: "multiple-choice",
          options: [
            {
              text: "Felt great!",
              color: "text-green-500",
              value: "great",
            },
            {
              text: "Felt good, but I would have liked slower advancement.",
              color: "text-amber-500",
              value: "slower",
            },
            {
              text: "Felt good, but I would have liked faster advancement.",
              color: "text-violet-500",
              value: "faster",
            },
            {
              text: "Hated it, please change it.",
              color: "text-red-500",
              value: "hated",
            },
          ],
        },
        {
          id: 54,
          title: "How did sharing resources across the shifts feel?",
          type: "multiple-choice",
          options: [
            {
              text: "Felt great!",
              color: "text-green-500",
              value: "great",
            },
            {
              text: "Felt good, but I would rather not share critical resources.",
              color: "text-amber-500",
              value: "less",
            },
            {
              text: "Felt good, but I would have liked even more resource-sharing.",
              color: "text-violet-500",
              value: "more",
            },
            {
              text: "Hated it, don't make us share anymore.",
              color: "text-red-500",
              value: "hated",
            },
          ],
        },
        {
          id: 55,
          title: "What other changes to crew resources would you like to see?",
          type: "text",
        },
      ],
    },
    {
      title: "Character Sheet",
      questions: [
        {
          id: 56,
          title: "Overall, how do you feel about the character sheet?",
          type: "multiple-choice",
          options: [
            {
              text: "Very Positively",
              color: "text-green-500",
              value: "very-positively",
            },
            {
              text: "Somewhat Positively",
              color: "text-lime-500",
              value: "somewhat-positively",
            },
            {
              text: "Somewhat Negatively",
              color: "text-rose-500",
              value: "somewhat-negatively",
            },
            {
              text: "Very Negatively",
              color: "text-red-500",
              value: "very-negatively",
            },
          ],
        },
        {
          id: 57,
          title: "How do you feel about the layout of the character sheet?",
          type: "multiple-choice",
          options: [
            {
              text: "I'd prefer it to be more compact.",
              value: "compact",
            },
            {
              text: "It feels about right",
              value: "right",
            },
            {
              text: "I'd prefer it to be more spacious.",
              value: "spacious",
            },
          ],
        },
        {
          id: 58,
          title:
            "Do you have any cool or fun features you'd like on the character sheet?",
          type: "text",
        },
        {
          id: 59,
          title:
            "Do you have any ongoing bugs or issues with the character sheet?",
          type: "text",
        },
      ],
    },
    {
      title: "Website",
      questions: [
        {
          id: 60,
          title: "Overall, how do you feel about the website?",
          type: "multiple-choice",
          options: [
            {
              text: "Very Positively",
              color: "text-green-500",
              value: "very-positively",
            },
            {
              text: "Somewhat Positively",
              color: "text-lime-500",
              value: "somewhat-positively",
            },
            {
              text: "Somewhat Negatively",
              color: "text-rose-500",
              value: "somewhat-negatively",
            },
            {
              text: "Very Negatively",
              color: "text-red-500",
              value: "very-negatively",
            },
          ],
        },
        {
          id: 61,
          title: "How do you feel about the density of lore on the website?",
          type: "multiple-choice",
          options: [
            {
              text: "I'd prefer there to be more lore.",
              value: "more",
            },
            {
              text: "It feels about right",
              value: "right",
            },
            {
              text: "I'd prefer there to be less lore.",
              value: "less",
            },
          ],
        },
        {
          id: 62,
          title: "Do you have any cool or fun pages you'd like to see added?",
          type: "text",
        },
        {
          id: 63,
          title:
            "What stats would you like to see added to the next arc's stats page?",
          type: "text",
        },
        {
          id: 64,
          title: "What other changes to the website would you like to see?",
          type: "text",
        },
      ],
    },
  ],
};
