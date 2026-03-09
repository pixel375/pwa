# pwa
PWA Test
 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index c85ff865d9550a5de1909870ad6cfb581a3e44f9..1b0930a93290a07569c7c74889f8aa739d86ef73 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,19 @@
-# pwa
-PWA Test
+# PWA
+
+Simple test Progressive Web App scaffold with:
+
+- Mobile-friendly landing page (`index.html`)
+- Installable web app manifest (`manifest.webmanifest`)
+- Service worker with app shell + offline behavior (`sw.js`)
+- Offline fallback page (`offline.html`)
+- App icons (`icons/icon-192.png`, `icons/icon-512.png`)
+
+## Run locally
+
+Because service workers require an HTTP origin, use a local server:
+
+```bash
+python -m http.server 8080
+```
+
+Then open `http://localhost:8080`.
 
EOF
)
