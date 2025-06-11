import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyP,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Game", href: "/game" },
          { name: "Arc Two", href: "/game/arc-two" },
          { name: "Introduction", href: "/game/arc-two/introduction" },
        ]}
      />
      <TypographyH1 className="font-cyber">Arc Two: Root</TypographyH1>
      <TypographyP className="font-cyber">
        Welcome to <b>Root</b>.
      </TypographyP>
      <TypographyP>
        You&apos;re one of the lucky few individuals selected to join my hounds:
        and one of the most elite teams in the kingdom. Your identity is a
        precious secret which we will guard with care. Our first protocol was to
        shelve your memory before you joined us. You knew this when you signed
        up; and it will be returned to you when you retire.
      </TypographyP>
      <TypographyP>
        My name is <b className="font-cyber">Osgrot</b>. I lead operations
        command. I&apos;ll be the one getting you up to speed on what you need
        to know before your first op. Before we get started, you may be
        wondering how you can understand me if you have no memories. This is why
        it&apos;s called <i>shelving</i>. They&apos;re not gone, just
        inaccessible.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        Ambrosia Medical proudly leads the field of memory shelving technology.
        You can&apos;t put a price on mental health.
      </TypographyBlockquote>
      <TypographyP>
        We aren&apos;t going to disclose your past for obvious reasons, but we
        did take note of one thing when you joined: your goal sum. This is the
        amount of <span className="font-cyber">Pelts</span> and{" "}
        <span className="font-cyber">Favors</span> you said you wanted to make
        in your time with <b className="font-cyber">Root</b>. We will not be
        disclosing your justifications, if any. If you have questions or
        concerns related to your memories or pay, reach out to{" "}
        <b className="font-cyber">Winith</b>, our head of HR and Wellness.
      </TypographyP>
      <TypographyP>
        Let&apos;s start with the basics. Today is{" "}
        <span className="font-cyber">Restday Winter 45th, 1056 P.S.</span>{" "}
        You&apos;re in <b className="font-cyber">Feasting</b> city: the crown
        jewel of Kingwulf&apos;s Western territories. Kingwulf is your God. He
        is all powerful, wrathful, and merciful. Everything we have is because
        of him. Devote your life to making him proud and you will be rewarded.
      </TypographyP>
      <TypographyP>
        If you have questions regarding faith or spirituality, reach out to{" "}
        <b className="font-cyber">Delfon</b>, his majesty&apos;s emmisary to our
        corporation.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        OverCorp proudly presents our Royal Emmisary Experience. Because every
        business deserves Kingwulf&apos;s personal touch.
      </TypographyBlockquote>
      <TypographyP>
        You work for <b className="font-cyber">Root</b>, a subsidiary of{" "}
        <b className="font-cyber">Cytech Solutions</b>, a subsidiary of{" "}
        <b className="font-cyber">3MI: Multi-Media Magnate International</b>.
        Your cover story is that you are a content creator working in the motion
        capture department of{" "}
        <span className="font-cyber">Cytech Solutions</span>. When you are asked
        who you work for, you say <span className="font-cyber">3MI</span>. But
        never forget, you&apos;re my hound. You work for me.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        Cytech Solutions: bringing you the future of entertainment today.
      </TypographyBlockquote>
      <TypographyP>
        Our job is to protect the kingdom from dangerous insurgents. You will
        have access to top of the line training, equipment, staff, and medical
        facilities. I expect you to perform at the highest level.
      </TypographyP>
      <TypographyP>
        Secondarily, but equally important to our branch manager, is the content
        creation part of your job. You will be outfitted with full body motion
        capture sensors as well as recording devices. When you get into
        conflicts, it&apos;s imporant to be entertaining, flashy, and embrace
        moments of drama. If you have questions related to content cretion,
        reach out to <b className="font-cyber">Felicity</b>, our media
        coordinator.
      </TypographyP>
      <TypographyP>
        That wraps up the initial briefing. You have access to internal company
        systems and wikis if you want to learn more about any particular
        subjects. Rest up. Training starts tomorrow.
      </TypographyP>
    </>
  );
}
