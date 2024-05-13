'use client';

import { useEffect, useState } from 'react';

export default function WhoAmIServerAction({
  onGetUserAction,
}: {
  onGetUserAction: () => Promise<string | null>;
}) {
  const [user, setUser] = useState<string | null>();
  useEffect(() => {
    fetch('/api/whoami')
      .then((res) => res.json())
      .then(({ user }) => setUser(user));
  }, []);
  return <div className="mt-5">Who Am i (server action): {user}</div>;
}
