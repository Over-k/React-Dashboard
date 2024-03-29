import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";

export default function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);
  return (
    <Breadcrumbs>
      <Link to="./" className="opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>
      {pathSegments.map((segment, index) => {
        const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLastSegment = index === pathSegments.length - 1;
        return (
          <div key={segment}>
            {isLastSegment ? (
              <Link
                to={url}
                onClick={(e) => {
                  e.preventDefault();
                }}>
                {segment}
              </Link>
            ) : (
              <span className="opacity-60">{segment}</span>
            )}
          </div>
        );
      })}
    </Breadcrumbs>
  );
}
