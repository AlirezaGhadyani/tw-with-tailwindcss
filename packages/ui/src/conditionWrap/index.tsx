import { ReactNode } from "react";

export default function ConditionWrap({
  condition,
  wrap,
  children,
}: {
  condition: any;
  wrap: any;
  children: ReactNode;
}) {
  return condition ? wrap(children) : children;
}
