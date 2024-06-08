import Navbar from '@/components/navbar';
import { TypographyH1 } from '@/components/ui/typography';
export default function Page() {
  return (
    <Navbar>
      <div className="p-4">
        <TypographyH1>Closed Alpha</TypographyH1>
        <p>
          The chat features on this site are in closed alpha. Thank you for your
          understanding!
        </p>
      </div>
    </Navbar>
  );
}
