"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { createContext, ReactNode, useContext, useState } from "react";

const MAX_POINTS = 5;

interface ArchetypesContextProps {
  MAX_POINTS: number;
  votesFetching: boolean;
  votes: CharacterOptionVote[];
  pointsSpent: number;
  castVote: ({
    archetype,
    vote,
  }: {
    archetype: string;
    vote: CharacterOptionVoteType;
  }) => void;
  castVoteError: string | null;
  refetchVotes: () => void;
}

const ArchetypesContext = createContext<ArchetypesContextProps | undefined>(
  undefined
);

export const useArchetypes = () => {
  const context = useContext(ArchetypesContext);
  if (!context) {
    throw new Error("useArchetypes must be used within a ArchetypesProvider");
  }
  return context;
};

export default function ArchetypesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = useQueryClient();
  const session = useSession();

  const [pointsSpent, setPointsSpent] = useState(0);
  const [castVoteError, setCastVoteError] = useState<string | null>(null);

  const fetchCharacterOptionVoteData = async () => {
    try {
      const response = await fetch("/api/archetypes/votes");
      if (!response.ok) {
        console.error(
          `Failed to fetch archetype vote data. status: ${response.status}`
        );
        return [];
      }
      const votes = await response.json();
      handleCalculatePlayerPoints(votes);
      return votes;
    } catch (error) {
      console.error("Error fetching archetype vote data:", error);
      throw error;
    }
  };

  function handleCalculatePlayerPoints(votes: CharacterOptionVote[]) {
    // for each CharacterOptionVote, check that vote's please[] and seemsCool[] arrays.
    // If the current user is found, add points
    const userId = session.data?.user?.id;
    if (!userId) return;
    let points = 0;
    votes.forEach((vote: CharacterOptionVote) => {
      if (userInVoteArray(userId, vote.votes.please)) points += 3;
      if (userInVoteArray(userId, vote.votes.seemsCool)) points += 1;
    });
    setPointsSpent(points);
  }

  function userInVoteArray(userId: string, votes: User[]) {
    return votes.some((voteUser) => voteUser.id === userId);
  }

  const handleCastVote = async ({
    archetype,
    vote,
  }: {
    archetype: string;
    vote: CharacterOptionVoteType;
  }) => {
    if (!session.data?.user?.id) {
      console.error("User not authenticated");
      return;
    }
    const userId = session.data.user.id;
    setCastVoteError(null);
    const votePoints = vote === "please" ? 3 : vote === "seemsCool" ? 1 : 0;
    let pointDiff = 0;
    // detect if the user has already voted for this archetype
    const archetypeVotes = queryClient
      .getQueryData<CharacterOptionVote[]>(["votes", "archetypes", "list"])
      ?.find((v) => v.name === archetype);
    if (archetypeVotes) {
      if (userInVoteArray(userId, archetypeVotes.votes[vote])) {
        // user already voted for this, diff is 0
      } else if (userInVoteArray(userId, archetypeVotes.votes.please)) {
        pointDiff = votePoints - 3;
      } else if (userInVoteArray(userId, archetypeVotes.votes.seemsCool)) {
        pointDiff = votePoints - 1;
      } else {
        // user has not voted for this archetype before, diff is votePoints
        pointDiff = votePoints;
      }
    }
    if (pointsSpent + pointDiff > MAX_POINTS) {
      console.error("Not enough points to cast this vote");
      setCastVoteError(`You need ${votePoints} points to cast this vote.`);
      return;
    }
    await castVote({ archetype, vote });
  };

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["votes", "archetypes", "list"],
    queryFn: fetchCharacterOptionVoteData,
    enabled: !!session.data?.user?.id,
  });

  const { mutateAsync: castVote } = useMutation({
    mutationFn: async ({
      archetype,
      vote,
    }: {
      archetype: string;
      vote: CharacterOptionVoteType;
    }) => {
      const response = await fetch(`/api/archetypes/votes/${archetype}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vote }),
      });
      if (!response.ok) {
        console.error(
          "Failed to cast archetype vote. Status: ",
          response.status
        );
        return response.json();
      }
      return response.json;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["votes", "archetypes", "list"],
      });
    },
    onError: (error) => {
      console.error("Failed to cast vote", error);
      setCastVoteError(error.message);
    },
  });

  return (
    <ArchetypesContext.Provider
      value={{
        MAX_POINTS,
        votesFetching: isFetching,
        votes: data,
        pointsSpent,
        castVote: handleCastVote,
        castVoteError,
        refetchVotes: refetch,
      }}
    >
      {children}
    </ArchetypesContext.Provider>
  );
}
