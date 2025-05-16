import React from "react"
import Tag from "../tag"
import {
  InstagramIcon,
  SnapchatIcon,
  YoutubeIcon,
  TiktokIcon,
  LocationMarkerIcon,
} from "../Icons"

export interface SocialLink {
  platform: "instagram" | "snapchat" | "youtube" | "tiktok"
  url: string
  followers: number // Changed from string to number
}

export interface Persona {
  id: string
  name: string
  avatarUrl: string
  location: string
  age: number
  pronouns: string
  bio: string
  tags: string[]
  socialLinks: SocialLink[]
}

interface CardProps {
  persona: Persona
}

const socialIconMap = {
  instagram: InstagramIcon,
  snapchat: SnapchatIcon,
  youtube: YoutubeIcon,
  tiktok: TiktokIcon,
}

// Moved formatFollowersCount function here
const formatFollowersCount = (count: number): string => {
  if (count < 10000) {
    return count.toString() // e.g., 9999
  }
  if (count < 100000) {
    return (count / 1000).toFixed(1) + "K" // e.g., 12.3K, 98.7K
  }
  if (count < 1000000) {
    return Math.floor(count / 1000) + "K" // e.g., 123K, 987K
  }
  // Over 1,000,000
  const millions = count / 1000000
  if (Number.isInteger(millions)) {
    return millions.toFixed(0) + "M" // e.g., 1M, 10M
  }
  return millions.toFixed(1) + "M" // e.g., 2.5M
}

const Card: React.FC<CardProps> = ({ persona }) => {
  return (
    <div className="w-full max-w-[600px] mx-auto p-4 bg-card border border-card rounded-xl shadow-lg text-primary">
      {/* Header Section */}
      <div className="flex items-start mb-4">
        <img
          src={persona.avatarUrl}
          alt={`${persona.name}'s avatar`} // Corrected: removed unnecessary escape character
          className="w-24 h-24 rounded-lg mr-4 object-cover flex-shrink-0"
        />
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold text-primary">
            {persona.name}
          </h2>
          <div className="flex items-center text-sm mt-1 flex-wrap">
            <LocationMarkerIcon
              alt="Location marker"
              className="w-4 h-4 mr-1.5 text-location"
            />
            <span className="text-secondary">{persona.location}</span>{" "}
            <span className="mx-1.5 text-secondary">•</span>
            <span className="text-secondary">Age: {persona.age}</span>
            <span className="mx-1.5 text-secondary">•</span>
            <span className="text-secondary">{persona.pronouns}</span>
          </div>
          {/* Social Links - New Row */}
          <div className="flex items-center space-x-4 mt-2">
            {persona.socialLinks.map((link) => {
              const IconComponent = socialIconMap[link.platform]
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-icon-link hover:opacity-80 transition-colors duration-150"
                >
                  <IconComponent
                    alt={`${link.platform} logo`}
                    className="w-6 h-6 text-icon-link"
                  />
                  <span className="ml-1 text-xs font-light text-icon-link">
                    {
                      formatFollowersCount(
                        link.followers
                      ) /* Use function here */
                    }
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <p className="text-sm text-secondary mb-5 leading-relaxed max-h-[5rem] overflow-y-auto">
        {persona.bio}
      </p>

      {/* Tags Section */}
      {persona.tags && persona.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {persona.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Card
