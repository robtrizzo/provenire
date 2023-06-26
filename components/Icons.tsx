import { LucideProps, UserPlus } from 'lucide-react';

export const Icons = {
  Logo: (props: LucideProps) => <></>, // TODO add logo
  UserPlus,
};

export type Icon = keyof typeof Icons;
