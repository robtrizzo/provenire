import {
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
export default function MysteriesOfTheMachines() {
  return (
    <div>
      <TypographyP>
        When the Engineer <strong>gathers information</strong> about a structure
        or phenomenon, add the following to the list of questions they can ask:
      </TypographyP>
      <TypographyUnorderedList>
        <li>What is it made of?</li>
        <li>How could it be weakened or strengthened?</li>
        <li>How could it be used to my advantage?</li>
        <li>What is its purpose?</li>
      </TypographyUnorderedList>
    </div>
  );
}
