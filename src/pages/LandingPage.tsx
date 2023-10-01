import React from "react";
import { Container } from "../common/ui";

const LandingPage = (): React.ReactNode => {
  return (
    <Container.Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Full-Stack Developer, fitness enthusiast, and partime explorer.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m Rasil, a Full-Stack developer based in Nepal. I have been working
          as a full-time software developer for over 3 years and my dream is to
          work on projects that touches and brings positive impact on lives of
          millions of people.
        </p>
      </div>
    </Container.Container>
  );
};

export default LandingPage;
