import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { DiamondPlus } from "lucide-react";
import BondInput from "./bond-input";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
export default function Bonds() {
  const { bonds, setBonds, selectedBackground, setChanges } =
    useCharacterSheet();

  return (
    <>
      <TypographyH3 className="text-sm text-muted-foreground flex items-center justify-between">
        Personal
        <Button
          size="icon"
          variant="ghost"
          className="p-1 text-green-600 hover:text-green-600 h-10 w-10"
          onClick={() => {
            setBonds((prevBonds) => ({
              ...prevBonds,
              Personal: [
                ...prevBonds.Personal,
                { name: "", score: [0, 0], description: "" },
              ],
            }));
            setChanges(true);
          }}
        >
          <DiamondPlus style={{ height: "24px", width: "24px" }} />
        </Button>
      </TypographyH3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {bonds.Personal.map((b, i) => (
          <BondInput
            key={`bond-personal-${i}`}
            bond={b}
            handleSave={(name: string, description: string) => {
              setBonds((prevBonds) => ({
                Personal: prevBonds.Personal.map((bond, index) =>
                  index === i ? { name, score: bond.score, description } : bond
                ),
                Familial: prevBonds.Familial,
                Professional: prevBonds.Professional,
                Crew: prevBonds.Crew,
              }));
              setChanges(true);
            }}
            handleChangeScore={(s: number[]) => {
              setBonds((prevBonds) => ({
                Personal: prevBonds.Personal.map((bond, index) =>
                  index === i
                    ? {
                        name: bond.name,
                        score: s,
                        description: bond.description,
                      }
                    : bond
                ),
                Familial: prevBonds.Familial,
                Professional: prevBonds.Professional,
                Crew: prevBonds.Crew,
              }));
              setChanges(true);
            }}
            handleDeleteBond={() => {
              setBonds((prevBonds) => ({
                ...prevBonds,
                Personal: prevBonds.Personal.filter((_, index) => i !== index),
              }));
              setChanges(true);
            }}
          />
        ))}
      </div>
      <TypographyH3 className="mt-4 text-sm text-muted-foreground flex items-center justify-between">
        Familial
        <Button
          size="icon"
          variant="ghost"
          className="p-1 text-green-600 hover:text-green-600 h-10 w-10"
          onClick={() => {
            setBonds((prevBonds) => ({
              ...prevBonds,
              Familial: [
                ...prevBonds.Familial,
                { name: "", score: [0, 0], description: "" },
              ],
            }));
            setChanges(true);
          }}
        >
          <DiamondPlus style={{ height: "24px", width: "24px" }} />
        </Button>
      </TypographyH3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {bonds.Familial.map((b, i) => (
          <BondInput
            key={`bond-familial-${i}`}
            bond={b}
            handleSave={(name: string, description: string) => {
              setBonds((prevBonds) => ({
                Personal: prevBonds.Personal,
                Familial: prevBonds.Familial.map((bond, index) =>
                  index === i ? { name, score: bond.score, description } : bond
                ),
                Professional: prevBonds.Professional,
                Crew: prevBonds.Crew,
              }));
              setChanges(true);
            }}
            handleChangeScore={(s: number[]) => {
              setBonds((prevBonds) => ({
                Personal: prevBonds.Personal,
                Familial: prevBonds.Familial.map((bond, index) =>
                  index === i
                    ? {
                        name: bond.name,
                        score: s,
                        description: bond.description,
                      }
                    : bond
                ),
                Professional: prevBonds.Professional,
                Crew: prevBonds.Crew,
              }));
              setChanges(true);
            }}
            handleDeleteBond={() => {
              setBonds((prevBonds) => ({
                ...prevBonds,
                Familial: prevBonds.Familial.filter((_, index) => i !== index),
              }));
              setChanges(true);
            }}
          />
        ))}
      </div>
      <TypographyH3 className="mt-4 text-sm text-muted-foreground">
        Professional
      </TypographyH3>
      {selectedBackground ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
          {bonds.Professional.map((b, i) => (
            <BondInput
              key={`bond-professional-${i}`}
              bond={b}
              handleSave={(name: string, description: string) => {
                setBonds((prevBonds) => ({
                  Personal: prevBonds.Personal,
                  Familial: prevBonds.Familial,
                  Professional: prevBonds.Professional.map((bond, index) =>
                    index === i
                      ? { name, score: bond.score, description }
                      : bond
                  ),
                  Crew: prevBonds.Crew,
                }));
                setChanges(true);
              }}
              handleChangeScore={(s: number[]) => {
                setBonds((prevBonds) => ({
                  Personal: prevBonds.Personal,
                  Familial: prevBonds.Familial,
                  Professional: prevBonds.Professional.map((bond, index) =>
                    index === i
                      ? {
                          name: bond.name,
                          score: s,
                          description: bond.description,
                        }
                      : bond
                  ),
                  Crew: prevBonds.Crew,
                }));
                setChanges(true);
              }}
              handleDeleteBond={() => {
                setBonds((prevBonds) => ({
                  ...prevBonds,
                  Professional: prevBonds.Professional.filter(
                    (_, index) => i !== index
                  ),
                }));
                setChanges(true);
              }}
            />
          ))}
        </div>
      ) : (
        <TypographyP className="text-center">
          Select a <span className="text-red-500">background</span> to view
          professional bonds
        </TypographyP>
      )}
      <TypographyH3 className="mt-4 text-sm text-muted-foreground flex items-center justify-between">
        Crew
        <Button
          size="icon"
          variant="ghost"
          className="p-1 text-green-600 hover:text-green-600 h-10 w-10"
          onClick={() => {
            console.log(bonds);
            if (bonds.Crew?.length > 0) {
              setBonds((prevBonds) => ({
                ...prevBonds,
                Crew: [
                  ...prevBonds.Crew,
                  { name: "", score: [1, 0], description: "" },
                ],
              }));
            } else {
              setBonds((prevBonds) => ({
                ...prevBonds,
                Crew: [{ name: "", score: [1, 0], description: "" }],
              }));
            }
            setChanges(true);
          }}
        >
          <DiamondPlus style={{ height: "24px", width: "24px" }} />
        </Button>
      </TypographyH3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {bonds.Crew?.map((b, i) => (
          <BondInput
            key={`bond-crew-${i}`}
            bond={b}
            handleSave={(name: string, description: string) => {
              setBonds((prevBonds) => ({
                Personal: prevBonds.Personal,
                Familial: prevBonds.Familial,
                Professional: prevBonds.Professional,
                Crew: prevBonds.Crew.map((bond, index) =>
                  index === i ? { name, score: bond.score, description } : bond
                ),
              }));
              setChanges(true);
            }}
            handleChangeScore={(s: number[]) => {
              setBonds((prevBonds) => ({
                Personal: prevBonds.Personal,
                Familial: prevBonds.Familial,
                Professional: prevBonds.Professional,
                Crew: prevBonds.Crew.map((bond, index) =>
                  index === i
                    ? {
                        name: bond.name,
                        score: s,
                        description: bond.description,
                      }
                    : bond
                ),
              }));
              setChanges(true);
            }}
            handleDeleteBond={() => {
              setBonds((prevBonds) => ({
                ...prevBonds,
                Crew: prevBonds.Crew.filter((_, index) => i !== index),
              }));
              setChanges(true);
            }}
          />
        ))}
      </div>
    </>
  );
}
