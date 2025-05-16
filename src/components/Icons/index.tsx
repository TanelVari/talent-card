import React from "react"

// Import SVG assets
import instagramLogoUrl from "/src/assets/logos/instagram-logo.svg"
import snapchatLogoUrl from "/src/assets/logos/snapchat-logo.svg"
import youtubeLogoUrl from "/src/assets/logos/youtube-logo.svg"
import tiktokLogoUrl from "/src/assets/logos/tiktok-logo.svg"
import locationMarkerUrl from "/src/assets/logos/location-marker.svg"

interface ImageIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string // Ensure alt is always provided
}

// New interface for inline SVG icons
interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  alt?: string // For accessibility via <title>
}

export const InstagramIcon: React.FC<ImageIconProps> = (props) => (
  <img src={instagramLogoUrl} {...props} />
)

export const SnapchatIcon: React.FC<ImageIconProps> = (props) => (
  <img src={snapchatLogoUrl} {...props} />
)

export const YoutubeIcon: React.FC<ImageIconProps> = (props) => (
  <img src={youtubeLogoUrl} {...props} />
)

export const TiktokIcon: React.FC<ImageIconProps> = (props) => (
  <img src={tiktokLogoUrl} {...props} />
)

export const LocationMarkerIcon: React.FC<ImageIconProps> = (props) => (
  <img src={locationMarkerUrl} {...props} />
)

// Updated ThreeDotsVerticalIcon to be an inline SVG component
export const ThreeDotsVerticalIcon: React.FC<SVGIconProps> = ({
  alt,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props} // Spread props to allow className, width, height, etc.
  >
    {alt && <title>{alt}</title>}{" "}
    {/* Accessibility: maps alt to a <title> element */}
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
  </svg>
)
