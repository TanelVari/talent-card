import React from "react"
import Tag from "../tag"
import {
  InstagramIcon,
  SnapchatIcon,
  YoutubeIcon,
  TiktokIcon,
  LocationMarkerIcon,
  ThreeDotsVerticalIcon, // Added
} from "../Icons"

export interface SocialLink {
  platform: "instagram" | "snapchat" | "youtube" | "tiktok"
  url: string
  followers: number
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
  layoutFlavor?: "compact" | "normal" | "large" // Added
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

const Card: React.FC<CardProps> = ({ persona, layoutFlavor = "normal" }) => {
  // Conditional classes and styles based on layoutFlavor
  const isCompact = layoutFlavor === "compact"
  const isLarge = layoutFlavor === "large"
  const isNormal = layoutFlavor === "normal"

  const cardMaxWidth = isCompact
    ? "max-w-[320px]"
    : isLarge
    ? "max-w-[600px]"
    : "max-w-[600px]" // Normal also 600px as per last update

  const avatarSize = isCompact
    ? "w-12 h-12"
    : isLarge
    ? "w-32 h-32"
    : "w-24 h-24"

  const socialIconSize = isCompact
    ? "w-4 h-4"
    : isLarge
    ? "w-9 h-9" // Updated for large layout
    : "w-6 h-6"

  const nameTextSize = isCompact ? "text-lg" : "text-2xl"
  const bodyTextSize = isCompact ? "text-xs" : "text-sm"

  // Follower text size based on layout
  const followerTextSize = isCompact
    ? "text-[10px]"
    : isLarge
    ? "text-sm" // Updated for large layout
    : "text-xs"

  // Updated bioMaxHeight, no longer considering compact
  const bioMaxHeight = isNormal ? "max-h-[5rem] overflow-y-auto" : "" // Large has no max height, compact bio is removed

  return (
    <div
      className={`w-full ${cardMaxWidth} mx-auto p-4 bg-card border border-card rounded-xl shadow-lg text-primary flex flex-col relative`}
    >
      {/* Overflow Menu for Compact */}
      {isCompact && (
        <div className="absolute top-2 right-2">
          <button className="p-1 text-secondary hover:text-primary">
            <ThreeDotsVerticalIcon alt="Menu" className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Header Section */}
      <div
        className={`flex ${
          isLarge ? "flex-row items-start text-left" : "items-start"
        } ${!isCompact ? "mb-4" : ""}`}
      >
        <img
          src={persona.avatarUrl}
          alt={`${persona.name}'s avatar`}
          className={`${avatarSize} rounded-lg ${
            isLarge ? "mr-4" : "mr-4" // Changed mr-6 to mr-4 for large, kept mr-4 for normal/compact
          } object-cover flex-shrink-0`}
        />
        <div
          className={`flex-grow ${isLarge ? "flex flex-col items-start" : ""}`}
        >
          <h2
            className={`${nameTextSize} font-semibold text-primary ${
              isCompact ? "mr-8" : ""
            } ${isLarge ? "mb-1" : ""}`}
          >
            {persona.name}
          </h2>

          {/* Metadata & Interests for LARGE layout (second column) */}
          {isLarge && (
            <>
              <div className={`flex items-center ${bodyTextSize} mt-1`}>
                <LocationMarkerIcon
                  alt="Location marker"
                  className="w-4 h-4 mr-1.5 text-location"
                />
                <span className="text-secondary">{persona.location}</span>
              </div>
              <div className={`${bodyTextSize} mt-1 text-secondary`}>
                Age: {persona.age}
              </div>
              <div className={`${bodyTextSize} mt-1 text-secondary`}>
                {persona.pronouns}
              </div>
            </>
          )}

          {/* Metadata for NORMAL layout ONLY */}
          {isNormal && (
            <div
              className={`flex items-center ${bodyTextSize} mt-1 flex-wrap mb-2`}
            >
              <LocationMarkerIcon
                alt="Location marker"
                className="w-4 h-4 mr-1.5 text-location"
              />
              <span className="text-secondary">{persona.location}</span>
              <span className="mx-1.5 text-secondary">•</span>
              <span className="text-secondary">Age: {persona.age}</span>
              <span className="mx-1.5 text-secondary">•</span>
              <span className="text-secondary">{persona.pronouns}</span>
            </div>
          )}

          {/* Social Links for COMPACT layout (inside flex-grow, below name) */}
          {isCompact && (
            <div className="flex items-center space-x-3 mt-2">
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
                      className={socialIconSize}
                    />
                    <span className="ml-1 text-[10px] font-light text-icon-link">
                      {formatFollowersCount(link.followers)}
                    </span>
                  </a>
                )
              })}
            </div>
          )}

          {/* Social Links for NORMAL layout (inside flex-grow, below metadata) */}
          {isNormal && (
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
                      className={socialIconSize} // Should be w-6 h-6
                    />
                    <span className="ml-1 text-xs font-light text-icon-link">
                      {formatFollowersCount(link.followers)}
                    </span>
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Social Links for LARGE layout (separate row, after header, before bio) */}
      {isLarge && (
        <div className="flex items-center justify-between mb-4">
          {" "}
          {/* Changed to justify-between, removed space-x-4 */}
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
                  className={socialIconSize} // Uses updated socialIconSize
                />
                <span
                  className={`ml-1 font-light text-icon-link ${followerTextSize}`}
                >
                  {" "}
                  {/* Uses updated followerTextSize */}
                  {formatFollowersCount(link.followers)}
                </span>
              </a>
            )
          })}
        </div>
      )}

      {/* Bio Section - Show for Normal and Large, height varies */}
      {!isCompact && (
        <p
          className={`${bodyTextSize} text-secondary ${
            isLarge ? "mb-5" : ""
          } leading-relaxed ${bioMaxHeight} ${
            isNormal ? "text-left" : "" // Large defaults to left, Normal explicitly left
          }`}
        >
          {persona.bio}
        </p>
      )}

      {/* Tags Section - Only for Large */}
      {isLarge && persona.tags && persona.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-start">
          {" "}
          {/* Changed to justify-start */}
          {persona.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Card
