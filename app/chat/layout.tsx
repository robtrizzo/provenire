import Navbar from '@/components/navbar';
import DiceProvider from '@/providers/diceProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DiceProvider>
      <Navbar>{children}</Navbar>
    </DiceProvider>
  );
}
