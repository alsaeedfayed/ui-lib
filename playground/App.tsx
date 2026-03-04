import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

export default function App() {
  const [progress, setProgress] = useState(30);

  return (
    <div className="min-h-screen bg-background text-foreground p-10 space-y-10">
      <h1 className="text-3xl font-bold">UI Lib Playground</h1>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🔍</Button>
        </div>
        <div className="flex gap-3">
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Progress */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-xl font-semibold">Progress</h2>
        <Progress value={progress} />
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setProgress(Math.max(0, progress - 10))}
          >
            -10
          </Button>
          <span className="text-sm self-center">{progress}%</span>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setProgress(Math.min(100, progress + 10))}
          >
            +10
          </Button>
        </div>
      </section>
    </div>
  );
}
