"use client";

import type { ReactNode } from "react";
import type { Course } from "@/content/types";
import { useProgress } from "@/lib/progress";
import { Dashboard, isReturning } from "./dashboard";

/**
 * The top of the home page: the pitch (children, rendered on the server for search engines and first visits),
 * or, for a learner who has started, their dashboard. Progress lives in the browser, so the switch happens
 * once it is read.
 */
export function HomeGate({ courses, children }: { courses: Course[]; children: ReactNode }) {
  const { state, ready } = useProgress();
  if (ready && isReturning(state)) return <Dashboard courses={courses} state={state} />;
  return <>{children}</>;
}
