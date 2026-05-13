import { useEffect, useRef, useState } from 'react'
import './AudioMoment.css'

/**
 * AudioMoment — a transcript-led sound quote with user-initiated playback.
 *
 * Always foregrounds the spoken text. The audio is optional; if no src is
 * given (or audio fails to load), the play control degrades to a clearly
 * labeled placeholder. Never autoplays.
 */
export default function AudioMoment({
  quote,
  attribution,
  transcript,
  src,
  duration = 0,
  label = 'Field audio',
  tone = 'light',
  className = '',
}) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [audioReady, setAudioReady] = useState(false)
  const [audioFailed, setAudioFailed] = useState(false)

  useEffect(() => {
    if (!src) return
    const a = audioRef.current
    if (!a) return

    const onTime = () => {
      if (a.duration > 0) setProgress(a.currentTime / a.duration)
    }
    const onEnd = () => {
      setPlaying(false)
      setProgress(0)
      a.currentTime = 0
    }
    const onReady = () => setAudioReady(true)
    const onError = () => setAudioFailed(true)

    a.addEventListener('timeupdate', onTime)
    a.addEventListener('ended', onEnd)
    a.addEventListener('loadedmetadata', onReady)
    a.addEventListener('error', onError)
    return () => {
      a.removeEventListener('timeupdate', onTime)
      a.removeEventListener('ended', onEnd)
      a.removeEventListener('loadedmetadata', onReady)
      a.removeEventListener('error', onError)
    }
  }, [src])

  const toggle = () => {
    const a = audioRef.current
    if (!a || audioFailed) return
    if (playing) {
      a.pause()
      setPlaying(false)
    } else {
      const p = a.play()
      if (p?.catch) p.catch(() => setAudioFailed(true))
      setPlaying(true)
    }
  }

  const handleKey = e => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      toggle()
    }
  }

  const seek = e => {
    const a = audioRef.current
    if (!a || !audioReady) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    a.currentTime = pct * a.duration
    setProgress(pct)
  }

  const bars = waveformBars(48, src || quote || 'rp')
  const hasAudio = Boolean(src) && !audioFailed
  const totalDuration = audioReady ? audioRef.current?.duration || duration : duration

  return (
    <figure className={`audio-moment audio-moment--${tone} ${className}`}>
      <div className="audio-moment-frame">
        <header className="audio-moment-meta">
          <p className="frame-index frame-index--amber">{label}</p>
          <span className="rule-thin audio-moment-rule" aria-hidden="true" />
          {totalDuration > 0 && (
            <p className="frame-index audio-moment-duration">
              {formatTime(audioReady ? (audioRef.current?.currentTime || 0) : 0)} / {formatTime(totalDuration)}
            </p>
          )}
        </header>

        <blockquote className="audio-moment-quote">
          <p>{quote}</p>
        </blockquote>

        {attribution && (
          <p className="frame-credit audio-moment-attribution">{attribution}</p>
        )}

        <div className="audio-moment-controls">
          <button
            type="button"
            className={`audio-moment-play${playing ? ' audio-moment-play--playing' : ''}`}
            onClick={toggle}
            onKeyDown={handleKey}
            disabled={!hasAudio}
            aria-label={
              !hasAudio ? 'Audio not yet available' : playing ? 'Pause field audio' : 'Play field audio'
            }
          >
            <span className="audio-moment-play-icon" aria-hidden="true">
              {playing ? <PauseIcon /> : <PlayIcon />}
            </span>
            <span className="audio-moment-play-text">
              {!hasAudio ? 'Awaiting audio' : playing ? 'Pause' : 'Play'}
            </span>
          </button>

          <button
            type="button"
            className="audio-moment-waveform"
            onClick={seek}
            disabled={!audioReady}
            aria-label="Audio progress; click to seek"
          >
            {bars.map((h, i) => {
              const filled = i / bars.length <= progress
              return (
                <span
                  key={i}
                  className={`audio-moment-bar${filled ? ' audio-moment-bar--filled' : ''}`}
                  style={{ height: `${h}%` }}
                  aria-hidden="true"
                />
              )
            })}
          </button>
        </div>

        {src && (
          <audio ref={audioRef} src={src} preload="metadata" />
        )}
      </div>

      {transcript && (
        <details className="audio-moment-transcript">
          <summary>
            <span className="frame-index">Transcript</span>
            <span className="audio-moment-transcript-cue" aria-hidden="true">+</span>
          </summary>
          <p>{transcript}</p>
        </details>
      )}
    </figure>
  )
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 1.5L12 7L2 12.5V1.5Z" fill="currentColor" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <rect x="0" y="1" width="4" height="12" fill="currentColor" />
      <rect x="8" y="1" width="4" height="12" fill="currentColor" />
    </svg>
  )
}

/** Deterministic, organic-looking bar pattern from a seed string. */
function waveformBars(count, seed) {
  const s = String(seed)
  const out = []
  let x = 0
  for (let i = 0; i < s.length; i++) x = (x * 31 + s.charCodeAt(i)) >>> 0
  for (let i = 0; i < count; i++) {
    x = (x * 1664525 + 1013904223) >>> 0
    const base = 22 + (x % 60)
    const mod = Math.sin(i * 0.42 + (x & 0xff) * 0.01) * 18
    out.push(Math.max(10, Math.min(98, base + mod)))
  }
  return out
}

function formatTime(s) {
  if (!s || !isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  const r = Math.floor(s % 60).toString().padStart(2, '0')
  return `${m}:${r}`
}
