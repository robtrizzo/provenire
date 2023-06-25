import { db } from '@/lib/db';
import Button from '@/components/Button';

export default async function Messages() {
  await db.set('hello', 'hello');
  return <Button>hello</Button>;
}
