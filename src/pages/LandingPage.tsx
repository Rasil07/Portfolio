import React from "react";
import { Container } from "../common/ui";
import { Link } from "react-router-dom";
import Social_Media_Icons from "../config/socialLinks";

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

const SocialMediaList = (): React.ReactNode => {
  return (
    <>
      <div className="flex">
        {Object.keys(Social_Media_Icons.social_media_list).map(
          (social, index) => {
            const { url, icon: Icon } =
              Social_Media_Icons.social_media_list[social];
            return (
              <SocialLink
                key={index}
                target="_blank"
                to={url}
                aria-label="Follow on Twitter"
                icon={Icon}
              />
            );
          }
        )}
      </div>
    </>
  );
};
const LandingPage = (): React.ReactNode => {
  return (
    <Container.Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Full-Stack Developer, fitness enthusiast, and partime explorer.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I'm Rasil, a Full-Stack developer based in Nepal. I have been working
          as a full-time software developer for over 3 years, and my dream is to
          work on projects that touch and bring a positive impact to the lives
          of millions of people."
        </p>

        <SocialMediaList />
      </div>
    </Container.Container>
  );
};

export default LandingPage;
