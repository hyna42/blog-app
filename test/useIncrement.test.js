import { describe, it, expect } from "vitest";
import useIncrement from "../src/hooks/useIncrement";
import { act, renderHook } from "@testing-library/react";

describe("useIncrement", () => {
  it("should use the default value", () => {
    const { result } = renderHook(() => useIncrement({ base: 5 }));
    expect(result.current.count).toBe(5);
  });

  it("should increment value", () => {
    const { result } = renderHook(() => useIncrement({ base: 5 }));
    act(() => result.current.increment());
    expect(result.current.count).toBe(6);
  });
});
