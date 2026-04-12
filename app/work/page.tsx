import { Suspense } from "react";
import WorkClient from "./WorkClient";

export default function WorkPage() {
  return (
    <Suspense fallback={<section className="px-8 md:px-16 pt-20 pb-24" />}>
      <WorkClient />
    </Suspense>
  );
}
