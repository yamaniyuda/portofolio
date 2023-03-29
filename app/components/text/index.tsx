import * as React from "react";
import { TextProps } from "@/app/components/types";

const Text = ({ className, variant, children }: TextProps) => {
  let text
  if (variant === "sigle") {
    console.log('masuk sini')
    text = children.split("").map((data, index) => (
      <span className={className!} key={index}>
        {data}
      </span>
    ));
  } else {
    text = <span className={className!}>{children}</span>;
  }
  return <div>{text}</div>;
};

export default Text;
