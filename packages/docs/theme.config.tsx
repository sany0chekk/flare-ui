import React from "react";

const config = {
  logo: <span>Flare UI</span>,
  project: {
    link: "https://github.com/sany0chek/flare-ui",
  },
  docsRepositoryBase: "https://github.com/sany0chek/flare-ui",
  footer: {
    text: "Flare UI Documentation",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Flare UI",
    };
  },
};

export default config;
