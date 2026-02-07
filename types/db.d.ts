interface User {
  name: string;
  email: string;
  image: string;
  id: UserId;
  role?: string;
  permissions?: string[];
}

interface CharacterOptionVote {
  name: string;
  votes: {
    please: User[];
    seemsCool: User[];
    noOpinion: User[];
    fuckNo: User[];
  };
}

type CharacterOptionVoteType = "please" | "seemsCool" | "noOpinion" | "fuckNo";
