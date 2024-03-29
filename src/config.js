export const DOMAIN_NAME = window.location.hostname;

// Reserved keywords for username creation
export const RESERVED_KEYWORDS = [
  "admin",
  "login",
  "register",
  "forgot-password",
  "not-found",
  "admin/not-found",
  "admin/links",
  "admin/analytics",
  "admin/appearance",
  "admin/settings",
];

// Maximum number of created links per user
export const MAX_LINKS = 12;

// Fonts
export const FONTS = [
  "DM Sans",
  "Inter",
  "Montserrat",
  "Nunito Sans",
  "Outfit",
  "Plus Jakarta Sans",
  "Poppins",
  "Roboto",
  "Work Sans",
];

// Social share links for link sharing
export const SOCIAL_SHARE = {
  snapchat: "https://www.snapchat.com/", // Not implemented
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${DOMAIN_NAME}/`,
  linkedin: `https://www.linkedin.com/shareArticle?url=${DOMAIN_NAME}/`,
  whatsapp: `https://api.whatsapp.com/send?text=Check%20this%20out:%20${DOMAIN_NAME}/`,
  messenger: `https://www.facebook.com/dialog/send?link=${DOMAIN_NAME}`,
  email: `mailto:?subject=Check%20this%20out&body=I%20thought%20you%20might%20find%20this%20interesting:%2${DOMAIN_NAME}`,
};

export const SOCIAL_ICONS = [
  "snapchat",
  "instagram",
  "facebook",
  "youtube",
  "tiktok",
  "whatsapp",
];

export const SOCIAL_ICONS_SHARE = {
  snapchat: "https://snapchat.com/",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  youtube: "https://youtube.com/",
  tiktok: "https://tiktok.com/@",
  whatsapp: "https://whatsapp.com/",
};
