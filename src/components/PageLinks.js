import React from "react";

const PageLinks = (props) => {
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
          // <iframe
          //   id="ytplayer"
          //   title={name}
          //   type="text/html"
          //   width="640"
          //   height="360"
          //   src={href}
          //   frameborder="0"
          // ></iframe>
        ))}
    </>
  );
};

export default PageLinks;
