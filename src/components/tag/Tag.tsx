import React from "react"

interface TagProps {
  tag: string
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  const displayTag = tag.startsWith("#") ? tag : `#${tag}`

  return (
    <div className="inline-flex items-center justify-center px-3 py-0.5 rounded-full border border-tag bg-tag">
      <span className="text-xs font-normal text-secondary">{displayTag}</span>
    </div>
  )
}

export default Tag
