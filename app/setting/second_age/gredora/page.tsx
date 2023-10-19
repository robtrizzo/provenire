import Donum from '@/components/Donum';
import Next from '@/components/Next';
import Previous from '@/components/Previous';
import Link from 'next/link';
export default function Gredora() {
  return (
    <>
      <h1>Gredora</h1>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/setting/first_age/gredora"
          className="no-underline py-4 px-8 border-2 border-black rounded-md bg-slate-900 hover:bg-slate-800 transition-colors flex items-center gap-2 text-white"
        >
          Gredora in the First Age
        </Link>
      </div>
      <h2>Nomad Armies</h2>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <p>
            Most <strong>Gredorans</strong> still live as their ancestors did:
            following the herds of animals across the plateaus. The difference
            is that back in the <strong>Golden Age</strong>, most caravans were
            civilians focused on crafting and mercantilism. There were very few
            wandering armies back then. But now, nearly every caravan is lead by
            a Merchant-General commanding thousands of troops. For every
            soldier, there are many more civilians, but the armies are still
            massive.
          </p>
        </div>
        <div className="w-1/2 h-fit p-4 bg-rose-950 div-2 box-border border-t-2 border-b-2 text-white">
          <h6>The Failed Empire</h6>
          <p>
            <strong className="text-white">Gredora</strong> is a shadow of its
            former power. The elders recount what their forefathers told them
            about the glory of <strong className="text-white">Gredora</strong>{' '}
            in years past, about how{' '}
            <strong className="text-white">Gredora</strong> was everything from
            the volcanic mounts all the way to the edge of the{' '}
            <strong className="text-white">Titan Pines</strong>.{' '}
            <strong className="text-white">Gredorans</strong> yearn for those
            days, and they quietly resolve it within themselves to bring back
            the might of their people, to be known as the most powerful once
            again.
          </p>
        </div>
      </div>
      <h2>The Iron Pyres</h2>
      <p>
        A twisting and flowing mass of metal, the city is simply one giant spire
        reaching into the sky. Emanating from the spire are monolithic metal
        pyres leading to the two <strong>Life Ducts</strong> closest to the
        city, to light the way for night pilgrimmages.
      </p>
      <div className="flex flex-row gap-2 p-4 bg-slate-900 div-2 box-border border-t-2 border-b-2 text-white">
        <div className="w-1/2">
          <p>
            Paradoxically, while <strong className="text-white">Gredora</strong>{' '}
            as a people have been crippled in the wake of the{' '}
            <strong className="text-white">Departure</strong>, their descendants
            have become flushed with power of new variety and strengths.
          </p>
          <p>
            <strong className="text-white">Gredora</strong> is still a culture
            of metal and fire, but the addition of <Donum>Donum Sangius</Donum>{' '}
            and especially <Donum>Donum Ira</Donum> is troubling to many - what
            is to become of a culture obsessed with rage and blood?
          </p>
        </div>
        <div className="w-1/2">
          <ul className="list-none">
            <li>
              <Donum>Donum Ferro</Donum>: The Gift of Iron
            </li>
            <li>
              <Donum>Donum Fornax</Donum>: The Gift of the Forge
            </li>
            <li>
              <Donum>Donum Fulgur</Donum>: The Gift of Lightning
            </li>
            <li>
              <Donum>Donum Ignis</Donum>: The Gift of Fire
            </li>
            <li>
              <Donum>Donum Ira</Donum>: The Gift of Rage
            </li>
            <li>
              <Donum>Donum Sangius</Donum>: The Gift of Blood
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row mt-2">
        <Previous href="/setting/second_age/fenrir" text="Fenrir" />
        <Next href="/setting/second_age/heia" text="Heia" />
      </div>
    </>
  );
}
