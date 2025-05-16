import React, { useEffect, useRef } from "react"

export interface DialogProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  // Handle backdrop click
  const handleBackdropClick = () => {
    onClose()
  }

  // Prevent clicks inside the dialog from closing it
  const handleDialogContentClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation()
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-40 bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "dialog-title" : undefined}
    >
      <div
        ref={dialogRef}
        className="bg-page rounded-lg shadow-xl p-6 max-w-xl w-full transition-all duration-300 ease-in-out"
        onClick={handleDialogContentClick}
      >
        {title && (
          <h2
            id="dialog-title"
            className="text-xl font-semibold text-primary mb-4"
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  )
}

export default Dialog
