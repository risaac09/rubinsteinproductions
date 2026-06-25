#!/usr/bin/env python3
import os, sys
here = os.path.dirname(os.path.abspath(__file__))
os.chdir(here)
from http.server import HTTPServer, SimpleHTTPRequestHandler
print(f"serving {here} on http://localhost:8770", flush=True)
HTTPServer(("", 8770), SimpleHTTPRequestHandler).serve_forever()
