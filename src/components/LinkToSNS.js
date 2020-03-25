import React from "react";

const LinkToSNS = () => {
  const sns = [
    { name: "Twitter", href: "https://twitter.com/nozomiishii_jp" },
    { name: "GitHub", href: "https://github.com/nozomiishii" },
  ];

  return (
    <React.Fragment>
      {sns.map(({ name, href }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" key={name}>
          {name.toUpperCase()}
        </a>
      ))}
    </React.Fragment>
  );
};

export default LinkToSNS;
