// Film + vertical-video gallery data.
//
// Each entry: { id, title, blurb }
//   id    — YouTube video (or Short) id. Thumbnail and click-to-load embed are
//           derived from it. A Short id works the same as a normal video id.
//   title — shown under the card.
//   blurb — one line of context (optional).
//
// To add a vertical clip: drop one object into `verticals`. That's the whole job.
// Find the id in the URL: youtube.com/shorts/<id> or youtu.be/<id>.

export const featured = {
  id: 'I5HH-s8Z5yU',
  title: 'The Genesis Design Challenge: Making the Invisible Value Visible',
  blurb:
    'Embedded facilitation and documentary across a 10-week design challenge. Wayfinding interviews, individual learning arcs, and a compilation film.',
}

// Vertical (9:16) work. Seed with real Short ids as they are published.
// Example shape, left as a guide — replace, do not ship empty objects:
//   { id: 'abc123XYZ', title: 'On naming the thing', blurb: '45s' },
export const verticals = []
