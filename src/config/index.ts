interface SocialMedia {
  iconPath: string;
  url: string;
}

interface SocialMediaList {
  [key: string]: SocialMedia;
}
interface AppConfig {
  social_media_list: SocialMediaList;
}

const APP_CONFIG: AppConfig = {
  social_media_list: {
    linkedIn: {
      iconPath: "",
      url: "https://www.linkedin.com/in/rasil-baidar/",
    },
    github: {
      iconPath: "",
      url: "https://github.com/Rasil07",
    },
  },
};

export default APP_CONFIG;
