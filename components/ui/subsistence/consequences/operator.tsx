import { TypographyUnorderedList } from '../../typography';

export default function Operator() {
  return (
    <TypographyUnorderedList>
      <li>
        The stressed out workers get into a fight. Gain <strong>2 heat</strong>.
      </li>
      <li>
        Your body is slowly deteriorating from the constant strain. Advance the{' '}
        <span className="italic">Wear and Tear clock</span> by 1.
      </li>
    </TypographyUnorderedList>
  );
}
