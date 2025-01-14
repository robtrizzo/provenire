import Transition from '@/components/animations/transition';

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Transition>{children}</Transition>;
}
