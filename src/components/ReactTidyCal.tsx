import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    TidyCal: any;
  }
}

type ReactTidyCalProps = {
  path: string;
};

const ReactTidyCal: React.FC<ReactTidyCalProps> = ({ path }) => {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net//js/embed.js";
    script.async = true;
    script.onload = () => {
      window.TidyCal.init(embedRef.current);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [embedRef.current]);

  return <div id="tidycal-embed" data-path={path} ref={embedRef} />;
};

export default ReactTidyCal;
