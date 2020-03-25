import React from "react";
import classes from "../styles/components/linkToSNS.module.scss";

const LinkToSNS = () => {
  const sns = [
    { name: "Twitter", href: "https://twitter.com/nozomiishii_jp" },
    { name: "GitHub", href: "https://github.com/nozomiishii" },
  ];

  return (
    <div className={classes.links}>
      {sns.map(({ name, href }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" key={name}>
          {name.toUpperCase()}
        </a>
      ))}
    </div>
  );
};

export default LinkToSNS;
