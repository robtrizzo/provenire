import Link from 'next/link';
import Donum from '@/components/Donum';
import Next from '@/components/Next';
export default function Game() {
  return (
    <>
      <h1>Introduction to Provenire</h1>
      <p>
        The word <Donum>Provenire</Donum> is Latin, and has a cluster of
        meanings. To <strong>derive</strong> or <strong>originate</strong> from;
        to <strong>come</strong> from <strong>an implied location</strong>; to{' '}
        <strong>descend</strong> from; to <strong>arise</strong>; to{' '}
        <strong>come forth</strong>.
      </p>
      <p>
        <Donum>Provenire</Donum> is both a setting and a system. The system is a
        narrative-focused and rules-light system based heavily on{' '}
        <strong>Masks</strong> and <strong>Blades in the Dark</strong>. The
        setting is a world with very alien forces and natural laws at play, and
        barely understood by the people who live in it.
      </p>
      <div className="flex flex-row mt-2">
        <Next href="/game/basic_rules" text="Basic Rules" />
      </div>
    </>
  );
}
