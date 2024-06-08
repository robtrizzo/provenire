'use client';
import { Button } from '@/components/ui/button';
import { createMessage } from '@/actions/messages';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useMutation } from '@tanstack/react-query';
import { getQueryClient } from '@/components/queryClient';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  message: z.string().min(1),
});

const queryClient = getQueryClient();

export default function MessageForm({
  roomId,
  className,
}: {
  roomId: string;
  className?: string;
}) {
  const { mutateAsync: server_createMessage, data } = useMutation({
    mutationFn: (message: string) => createMessage(message, roomId),
    onError: (error) => {
      console.error('Error creating message', error);
    },
    onSuccess: () => {
      // todo - analyze if this is worth it. it's a bit overkill rather than wait to
      // receive a message from the pusher event
      // queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await server_createMessage(values.message);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('flex items-center gap-2 m-1', className)}
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input {...field} autoComplete="off" />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Send</Button>
      </form>
    </Form>
  );
}
