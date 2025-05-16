import React from "react"

interface ImageIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string // Ensure alt is always provided
}

export const InstagramIcon: React.FC<ImageIconProps> = (props) => (
  <img src="/src/assets/logos/instagram-logo.svg" {...props} />
)

export const SnapchatIcon: React.FC<ImageIconProps> = (props) => (
  <img src="/src/assets/logos/snapchat-logo.svg" {...props} />
)

export const YoutubeIcon: React.FC<ImageIconProps> = (props) => (
  <img src="/src/assets/logos/youtube-logo.svg" {...props} />
)

export const TiktokIcon: React.FC<ImageIconProps> = (props) => (
  <img src="/src/assets/logos/tiktok-logo.svg" {...props} />
)

export const LocationMarkerIcon: React.FC<ImageIconProps> = (props) => (
  <img src="/src/assets/logos/location-marker.svg" {...props} />
)
