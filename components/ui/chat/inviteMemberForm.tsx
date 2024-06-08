'use client';
import { Button } from '../button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { getQueryClient } from '@/components/queryClient';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { inviteToRoom } from '@/actions/rooms';

const formSchema = z.object({
  email: z.string().email(),
});
const queryClient = getQueryClient();

export default function InviteMemberForm({ roomId }: { roomId: string }) {
  const { mutateAsync: server_inviteToRoom, data } = useMutation({
    mutationFn: (email: string) => inviteToRoom({ roomId, email }),
    onError: (error) => {
      console.error('Error inviting member', error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`room-${roomId}`] });
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await server_inviteToRoom(values.email);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center gap-2 mt-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Email" required={true} />
              </FormControl>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit">Invite</Button>
      </form>
    </Form>
  );
}
