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
 *
 * Well, Claude disagrees:
 *
 *
 * > Let me address the hydration race condition concern:
 * >
 * > No, you won't encounter race conditions with button clicks during hydration
 * > in React. Here's why:
 * >
 * > 1. During server-side rendering, React generates the static HTML with the
 * >    button, but without attached event listeners.
 * >
 * > 2. During hydration on the client side, React:
 * >    - Preserves the existing DOM nodes
 * >    - Attaches event listeners
 * >    - Blocks event handling until hydration is complete
 * >
 * > React specifically prevents event handling during hydration to avoid these
 * > race conditions. Any clicks that occur before hydration completes are
 * > queued and will be processed after hydration finishes.
 * >
 * > This behavior is part of React's design to ensure reliable interactive
 * > behavior during the hydration process.
 */
export function ButtonContainer() {
  return <Button onClick={() => console.log("Hello")}>Hello</Button>;
}
