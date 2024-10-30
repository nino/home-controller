"use client";

import React from "react";

export type ButtonProps = Readonly<{
  /**
   * This function is called whenever the button is triggered.
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Child elements of the button. This will usually be a text label and/or an
   * icon.
   */
  children: React.ReactNode;
}>;

/**
 * Reusable styled button component.
 */
export function Button({ onClick, children }: ButtonProps): React.ReactNode {
  return (
    <button
      onClick={onClick}
      className="px-2 border border-black rounded-md focus:outline-black cursor-default active:bg-gray-400"
    >
      {children}
    </button>
  );
}
