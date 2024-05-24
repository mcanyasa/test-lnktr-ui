import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MyTest } from "../Test";

describe("Test", () => {
  it("Test snapshot test", () => {
    const wrapper = render(<MyTest />);
    expect(wrapper).toMatchSnapshot();
  });
});

