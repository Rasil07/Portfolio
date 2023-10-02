import React from "react";
import { Icons } from "../common/ui";

interface SocialMedia {
  icon: React.FC;
  url: string;
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
    },
    github: {
      icon: (props: Omit<React.SVGProps<SVGSVGElement>, "ref">) => (
        <Icons.GitHubIcon {...props} />
      ),
      url: "https://github.com/Rasil07",
    },
  },
};

export default Social_Media_Icons;
