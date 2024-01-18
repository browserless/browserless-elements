import React from "react";

export default function useOuterClick(callback?: Function) {
  const innerRef = React.useRef();
  const callbackRef = React.useRef();

  // set current callback in ref, before second useEffect uses it
  React.useEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    // @ts-ignore
    callbackRef.current = callback;
  });

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    // read most recent callback and innerRef dom node from refs
    function handleClick(e: any) {
      if (
        innerRef.current &&
        callbackRef.current &&
        // @ts-ignore
        !innerRef.current.contains(e.target)
      ) {
        // @ts-ignore
        callbackRef.current(e);
      }
    }
  }, []); // no need for callback + innerRef dep

  return innerRef as unknown as React.LegacyRef<HTMLDivElement>; // return ref; client can omit `React.useRef`
}
