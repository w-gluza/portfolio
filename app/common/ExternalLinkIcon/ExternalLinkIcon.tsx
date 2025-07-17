import { SVGProps } from "react";

type ExternalLinkIconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

export const ExternalLinkIcon = ({
  className,
  width = 12,
  height = 12,
  ...props
}: ExternalLinkIconProps & SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 13v6a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h6m7-4h4m0 0v4m0-4L10 14"
    />
  </svg>
);
