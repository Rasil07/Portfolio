import React, { useEffect, useRef } from "react";
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

const SocialMediaList = ({
  className = "",
}: {
  className: string;
}): React.ReactNode => {
  return (
    <>
      <div className={className}>
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

function TriangularImage({
  imgSrc,
  className,
}: {
  imgSrc: string;
  className: string;
}) {
  return (
    <div
      style={{
        height: "100%",
        filter: "url('#round')",
      }}
      className={className}
    >
      <div
        style={{
          position: "absolute",
          height: "100%",
          background: "black",
          width: "100%",
          zIndex: 1,
          opacity: 0.15,
          clipPath: "polygon(45% 0%, 100% 0%, 100% 100%,0% 100%)",
        }}
      ></div>
      <img
        src={imgSrc || ""}
        alt="Triangular Image"
        style={{
          width: "100%",
          height: "100%",
          clipPath: "polygon(45% 0%, 100% 0%, 100% 100%,0% 100%)",
          objectFit: "cover",
        }}
      />

      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
const LandingPage = (): React.ReactNode => {
  const landingDetailRef = useRef<React.ElementRef<"div">>(null);

  useEffect(() => {
    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value);
    }
    // function removeProperty(property: string) {
    //   document.documentElement.style.removeProperty(property);
    // }
    function updateLandingDetailStyles() {
      const height = window.innerHeight;
      setProperty("--content-height", `${height / 1.5}px`);
    }

    updateLandingDetailStyles();

    window.addEventListener("resize", updateLandingDetailStyles);

    return () => {
      window.removeEventListener("resize", updateLandingDetailStyles);
    };
  }, [landingDetailRef]);

  return (
    <Container.Container className="mt-2">
      <section
        id="intro"
        className="relative pt-11 flex flex-col justify-center"
        style={{
          height: "var(--content-height)",
        }}
      >
        <div className="flex flex-col max-w-3xl justify-center ">
          <p className="mt-6 text-base font-semibold text-green-600">
            Hi! I am Rasil Baidar.
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Full-Stack Developer, fitness enthusiast, and part-time explorer
            &#9996;.
          </h1>
          <p className="mt-6 text-base text-zinc-700">
            I'm Rasil, a Full-Stack developer based in Nepal. I have been
            working as a full-time software developer for over 3 years, and my
            dream is to work on projects that touch and bring a positive impact
            to the lives of millions of people."
          </p>

          <SocialMediaList className="mt-6 flex gap-6" />
        </div>

        <div
          className="absolute top-0 right-0 -z-10"
          style={{ height: "var(--content-height)" }}
        >
          <TriangularImage imgSrc="/img/main_pic.jpg" className="" />
        </div>
      </section>

      {/* <section id="skills">
        <div>
          <p className="">Skill</p>

          <img src="/img/js_logo.png" width={240} height={120} />
        </div>
      </section> */}
    </Container.Container>
  );
};

export default LandingPage;
