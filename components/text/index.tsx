import * as React from "react";
import { TextProps } from "@/app/components/types";

const Text = ({ className, variant, children }: TextProps) => {
  return (
    <span>
      {variant === "sigle" && typeof children === "string" ? (
        children.split("").map((data, index) => (
          <span className={className!} key={index}>
            {data}
          </span>
        ))
      ) : (
        <span className={className!}>{children}</span>
      )}
    </span>
  );
};

export default Text;
