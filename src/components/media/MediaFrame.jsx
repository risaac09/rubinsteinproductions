import { useState } from 'react'
import './MediaFrame.css'

/**
 * MediaFrame — universal media slot.
 * Renders an image, a video, or an intentional placeholder frame.
 * Below the frame: slate metadata, caption (Garamond italic), credit.
 *
 * Pulls config from a media manifest entry. Swapping real media later
 * means editing src/data/media.js, not this component.
 */
export default function MediaFrame({
  entry,
  aspect: aspectOverride,
  tone = 'light',
  showMeta = true,
  className = '',
  priority = false,
}) {
  if (!entry) return null

  const {
    type = 'placeholder',
    src,
    poster,
    alt = '',
    caption,
    credit,
    slate,
    aspect = '4-5',
    placeholder = !src,
    duration,
    label,
  } = entry

  const aspectClass = `aspect aspect-${aspectOverride || aspect}`
  const captionTone = tone === 'dark' ? 'frame-caption--invert' : ''

  return (
    <figure className={`media-frame media-frame--${tone} ${className}`}>
      <div className={aspectClass}>
        {placeholder || type === 'placeholder' ? (
          <PlaceholderFrame label={label || alt} />
        ) : type === 'video' ? (
          <video
            src={src}
            poster={poster}
            preload={priority ? 'auto' : 'metadata'}
            muted
            playsInline
            controls
            aria-label={alt}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        )}
      </div>

      {showMeta && (slate || caption || credit) && (
        <figcaption className="media-frame-meta">
          {slate && (
            <div className="slate media-frame-slate">
              {slate.split('·').map((part, i, arr) => (
                <span key={i}>
                  {part.trim()}
                  {i < arr.length - 1 && <span className="slate-sep" aria-hidden="true" />}
                </span>
              ))}
              {duration && (
                <span className="media-frame-duration">{formatDuration(duration)}</span>
              )}
            </div>
          )}
          {caption && <p className={`frame-caption ${captionTone}`}>{caption}</p>}
          {credit && <p className="frame-credit">{credit}</p>}
        </figcaption>
      )}
    </figure>
  )
}

function PlaceholderFrame({ label }) {
  return (
    <div className="placeholder-frame">
      <div className="placeholder-frame-corner placeholder-frame-corner--tl" />
      <div className="placeholder-frame-corner placeholder-frame-corner--tr" />
      <div className="placeholder-frame-corner placeholder-frame-corner--bl" />
      <div className="placeholder-frame-corner placeholder-frame-corner--br" />

      <div className="placeholder-frame-content">
        <p className="placeholder-frame-label">Awaiting media</p>
        {label && <p className="placeholder-frame-subject">{label}</p>}
      </div>
    </div>
  )
}

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60)
  const s = String(seconds % 60).padStart(2, '0')
  return `${m}:${s}`
}
