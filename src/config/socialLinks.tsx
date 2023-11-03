import React from "react";
import { Icons } from "../common/ui";

interface SocialMedia {
  icon: React.FC;
  url: string;
  alt: string;
}

interface SocialMediaList {
  [key: string]: SocialMedia;
}
interface SocialMediaIcons {
  social_media_list: SocialMediaList;
}

const Social_Media_Icons: SocialMediaIcons = {
  social_media_list: {
    linkedIn: {
      icon: (props: Omit<React.SVGProps<SVGSVGElement>, "ref">) => (
        <Icons.LinkedInIcon {...props} />
      ),
      url: "https://www.linkedin.com/in/rasil-baidar/",
      alt: "LinkedIn",
    },
    github: {
      icon: (props: Omit<React.SVGProps<SVGSVGElement>, "ref">) => (
        <Icons.GitHubIcon {...props} />
      ),
      url: "https://github.com/Rasil07",
      alt: "Github",
    },
    upwork: {
      icon: (props: Omit<React.SVGProps<SVGSVGElement>, "ref">) => (
        <Icons.UpworkIcon {...props} />
      ),
      url: "https://www.upwork.com/freelancers/rasilbaidar",
      alt: "Upwork",
    },
  },
};

export default Social_Media_Icons;
