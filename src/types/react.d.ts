declare module "react" {
  export type ReactNode = any;
  export type CSSProperties = Record<string, string | number>;
  export type FC<P = {}> = (props: P & { children?: ReactNode }) => ReactNode;
  export type FormEvent<T = Element> = { target: T } & Event;
  export function useState<S>(initialState: S | (() => S)): [S, (value: S | ((prev: S) => S)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: unknown[]): void;
  export function useMemo<T>(factory: () => T, deps: unknown[]): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: unknown[]): T;
  export function forwardRef<T, P = {}>(render: (props: P, ref: any) => ReactNode): any;
}

declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}
