# @browserless/elements

A little small UI library that has browserless' visual identity throught its projects. This will be heavily used in some to-be-released projects. Stay tuned!

## How to use

`npm intall "@browserless.io/elements"` as any other npm package and use it in React:

```jsx
import { Aside, AsideItem, Page } from "@browserless.io/elements";
import React from "react";

import "@browserless.io/elements/dist/elements.css";

export default function() {
  return (
    <div className="App">
      <Aside>
        <AsideItem selected>Home</AsideItem>
        <AsideItem>Docs</AsideItem>
        <AsideItem>Config</AsideItem>
      </Aside>
      <Page>
        Powered by @browserless.io/elements!
      </Page>
    </div>
  );
}

```

> Note: This project is still in beta. Thing will break.
