import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          behavior?: string;
          direction?: string;
          scrollamount?: number;
          height?: number;
          onMouseMove?: React.MouseEventHandler<HTMLElement>;
          onMouseOver?: React.MouseEventHandler<HTMLElement>;
          onMouseOut?: React.MouseEventHandler<HTMLElement>;
        },
        HTMLElement
      >;
    }
  }
}

export {};
