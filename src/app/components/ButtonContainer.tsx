"use client";

import { Button } from "./Button";

/**
 * This is a component with interactivity, so it needs to have "use client" at
 * the top of the file. But you can still _use_ it in a server-rendered page
 * component like hello/page.tsx and the button will be part of the statically
 * rendered HTML. Will this cause race conditions with the hydration? If I click
 * the button really fast, as soon as the page loads, might I trigger the button
 * before the onclick handler is registered, and then it won't do anything?
 * Probably, right?
 */
export function ButtonContainer() {
  return <Button onClick={() => console.log("Hello")}>Hello</Button>;
}
