import { Children, PropsWithChildren } from "react";
import { RealmProvider } from "@realm/react";
import { Task } from "../models/Task";
import React from "react";

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return <RealmProvider schema={[Task]}>{children}</RealmProvider>;
}
