"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md border-destructive/40">
        <CardHeader>
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 shrink-0 text-destructive" />
            <CardTitle className="text-destructive">
              Something went wrong
            </CardTitle>
          </div>
          <CardDescription>
            An error occurred while loading your character sheet. Your data has
            not been lost.
          </CardDescription>
        </CardHeader>
        {error.message && (
          <CardContent>
            <p className="rounded-md bg-muted px-3 py-2 font-mono text-xs text-muted-foreground break-all">
              {error.message}
            </p>
          </CardContent>
        )}
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => window.location.reload()}>
            Reload page
          </Button>
          <Button variant="destructive" onClick={reset}>
            Try again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
