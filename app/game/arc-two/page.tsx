import { auth } from "@/auth";
import { AnimatedSpan, TypingAnimation } from "@/components/magicui/terminal";
import Link from "next/link";

export default async function Page() {
  const session = await auth();
  if (!session) {
    <code className="text-red-500">
      <TypingAnimation>Unauthorized Access</TypingAnimation>
    </code>;
  }

  const greeting = `> rootkit -a onboard-operative -n ${
    session?.user?.name || "Unknown"
  }`;

  return (
    <div className="p-6">
      <code className="flex flex-col">
        <TypingAnimation>{greeting}</TypingAnimation>
        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Preflight checks.</span>
        </AnimatedSpan>
        <AnimatedSpan delay={3500}>
          <span>Verifying auth token...</span>
        </AnimatedSpan>
        <AnimatedSpan delay={3800} className="text-green-500">
          <span>✔ Valid.</span>
        </AnimatedSpan>
        <AnimatedSpan delay={4300}>
          <span>Verifying alias...</span>
        </AnimatedSpan>
        <AnimatedSpan delay={4600} className="text-green-500">
          <span>✔ Valid.</span>
        </AnimatedSpan>
        <AnimatedSpan delay={5100}>
          <span>Checking registry...</span>
        </AnimatedSpan>
        <AnimatedSpan delay={6100} className="text-amber-500">
          <span>Trace evidence identified.</span>
        </AnimatedSpan>
        <AnimatedSpan delay={6300}>
          <span>Scrubbing registry...</span>
        </AnimatedSpan>
        <AnimatedSpan delay={6800} className="text-green-500">
          <span>✔ Complete.</span>
        </AnimatedSpan>
        <AnimatedSpan delay={7300}>
          <span>Sending incident report to handler...</span>
        </AnimatedSpan>
        <AnimatedSpan delay={7800} className="text-blue-500">
          <span>ℹ Uploaded 1 file:</span>
          <span className="pl-2">- {session?.user.id}_identity</span>
        </AnimatedSpan>
        <AnimatedSpan delay={8300}>
          <span>Billing account ¤ 1.05...</span>
        </AnimatedSpan>
        <AnimatedSpan delay={9300} className="text-red-500">
          <span>
            Account #{session?.user.image?.split(".")[2].split("/")[3]} has
            insufficient ¤
          </span>
        </AnimatedSpan>
        <AnimatedSpan delay={9800}>
          <span>Extending contract term...</span>
        </AnimatedSpan>
        <AnimatedSpan delay={10100} className="text-green-500">
          <span>✔ Complete.</span>
        </AnimatedSpan>
        <AnimatedSpan delay={10600}>
          <span>Sending incident report to handler...</span>
        </AnimatedSpan>
        <AnimatedSpan delay={11100} className="text-blue-500">
          <span>ℹ Uploaded 1 file:</span>
          <span className="pl-2">- {session?.user.id}_revised_contract</span>
        </AnimatedSpan>
        <AnimatedSpan delay={11600}>
          <span>Checking registry...</span>
        </AnimatedSpan>
        <AnimatedSpan delay={12100} className="text-green-500">
          <span>✔ Complete.</span>
        </AnimatedSpan>
        <TypingAnimation delay={12600} className="text-muted-foreground">
          Success. Operative onboarding complete.
        </TypingAnimation>
        <TypingAnimation delay={14800} className="text-muted-foreground">
          You may now access internal systems.
        </TypingAnimation>
        <AnimatedSpan delay={17000} className="text-green-500 box-reflect">
          <Link href="/game/arc-two/introduction">
            <u>Proceed {">"}</u>
          </Link>
        </AnimatedSpan>
      </code>
    </div>
  );
}
