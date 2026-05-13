/**
 * Media manifest — single source of truth for every visual / audio asset
 * referenced by the site.
 *
 * To swap a placeholder for real production media:
 *   1. Drop the file under /public/media/...
 *   2. Set `src` (and `poster` for video) on the matching entry.
 *   3. Remove `placeholder: true`.
 *   4. Confirm `alt`, `caption`, and `credit` reflect the actual shot.
 *
 * Every entry's `slate` becomes the on-frame metadata (INT/EXT, location, time of day).
 * Every entry's `label` is what shows in placeholder mode as the intended subject.
 *
 * Keep edits in this file. Pages reference entries by id, not by path.
 */

export const media = {
  // ——— HOME ———
  homeHero: {
    id: 'home-hero',
    type: 'video',
    src: null,
    poster: null,
    placeholder: true,
    alt: 'Isaac in mid-conversation; the camera is on the table between them',
    label: 'Camera on table. Two hands. A conversation already underway.',
    slate: 'OPENING · INT · STUDIO · DAY',
    aspect: '21-9',
    duration: 22,
    pageUsage: ['home'],
  },

  homeStripCamera: {
    id: 'home-strip-camera',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'The camera kit before it ships — lens, body, padded case, handwritten note',
    label: 'Camera kit before it ships.',
    slate: 'STILL · INT · STUDIO · DAY',
    aspect: '3-2',
    pageUsage: ['home'],
  },

  homeStripConversation: {
    id: 'home-strip-conversation',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'Two chairs, two coffees, recording light on',
    label: 'Two chairs. Two coffees. The light is on.',
    slate: 'STILL · INT · CLIENT SPACE · DAY',
    aspect: '3-2',
    pageUsage: ['home'],
  },

  homeStripNotes: {
    id: 'home-strip-notes',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'Synthesis document pages, fountain pen, marked transcript',
    label: 'Synthesis pages. Fountain pen. Marked transcript.',
    slate: 'STILL · INT · DESK · NIGHT',
    aspect: '3-2',
    pageUsage: ['home'],
  },

  homeStripDelivery: {
    id: 'home-strip-delivery',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'Final film exporting on the timeline, deliverables packed for the client',
    label: 'Final film exporting. Deliverables ready.',
    slate: 'STILL · INT · EDIT · NIGHT',
    aspect: '3-2',
    pageUsage: ['home'],
  },

  homeMethodReceive: {
    id: 'home-method-receive',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'The camera kit arriving at a doorstep',
    label: 'The case at the door. Tape unbroken.',
    slate: 'STILL · EXT · DOORSTEP · DAY',
    aspect: '4-5',
    pageUsage: ['home', 'services'],
  },

  homeMethodTalk: {
    id: 'home-method-talk',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'Facilitation in progress — Isaac listening, client speaking',
    label: 'Listening. Not waiting to speak.',
    slate: 'STILL · INT · CLIENT SPACE · DAY',
    aspect: '4-5',
    pageUsage: ['home', 'services'],
  },

  homeMethodFilm: {
    id: 'home-method-film',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'Client filming themselves — their hands on the camera',
    label: 'Their hands on the camera.',
    slate: 'STILL · INT · CLIENT SPACE · DAY',
    aspect: '4-5',
    pageUsage: ['home', 'services'],
  },

  homeMethodKeep: {
    id: 'home-method-keep',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'Drive returned, footage labeled, three-minute film bookmarked',
    label: 'Drive returned. Footage labeled. Film bookmarked.',
    slate: 'STILL · INT · CLIENT DESK · DAY',
    aspect: '4-5',
    pageUsage: ['home', 'services'],
  },

  homeAudioMoment: {
    id: 'home-audio-moment',
    type: 'audio',
    src: null,
    placeholder: true,
    label: 'Field audio · client session',
    pageUsage: ['home'],
  },

  // ——— ABOUT ———
  aboutPortrait: {
    id: 'about-portrait',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'Isaac Rubinstein, environmental portrait, daylight',
    label: 'Isaac. Window light. No styling.',
    slate: 'PORTRAIT · INT · STUDIO · DAY',
    aspect: '4-5',
    pageUsage: ['about'],
  },

  aboutStudio: {
    id: 'about-studio',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'The working studio — camera, notebook, a coffee mid-cool',
    label: 'The studio, mid-edit.',
    slate: 'STILL · INT · STUDIO · DAY',
    aspect: '16-9',
    pageUsage: ['about'],
  },

  aboutRoomSeattle: {
    id: 'about-room-seattle',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'Window in Seattle — soft rain light, fern, low desk',
    label: 'Seattle window. Rain light.',
    slate: 'STILL · INT · SEATTLE · DAY',
    aspect: '3-2',
    pageUsage: ['about'],
  },

  aboutRoomOslo: {
    id: 'about-room-oslo',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'Window in Oslo — long Nordic light across a wooden table',
    label: 'Oslo window. Long light.',
    slate: 'STILL · INT · OSLO · DAY',
    aspect: '3-2',
    pageUsage: ['about'],
  },

  aboutTranscript: {
    id: 'about-transcript',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'A printed transcript page with marginal annotations',
    label: 'Transcript page. Annotations in pen.',
    slate: 'STILL · INT · DESK · DAY',
    aspect: '4-5',
    pageUsage: ['about'],
  },

  // ——— SERVICES ———
  servicesHero: {
    id: 'services-hero',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'The Pelican case open on a counter, lens and body visible',
    label: 'Case open. Kit visible. Ready to send.',
    slate: 'HERO · INT · STUDIO · DAY',
    aspect: '21-9',
    pageUsage: ['services'],
  },

  servicesFounderStory: {
    id: 'services-founder-story',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'A founder filming themselves, mid-thought',
    label: 'A founder, mid-thought, on their own camera.',
    slate: 'STILL · INT · CLIENT SPACE · DAY',
    aspect: '4-5',
    pageUsage: ['services'],
  },

  servicesProgram: {
    id: 'services-program',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'Cohort circle from above — chairs, notebooks, the room halfway in',
    label: 'A cohort, halfway in.',
    slate: 'STILL · INT · COHORT ROOM · DAY',
    aspect: '4-5',
    pageUsage: ['services'],
  },

  // ——— CONTACT ———
  contactRoom: {
    id: 'contact-room',
    type: 'image',
    src: null,
    placeholder: true,
    alt: 'Empty chair by a window, low light, a notebook waiting',
    label: 'The chair by the window. Waiting.',
    slate: 'STILL · INT · STUDIO · MORNING',
    aspect: '3-2',
    pageUsage: ['contact'],
  },
}

export default media
