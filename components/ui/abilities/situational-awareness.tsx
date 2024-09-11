import {
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
export default function SituationalAwareness() {
  return (
    <div>
      <TypographyP>
        When the Entertainer <strong>gathers information</strong> about real
        material things going on around them, they can add the following to the
        list of questions they can ask:
      </TypographyP>
      <TypographyUnorderedList>
        <li>What key thing has changed?</li>
        <li>What&apos;s best escape route?</li>
        <li>Who here is in the most danger?</li>
        <li>Who here is the most dangerous?</li>
      </TypographyUnorderedList>
    </div>
  );
}
