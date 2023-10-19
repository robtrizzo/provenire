import Donum from '@/components/Donum';
import Next from '@/components/Next';
import Previous from '@/components/Previous';
import Link from 'next/link';
export default function Cumeria() {
  return (
    <>
      <h1>Cumeria</h1>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/setting/first_age/cumeria"
          className="no-underline py-4 px-8 border-2 border-black rounded-md bg-slate-900 hover:bg-slate-800 transition-colors flex items-center gap-2 text-white"
        >
          Cumeria in the First Age
        </Link>
      </div>
      <h2>Divided We Fell</h2>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <p>
            After the <strong>Departure</strong>, most of the tribes of{' '}
            <strong>Cumeria</strong> no longer wished to live the{' '}
            <strong>Anidinian</strong> way. And in winning the{' '}
            <strong>Succession War</strong>, or the{' '}
            <strong>Anidinian Civil War</strong> as the{' '}
            <strong>Anidinians</strong> call it, <strong>Cumeria</strong> was
            independant once again. The tribes parted ways to go back to their
            traditional territories.
          </p>
          <p>
            But more war was yet to come. After the{' '}
            <strong>Succession War</strong>, the tribes were weakened.{' '}
            <strong>Kingwulf</strong> of <strong>Fenrir</strong> knew this, and
            launched his invasion into the <strong>Titan Pines</strong>. Without
            strong leadership, the <strong>Cumerians</strong> fought a
            retreating war, eventually stemming the tide of ravenous wolves, but
            they had lost so much.
          </p>
          <p>
            At the end of the two wars, <strong>Cumeria</strong> had lost half
            of its territory.
          </p>
        </div>
        <div className="w-1/2 h-fit p-4 bg-rose-950 div-2 box-border border-t-2 border-b-2 text-white">
          <h6>Conserve and Defend</h6>
          <p>
            Despite the named wars being over, the{' '}
            <strong className="text-white">Cumerian</strong> tribes still fight
            vigorously to keep what land they have left.{' '}
            <strong className="text-white">Fenrir's</strong> beasts to the
            South, <strong className="text-white">Anidine's</strong> war-hungry
            nobility to the North,{' '}
            <strong className="text-white">Bwarhein</strong> monsters to the
            East. <strong className="text-white">Cumeria</strong> has been in a
            difficult position for a long time. But even with this, the tribal
            leaders have forever failed to form a meaningful alliance to fight
            hteir enemies on a united front. Conflicts between tribes, long
            blood feuds, and a general dispassion for the troubles of other
            tibes: the very things{' '}
            <strong className="text-white">Asherah the Healer</strong> had
            taught them to overcome were the things bringing them to ruin. The
            people of the northern and southern tribes pray for the day a united{' '}
            <strong className="text-white">Cumeria</strong> comes, so that they
            may know a life without war.
          </p>
        </div>
      </div>
      <h2>Legendary Warriors</h2>
      <p>
        <strong>Cumeria</strong> may be in a difficult spot, but it continues to
        persist because of the sheer strength of it's fighters.{' '}
        <strong>Astolfo</strong>, <strong>Asherah's</strong> mythical griffon
        steed, sired a line of griffons which grow to be even larger and
        stronger than most drakes.
      </p>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <p>
            As more <strong>Cumerians</strong> gained <em>Donums</em>, their
            ability to be reckless in battle grew. And with this recklessness
            came one of their ultimate weapons: <em>Adamantine Paladins</em>.
            The <strong>Cumerians</strong> on the southern border discovered
            that if a child is fed powdered adamantine in the youth, they grow
            to excessive strength in adulthood. The only drawback is that these{' '}
            <em>Paladins</em> are short lived, as the metal poisons their
            bodies. But, this is no barrier for the most talented doctors in the
            world. As long as a <em>Paladin</em> has access to treatment from{' '}
            <Donum>Donum Vitae</Donum>, they will continue to live as long as
            they would normally.
          </p>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 div-2 box-border border-t-2 border-b-2 text-white">
          <h6>Season of Power</h6>
          <p>
            One of the many ways the{' '}
            <strong className="text-white">New Gods</strong> changed the world
            was the advent of seasons. Winter was the most amazing to the world
            - falling water seemed impossible. Perhaps no one should have been
            surprised when <Donum>Donum Heims</Donum> emerged.
          </p>
          <ul className="list-none">
            <li>
              <Donum>Donum Denieth</Donum>: The Gift of Denial
            </li>
            <li>
              <Donum>Donum Heims</Donum>: The Gift of Winter
            </li>
            <li>
              <Donum>Donum Vitae</Donum>: The Gift of Vitality
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row mt-2">
        <Previous href="/setting/bwarhei" text="Bwarhei" />
        <Next href="/setting/second_age/fenrir" text="Fenrir" />
      </div>
    </>
  );
}
