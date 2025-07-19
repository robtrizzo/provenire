import redis from "@/lib/redis";

type CharacterOptionType = "op" | "ar";

export async function getAllCharacterOptionVotes(type: CharacterOptionType) {
  const keys = await redis.keys(`votes:${type}:*`);
  const votes: CharacterOptionVote[] = await Promise.all(
    keys.map(async (key) => {
      const vote = await redis.get(key);
      return vote as CharacterOptionVote;
    })
  );
  return votes;
}

export async function getCharacterOptionVote(
  name: string,
  type: CharacterOptionType
) {
  const vote = await redis.get(`votes:${type}:${name}`);
  return vote as CharacterOptionVote;
}

export async function castCharacterOptionVote(
  name: string,
  optionType: CharacterOptionType,
  voteType: CharacterOptionVoteType,
  user: User
) {
  console.log(
    `Casting vote for ${optionType}: ${name}, type: ${voteType}, userId: ${user.id}`
  );
  const key = `votes:${optionType}:${name}`;
  const vote: CharacterOptionVote | null = await redis.get(key);

  if (!vote) {
    const initialVote: CharacterOptionVote = {
      name,
      votes: {
        please: [],
        seemsCool: [],
        noOpinion: [],
        fuckNo: [],
      },
    };
    initialVote.votes[voteType].push(user);
    await redis.set(key, JSON.stringify(initialVote));
    return;
  }

  // Find the user if they have already voted and remove them
  Object.keys(vote.votes).forEach((key) => {
    const userIndex = vote.votes[key as CharacterOptionVoteType].findIndex(
      (u) => u.id === user.id
    );
    if (userIndex !== -1) {
      vote.votes[key as CharacterOptionVoteType].splice(userIndex, 1);
    }
  });

  // Add the user to the new vote type
  vote.votes[voteType].push(user);

  await redis.set(key, JSON.stringify(vote));
}
