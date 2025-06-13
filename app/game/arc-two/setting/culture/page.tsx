import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Game", href: "/game" },
          { name: "Arc Two", href: "/game/arc-two" },
          { name: "Setting", href: "#" },
          { name: "Culture", href: "#" },
        ]}
      />
      <TypographyH1 className="font-cyber">Culture</TypographyH1>
      <TypographyP>
        <b className="font-sans">Kingwulf</b> has held his dominion over the
        known world for more than a millenia. The once-alienated satelite states
        have become assimilated into Rathi culture, making it all the richer.
        The people of Rath now consider themselves a post-race, post-heritage
        society. They are simply Rathi, anything else is a matter of personal
        preference and expression.
      </TypographyP>
      <TypographyH2 className="font-cyber">Blood</TypographyH2>
      <TypographyP>
        <b className="font-sans">Kingwulf&apos;s</b> bloodline reigns supreme.
        The adopted bestial bloodlines (wolves, bears, predatory felines, birds
        of prey) beneath him: bloodline of the wolf above the rest. But even
        further, there is a convoluted matrix of lesser geniologies and
        hierarchies which dictate one&apos;s place in society.
      </TypographyP>
      <TypographyP>
        In the dark ages, this must have been a terribly difficult system to
        navigate. Thankfully with the power of modern technology, your genome is
        mapped at birth and your integraded{" "}
        <span className="font-cyber">H.U.D.</span> will let you know if you
        should be subservient to someone or if they must be to you!
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        OverCorp brings you our flagship product: Social Situational! Never be
        in doubt about your social standing again!
      </TypographyBlockquote>
      <TypographyP>
        <span className="font-cyber">OverCorp</span> funds a team of top
        geniologists to determine what each genetic marker means in the
        hierarchy and how they all interact. They are{" "}
        <b className="font-sans">Kingwulf&apos;s</b> stewards of social
        standing. Of course, <span className="font-cyber">OverCorp</span> is
        dedicated to openness and transparency, so anyone can look up the full
        formula and verify for themselves.
      </TypographyP>
      <TypographyP>
        What&apos;s <i>not</i> included in{" "}
        <span className="font-cyber">OverCorp&apos;s Social Situational</span>{" "}
        is a breakdown of your own genome. This is a premium service offered by{" "}
        <span className="font-cyber">Genlab</span>, a subsidiary of{" "}
        <span className="font-cyber">Vantro Enterprises</span>. For a
        substantial fee, you can learn the precise breakdown of your bloodline
        which belongs to the societies consumed by Rath long ago.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        Genlab presents: Your Blood, Your Story. Tell it your way.
      </TypographyBlockquote>
      <TypographyP>
        Paradoxically, this &quot;subjugated blood&quot; is not a marker which
        lowers your place in the hierarchy. Much the opposite, especially in
        noble circles. It gives you a certain exotic flair, a connection to a
        romatic past and set of aesthetics which set you apart from the common
        Rathi. Some nobility even go so far as to adopt traditions from the
        &quot;subjugated blood&quot; and get modifications to make the
        distinctive features more pronounced. These nobles are called{" "}
        <i>gloats</i>.
      </TypographyP>
      <TypographyH3 className="font-cyber">Transformations</TypographyH3>
      <TypographyP>
        Wolves remain at the top of the bestial hierarchy, though the line has
        become incredibly blurry. Anyone with enough{" "}
        <span className="font-cyber">¤P</span> can buy beast-mod or a full beast
        sleeve. And born wolves can wear sleeves which aren&apos;t wolf at all.{" "}
        <span className="font-cyber">OverCorp</span> does its best to keep a
        handle on this with{" "}
        <span className="font-cyber">Social Situational</span>, but over the
        years this has become less effective. Being a wolf is an aesthetic of
        power. And real power is <span className="font-cyber">¤P</span>.
      </TypographyP>
      <TypographyP>
        This has become further complicated{" "}
        <b className="font-sans">Kingwulf</b> adopting the birds of prey and
        predatory felines into the fold. The least ancient of the adopted
        bloodlines, but philosophers are left wondering if all predatory beasts
        will one day be adopted. It&apos;s not outside the realm of possibility.
      </TypographyP>
      <TypographyP>
        One thing from ages past has remained the same: children born with
        monstrous transformations are unacceptable. Parents of those children
        are forced to choose between emgergency re-sleeving the child or ...
        worse.
      </TypographyP>
      <TypographyH2 className="font-cyber">Technology</TypographyH2>
      <TypographyP>
        You live in the golden age of exponential discovery and advancement.
        Every day, bold new technologies change the shape of society as we know
        it. From nomadic hunters to masters of material and flesh, the Rahi
        Empire has grown to godlike capabilities. And it&apos;s only the
        beginning.
      </TypographyP>
      <TypographyH3 className="font-cyber">PsychX</TypographyH3>
      <TypographyP>
        Perhaps the most impactful technology is pshyche extraction - a chip in
        the nape of the neck which provides a complete backup of your
        conciousness. If your mortal coil is damaged or destroyed, your mind can
        live on in a new sleeve.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        PsychX. Become more than human. Become eternal. PsychX. - Silcana
        Discoveries.
      </TypographyBlockquote>
      <TypographyP>
        It&apos;s considered criminal parental negligence to not chip your child
        at the soonest safe operating age of four months. The residents of{" "}
        <span className="font-cyber">Darling</span> are the only population
        which frequently reject the surgery.
      </TypographyP>
      <TypographyP>
        Where the initial surgery is cheap, each image you want of your mind is
        expensive. Parents are left making the difficult choice of how often to
        pay for one. If the worst case happens, how many years of life will
        their child lose on psyche restoration?
      </TypographyP>
      <TypographyP>
        The wealthy on the other hand, they have the luxury of automatic backups
        every few minutes, or even multiple concurrent backups stored in max
        security vaults.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        Foundation presents the latest and greatest in psyche storage: MindVault
        One. The one place you can feel certain your mind is safe.
      </TypographyBlockquote>
      <TypographyH3 className="font-cyber">Sleeves</TypographyH3>
      <TypographyP>
        Your body is not who you are. You can shed it like a snake sheds its
        skin. You can leave it behind you for something grander, new. Sleeves
        are synthetic bodies which can be host to your psyche. Most of the big
        corps have their own brand of sleeves, or multiples. They range from
        robotic, cybernetic, bestial, or any shape you can imagine.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        Beasttech: your one stop shop for the most badass beast sleeves on the
        market.
      </TypographyBlockquote>
      <TypographyP>
        Of course, the base models with limited function and customization are
        the cheapest. So, most working folk make do with the bodies they were
        born with. If someone is really desperate, they can buy a used bio-body
        from a prison rack or a bio-lease exchange.
      </TypographyP>
      <TypographyP>
        Regardless of the nature of the sleeve, the body mod business is
        immense. From simple aesthetic expressions to productivity-boosting limb
        replacements to full-on warframing, there is no shortage of ways to
        change yourself to suit whatever you need.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        Integra: in-tech-grations you don&apos;t have to think about.
      </TypographyBlockquote>
      <Separator />
      <TypographyP>
        There are many more impactful technologies in{" "}
        <span className="font-cyber">Feasting</span>. Holotech, neural tapping,
        advanced metallurgy and electrotech, tartech, and beyond.
      </TypographyP>
      <TypographyH2 className="font-cyber">Marriage</TypographyH2>
      <TypographyP>
        <b className="font-sans">Kingwulf</b> possesses the right to marry
        anyone. Everyone belongs to him. And so anyone who wants to marry needs{" "}
        <b className="font-sans">Kingwulf&apos;s</b> permission. In the dark
        ages, this was done by frantic glory-seeking and faux proxies granting
        blessings. Society has advanced. Now, you can purchase intimacy,
        relationships, and even marriage rights with Favors{" "}
        <span className="font-cyber">(¤F)</span>.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        OverCorp brings you FavorBank Credit: because it&apos;s not sexy to have
        to wait.
      </TypographyBlockquote>
      <TypographyP>
        Favors aren&apos;t distributed as payment like Pelts{" "}
        <span className="font-cyber">(¤P)</span> are for labor or exchanging
        goods. Favors are earned through good social behavior and contributions
        to society. If you find yourself short on Favors, or a deficit in the
        worst case, you can find yourself in danger from the law.
      </TypographyP>
      <TypographyBlockquote className="font-cyber text-xs">
        Rat-track: helping you enjoy the best part of the hunt - a Beasttech
        product.
      </TypographyBlockquote>
    </>
  );
}
