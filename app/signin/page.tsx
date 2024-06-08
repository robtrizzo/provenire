'use server';
import { LoginForm } from '@/components/blocks/loginForm';

export default async function SignInPage() {
  return (
    <div className="p-12 flex flex-col items-center justify-center">
      <LoginForm />
    </div>
  );
}
