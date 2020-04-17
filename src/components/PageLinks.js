import React from "react";

const PageLinks = (props) => {
  console.log("props", props.data);
  return (
    <>
      {props.data &&
        props.data.map(({ name, href }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            key={name}
            className="my-3"
          >
            {name.toUpperCase()}
          </a>
        ))}
    </>
  );
};

export default PageLinks;
