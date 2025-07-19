"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { createContext, ReactNode, useContext, useState } from "react";

const MAX_POINTS = 5;

interface BackgroundsContextProps {
  MAX_POINTS: number;
  votesFetching: boolean;
  votes: CharacterOptionVote[];
  pointsSpent: number;
  castVote: ({
    background,
    vote,
  }: {
    background: string;
    vote: CharacterOptionVoteType;
  }) => void;
  castVoteError: string | null;
  refetchVotes: () => void;
}

const BackgroundsContext = createContext<BackgroundsContextProps | undefined>(
  undefined
);

export const useBackgrounds = () => {
  const context = useContext(BackgroundsContext);
  if (!context) {
    throw new Error("useBackgrounds must be used within a BackgroundsProvider");
  }
  return context;
};

export default function BackgroundsProvider({
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
      const response = await fetch("/api/backgrounds/votes");
      if (!response.ok) {
        console.error(
          `Failed to fetch background vote data. status: ${response.status}`
        );
        return [];
      }
      const votes = await response.json();
      handleCalculatePlayerPoints(votes);
      return votes;
    } catch (error) {
      console.error("Error fetching background vote data:", error);
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
    background,
    vote,
  }: {
    background: string;
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
    // detect if the user has already voted for this background
    const backgroundVotes = queryClient
      .getQueryData<CharacterOptionVote[]>(["votes", "backgrounds", "list"])
      ?.find((v) => v.name === background);
    if (backgroundVotes) {
      if (userInVoteArray(userId, backgroundVotes.votes[vote])) {
        // user already voted for this, diff is 0
      } else if (userInVoteArray(userId, backgroundVotes.votes.please)) {
        pointDiff = votePoints - 3;
      } else if (userInVoteArray(userId, backgroundVotes.votes.seemsCool)) {
        pointDiff = votePoints - 1;
      } else {
        // user has not voted for this background before, diff is votePoints
        pointDiff = votePoints;
      }
    }
    if (pointsSpent + pointDiff > MAX_POINTS) {
      console.error("Not enough points to cast this vote");
      setCastVoteError(`You need ${votePoints} points to cast this vote.`);
      return;
    }
    await castVote({ background, vote });
  };

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["votes", "backgrounds", "list"],
    queryFn: fetchCharacterOptionVoteData,
    enabled: !!session.data?.user?.id,
  });

  const { mutateAsync: castVote } = useMutation({
    mutationFn: async ({
      background,
      vote,
    }: {
      background: string;
      vote: CharacterOptionVoteType;
    }) => {
      const response = await fetch(`/api/backgrounds/votes/${background}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vote }),
      });
      if (!response.ok) {
        console.error(
          "Failed to cast background vote. Status: ",
          response.status
        );
        return response.json();
      }
      return response.json;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["votes", "backgrounds", "list"],
      });
    },
    onError: (error) => {
      console.error("Failed to cast vote", error);
      setCastVoteError(error.message);
    },
  });

  return (
    <BackgroundsContext.Provider
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
    </BackgroundsContext.Provider>
  );
}
