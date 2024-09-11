import {
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
export default function QuestionEverything() {
  return (
    <div>
      <TypographyP>
        When the Visionary <strong>gathers information</strong> about
        conventional information or wisdom, they add the following to the list
        of questions they can ask:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          What&apos;s the critical flaw that makes this not apply to my current
          situation?
        </li>
        <li>If I do the opposite, what will the consequances be?</li>
        <li>
          What&apos;s the advantage to this that they didn&apos;t even realize?
        </li>
      </TypographyUnorderedList>
    </div>
  );
}
