import React from "react"

// Import SVG assets
import instagramLogoUrl from "/src/assets/logos/instagram-logo.svg"
import snapchatLogoUrl from "/src/assets/logos/snapchat-logo.svg"
import youtubeLogoUrl from "/src/assets/logos/youtube-logo.svg"
import tiktokLogoUrl from "/src/assets/logos/tiktok-logo.svg"
import locationMarkerUrl from "/src/assets/logos/location-marker.svg"
import threeDotsVerticalUrl from "/src/assets/logos/three-dots-vertical.svg"

interface ImageIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string // Ensure alt is always provided
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

export const ThreeDotsVerticalIcon: React.FC<ImageIconProps> = (props) => (
  <img src={threeDotsVerticalUrl} {...props} />
)
