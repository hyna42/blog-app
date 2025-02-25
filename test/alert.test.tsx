import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MyAlertDialog from "../src/components/AlertDialog";

describe("<MyAlertDialog>", () => {
  it("should render the button", () => {
   const {container}  = render(<MyAlertDialog />);

    // Vérifie que le bouton "Show Dialog" est présent
      // expect(screen.getByText("Show Dialog")).toBeDefined();
      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          aria-controls="radix-:r0:"
          aria-expanded="false"
          aria-haspopup="dialog"
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-10 px-4 py-2"
          data-state="closed"
          type="button"
        >
          Show Dialog
        </button>
      `)
  });
});
