import React from "react";

export default function useOuterClick<T extends HTMLElement>(callback?: Function) {
  const innerRef = React.useRef<T>(null);
  const callbackRef = React.useRef(callback);

  // set current callback in ref, before second useEffect uses it
  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    // read most recent callback and innerRef dom node from refs
    function handleClick(e: MouseEvent) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.currentTarget as Node)
      ) {
        callbackRef.current(e);
      }
    }
  }, []); // no need for callback + innerRef dep

  return innerRef; // return ref; client can omit `useRef`
}
