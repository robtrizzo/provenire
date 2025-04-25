import { clsx, type ClassValue } from "clsx";
import { NextRequest } from "next/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type DebouncedFunction<T extends (...args: unknown[]) => unknown> = (
  ...args: Parameters<T>
) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => unknown>(
  func: T,
  wait: number
): DebouncedFunction<T> {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export const StringUnion = <UnionType extends string>(
  ...values: UnionType[]
) => {
  Object.freeze(values);
  const valueSet: Set<string> = new Set(values);

  const check = (value: string): value is UnionType => {
    return valueSet.has(value);
  };

  const assert = (value: string): UnionType => {
    if (!check(value)) {
      const actual = JSON.stringify(value);
      const expected = values.map((s) => JSON.stringify(s)).join(" | ");
      throw new TypeError(
        `Value '${actual}' is not assignable to type '${expected}'.`
      );
    }
    return value;
  };

  const unionNamespace = { assert, check, values };
  return Object.freeze(
    unionNamespace as typeof unionNamespace & { type: UnionType }
  );
};

export function getQSParamFromURL(key: string, request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  return searchParams.get(key);
}

// split one array into 2, based on the provided func
export function partition<T>(array :T[], filter: (value: T, index: number, array: T[]) => boolean): [T[], T[]] {
  const pass:T[] = [], fail: T[] = [];
  array.forEach((e, idx, arr) => (filter(e, idx, arr) ? pass : fail).push(e));
  return [pass, fail];
}