import { TypographyUnorderedList } from '../../typography';

export default function Stoker() {
  return (
    <TypographyUnorderedList>
      <li>
        The furnace room's smoke is poisoning you. Add a permanent{' '}
        <strong>level 1 harm</strong>: "black lung".
      </li>
      <li>
        The furnace is missing a crucial part that no one knows how to fix.
        Advance the <span className="italic">Detonation clock</span> by 1.
      </li>
    </TypographyUnorderedList>
  );
}