'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page with experiencia anchor
    router.replace('/#experiencia');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-neutral-600 dark:text-neutral-400">Redirecting...</p>
    </div>
  );
}