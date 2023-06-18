import Donum from '@/components/Donum';
import Next from '@/components/Next';
import Previous from '@/components/Previous';
export default function Bwarhei() {
  return (
    <>
      <h1>Bwarhei</h1>
      <h2>The Monster Hordes</h2>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <p>
            <strong>Bwarhei</strong> has no government or structure to it. The
            only thing defining its borders is the dangerous man-monster hybrids
            which will defend them. In other places in the world, it is uncommon
            for a child to develop powers strong enough to be called a{' '}
            <em>Donum</em>, maybe a third do. In <strong>Bwarhei</strong>, every
            child is a powerful <em>Wielder</em> of{' '}
            <Donum>Donum Portentum</Donum>, the Gift of the Monster. Even more
            significantly, the nature of <Donum>Donum Portentum</Donum>{' '}
            challenges the beliefs of many scholars about how people come about
            their power. The children of <strong>Bwarhei</strong> never drink
            from a <strong>duct</strong>. The subsist solely on the blood of the
            animals they kill.
          </p>
        </div>
        <div className="w-1/2 h-fit p-4 bg-rose-950 div-2 box-border border-t-2 border-b-2 text-white">
          <h6>Vengeance</h6>
          <p>
            Long have the inheritors of <Donum>Donum Portentum</Donum> suffered
            under the genocide of the <strong>Rathi</strong>, and now{' '}
            <strong>Fenrir</strong>. From the ferocity of their forefathers, now
            the monsters have home, a sanctuary from the jaws of the wolf. And
            soon will be the day to show them the suffering of a hundred
            generations.
          </p>
        </div>
      </div>
      <p>
        There are many working theories as to why this may be, but the scholars
        need more information, to study the phenomenon more closely. But{' '}
        <strong>Bwarhei</strong> is not for scholars and academics. Only the
        savage and the ruthless can survive in its monster-infested jungles.
      </p>
      <h2>Blood War</h2>
      <p>
        <strong>Bwarhei</strong> has been at war with both{' '}
        <strong>Fenrir</strong> and <strong>Cumeria</strong> for the last four
        hundred years. The <strong>Bwarhein</strong> were able tos ecure their
        current borders in a mad scramble after the <strong>New Gods'</strong>{' '}
        departure, and the scramble has never ended. Without a structured
        military, the <strong>Bwarhein</strong> warriors rely on the sheer
        berserk strength of their bretheren to defend the border. They are
        birthed in blood, survive by blood, and die by blood. They will not have
        their land taken from them. Every last <strong>Bwarhein</strong> will be
        dead before they give in.
      </p>
      <div className="flex flex-row mt-2">
        <Previous href="/setting/second_age/argos" text="Argos" />
        <Next href="/setting/second_age/cumeria" text="Cumeria" />
      </div>
    </>
  );
}
