import {
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
export default function SeekingPurpose() {
  return (
    <div>
      <TypographyP>
        The Advocate is always seeking their purpose. Once they&apos;ve found
        it, they strive to do it justice. At the start of the game, pick a
        purpose from:
      </TypographyP>
      <TypographyUnorderedList>
        <li>Protect _ from _ at all costs</li>
        <li>Exact vengeance on _ for _</li>
        <li>Overcome your personal failing to _</li>
        <li>Form a deep connection with _</li>
      </TypographyUnorderedList>
      <TypographyP>
        While in direct pursuit of your purpose, take <strong>-1 stress</strong>{' '}
        to push yourself or assist a teammate. If you betray your purpose, mark
        a<strong>condition</strong>. When you complete your purpose, mark{' '}
        <strong>1 xp</strong> and choose a new purpose.
      </TypographyP>
    </div>
  );
}
