import CharacterSheetProvider from '@/contexts/characterSheetContext';
import RollProvider from '@/contexts/rollContext';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CharacterSheetProvider>
      <RollProvider>{children}</RollProvider>
    </CharacterSheetProvider>
  );
}
