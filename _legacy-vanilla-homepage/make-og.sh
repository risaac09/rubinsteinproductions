#!/bin/bash
# Regenerate og.png from og.svg.
# Requires the local preview server running (./serve.sh) so that
# Google Fonts resolve and the SVG renders with the right typography.
#
# Run: ./make-og.sh

set -e

cd "$(dirname "$0")"

# tiny render wrapper that loads og.svg with web fonts available
cat > _og-render.html <<'HTML'
<!doctype html>
<html><head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>html,body{margin:0;padding:0;background:#1a1412;width:1200px;height:630px;overflow:hidden}</style>
</head><body>
<object data="og.svg" type="image/svg+xml" width="1200" height="630"></object>
</body></html>
HTML

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --window-size=1200,630 \
  --screenshot=og.png \
  --virtual-time-budget=3000 \
  http://localhost:8770/_og-render.html

rm _og-render.html

echo "→ og.png regenerated ($(wc -c < og.png) bytes)"
