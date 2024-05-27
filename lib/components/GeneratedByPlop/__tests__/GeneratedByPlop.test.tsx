import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GeneratedByPlop } from "../src/GeneratedByPlop";

describe("GeneratedByPlop", () => {
  it("GeneratedByPlop snapshot test", () => {
    const wrapper = render(<GeneratedByPlop />);
    expect(wrapper).toMatchSnapshot();
  });
});

