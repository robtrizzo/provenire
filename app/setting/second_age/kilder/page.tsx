import Donum from '@/components/Donum';
import Next from '@/components/Next';
import Previous from '@/components/Previous';
export default function Kilder() {
  return (
    <>
      <h1>Kilder</h1>
      <p>
        <strong>Kilder's</strong> borders have not changed, and much of life in
        the dread swamp is as it was four hundred years ago. Three warbards live
        within its borders, each composed of its subordinate caravans.
      </p>
      <div className="flex flex-row mt-2">
        <Previous href="/setting/second_age/heia" text="Heia" />
        <Next href="/setting/second_age/kipos" text="Kipos" />
      </div>
    </>
  );
}
