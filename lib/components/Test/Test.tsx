/* React */
import * as React from "react";

/* Style */

/* Interface & Type definitions */
export interface ITest {
  role?: string;
}

const MyTest: React.FC<ITest> = ({ ...props }) => {
  return (
    <div className={"lnktr-test"} {...props}>
      Test
    </div>
  );
};

MyTest.displayName = "Test"

export { MyTest };
