'use server';
import { LoginForm } from '@/components/login-form';

export default async function SignInPage() {
  return (
    <div className="p-12">
      <div className="pt-12 flex flex-col items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
