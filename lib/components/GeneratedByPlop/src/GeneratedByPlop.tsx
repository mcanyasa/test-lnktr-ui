/* React */
import * as React from "react";

/* Style */

/* Interface & Type definitions */
export interface IGeneratedByPlop {
  role?: string;
}

const GeneratedByPlop: React.FC<IGeneratedByPlop> = ({ ...props }) => {
  return (
    <div className="lt-generated-by-plop" {...props}>
      GeneratedByPlop
    </div>
  );
};

GeneratedByPlop.displayName = "GeneratedByPlop"

export { GeneratedByPlop };
