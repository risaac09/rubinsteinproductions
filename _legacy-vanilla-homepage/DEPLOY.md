# Deploy & DNS — rubinsteinproductions.com

This bundle is plain static HTML/CSS. Any host that serves files works. Below are the
practical paths and the DNS records to set at the registrar.

**Important:** DNS changes are visible to the public and propagate slowly (5 min – 48 h
depending on the record). Make changes deliberately, and only after the host has the
files deployed. Don't change the live A/CNAME until the new host is responding correctly
to the apex and `www` requests.

---

## Files in this bundle

```
index.html                                  — homepage
about.html                                  — long-scroll bio
press.html                                  — press kit + downloads
case-studies/central-providence-unidos.html — case study 01
case-studies/workday-sch-2026.html          — case study 02
case-studies/genesis-design-challenge.html  — case study 03
tokens.css                                  — design tokens (palette, type, spacing)
page.css                                    — shared page-shell styles
favicon.svg                                 — browser tab mark
og.svg                                      — Open Graph source (editable)
og.png                                      — rasterized OG (1200×630, used by crawlers)
serve.py                                    — local preview server
serve.sh                                    — local preview launcher
make-og.sh                                  — regenerate og.png from og.svg
```

Total bundle: ~70 KB excluding og.png.

---

## Pre-deploy checklist

Before pushing the site live, confirm:

- [ ] **Currently booking status** — `summer 2026` is hard-coded in:
  - `index.html` (contact section)
  - `about.html` (contact section)
  Change before publishing if outdated.
- [ ] **Pricing display** — `from $1,500` and `from $3,000` appear in `index.html`
  service cards. The canonical doc lists ranges ($1,500–2,500 / $3–8K). If you'd
  prefer ranges or "starting from," update the `<span>` in the service cards.
- [ ] **Email addresses** — `isaac@rubinsteinproductions.com` (general) and
  `press@rubinsteinproductions.com` (press) appear throughout. Both must resolve at
  the host before launch.
- [ ] **Headshot, CV, capabilities, brand kit downloads** on `press.html` — wired as
  `mailto:` links until real files exist. Replace `href` with file paths once those
  exist (e.g. `assets/cv.pdf`).
- [ ] **og.png** exists and is 1200×630. To regenerate: `./serve.sh &; ./make-og.sh`.

---

## Recommended host

**Cloudflare Pages** is the best fit for this bundle:
- Free for static sites
- Native DNS at the registrar level if you also use Cloudflare Registrar
- Automatic HTTPS
- Drag-and-drop deploys via dashboard, or `git push` if you want versioning
- Edge caching is fast and global

**Alternatives that also work:**
- Vercel (drag-and-drop the folder)
- Netlify (drag-and-drop)
- GitHub Pages (push to `gh-pages` branch)
- Any S3/R2 bucket with public-read

---

## DNS records

These are the records to set at the registrar. **Isaac executes these** — DNS changes
are user-visible and irreversible without the same access. They must be made by a
human with registrar credentials.

### If hosting on Cloudflare Pages

Cloudflare auto-creates the records when you add the custom domain in the Pages
dashboard. Manual records aren't needed. The dashboard step is:
`Pages → your project → Custom domains → Set up a custom domain → rubinsteinproductions.com`.

### If hosting on Vercel

| Type | Name | Value | TTL |
|---|---|---|---|
| `A` | `@` | `76.76.21.21` | `3600` |
| `CNAME` | `www` | `cname.vercel-dns.com` | `3600` |

Vercel's docs are the source of truth — confirm IPs at
`https://vercel.com/docs/projects/domains/working-with-dns` before applying.

### If hosting on Netlify

| Type | Name | Value | TTL |
|---|---|---|---|
| `A` | `@` | `75.2.60.5` | `3600` |
| `CNAME` | `www` | `<your-site-name>.netlify.app` | `3600` |

### If hosting on GitHub Pages

| Type | Name | Value | TTL |
|---|---|---|---|
| `A` | `@` | `185.199.108.153` | `3600` |
| `A` | `@` | `185.199.109.153` | `3600` |
| `A` | `@` | `185.199.110.153` | `3600` |
| `A` | `@` | `185.199.111.153` | `3600` |
| `CNAME` | `www` | `risaac09.github.io` | `3600` |

(Replace `risaac09.github.io` with the user/org and repo name configured for Pages.)

### Email — keep these intact

If `isaac@rubinsteinproductions.com` already resolves to Gmail/Google Workspace,
**do not touch the existing MX records** when adding the website records above.
A/CNAME records for the apex are independent of MX records. If migrating registrars,
copy MX records exactly as they exist before changing nameservers.

Typical Google Workspace MX block (do not blindly copy — verify in your existing
DNS first):
```
MX  @  1  ASPMX.L.GOOGLE.COM
MX  @  5  ALT1.ASPMX.L.GOOGLE.COM
MX  @  5  ALT2.ASPMX.L.GOOGLE.COM
MX  @  10 ALT3.ASPMX.L.GOOGLE.COM
MX  @  10 ALT4.ASPMX.L.GOOGLE.COM
```

---

## Post-deploy checks

Run these after DNS has propagated (15–60 min for most providers):

```bash
# resolves to expected host
dig rubinsteinproductions.com +short
dig www.rubinsteinproductions.com +short

# SSL cert is valid
curl -I https://rubinsteinproductions.com/

# pages render
curl -sf https://rubinsteinproductions.com/ > /dev/null && echo "homepage OK"
curl -sf https://rubinsteinproductions.com/about.html > /dev/null && echo "about OK"
curl -sf https://rubinsteinproductions.com/press.html > /dev/null && echo "press OK"
curl -sf https://rubinsteinproductions.com/case-studies/central-providence-unidos.html > /dev/null && echo "cpu OK"

# OG image is publicly fetchable (LinkedIn / Slack / X need this)
curl -sfo /dev/null -w "%{http_code} %{content_type}\n" https://rubinsteinproductions.com/og.png

# email still works (mail server should respond)
dig MX rubinsteinproductions.com +short
```

Then validate the OG card with the official debuggers:
- Facebook: `https://developers.facebook.com/tools/debug/`
- LinkedIn: `https://www.linkedin.com/post-inspector/`
- X (Twitter): paste the URL into a draft tweet and check the preview

---

## Rollback

If something breaks:

1. **Don't change DNS first.** Most "site is down" complaints are caused by host
   issues, not DNS. Check the host's status page before touching records.
2. **Keep the previous host live.** When migrating, leave the old host responding
   correctly until the new host is verified end-to-end.
3. **Lower TTL before migration.** A week before any DNS change, drop TTL to 300s so
   that if you need to revert, propagation is fast.
