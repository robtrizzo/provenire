"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { createContext, ReactNode, useContext, useState } from "react";

interface OperativesContextProps {
  votesFetching: boolean;
  votes: CharacterOptionVote[];
  pointsSpent: number;
  castVote: ({
    operative,
    vote,
  }: {
    operative: string;
    vote: CharacterOptionVoteType;
  }) => void;
  refetchVotes: () => void;
}

const OperativesContext = createContext<OperativesContextProps | undefined>(
  undefined
);

export const useOperatives = () => {
  const context = useContext(OperativesContext);
  if (!context) {
    throw new Error("useOperatives must be used within a OperativesProvider");
  }
  return context;
};

export default function OperativesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = useQueryClient();
  const session = useSession();

  const [pointsSpent, setPointsSpent] = useState(0);

  const fetchCharacterOptionVoteData = async () => {
    try {
      const response = await fetch("/api/operatives/votes");
      if (!response.ok) {
        console.error(
          `Failed to fetch operative vote data. status: ${response.status}`
        );
        return [];
      }
      const votes = await response.json();
      handleCalculatePlayerPoints(votes);
      return votes;
    } catch (error) {
      console.error("Error fetching operative vote data:", error);
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
    operative,
    vote,
  }: {
    operative: string;
    vote: CharacterOptionVoteType;
  }) => {
    await castVote({ operative, vote });
  };

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["votes", "operatives", "list"],
    queryFn: fetchCharacterOptionVoteData,
    enabled: !!session.data?.user?.id,
  });

  const { mutateAsync: castVote } = useMutation({
    mutationFn: async ({
      operative,
      vote,
    }: {
      operative: string;
      vote: CharacterOptionVoteType;
    }) => {
      const response = await fetch(`/api/operatives/votes/${operative}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vote }),
      });
      if (!response.ok) {
        console.error(
          "Failed to cast operative vote. Status: ",
          response.status
        );
        return response.json();
      }
      return response.json;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["votes", "operatives", "list"],
      });
    },
    onError: (error) => {
      console.error("Failed to cast vote", error);
    },
  });

  return (
    <OperativesContext.Provider
      value={{
        votesFetching: isFetching,
        votes: data,
        pointsSpent,
        castVote: handleCastVote,
        refetchVotes: refetch,
      }}
    >
      {children}
    </OperativesContext.Provider>
  );
}
