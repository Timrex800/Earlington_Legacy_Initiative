# Afrihost Deployment Guide for Earlington Legacy Initiative

## Step 1: Build Configuration

```bash
# Install project dependencies (run once or after any package changes)
npm install

# Create a production build (outputs to the `dist` folder)
npm run build
```

> The build will respect the Vite `base` configuration set to `/Earlington_Legacy_Initiative/`, ensuring all asset URLs are correct for the sub‑directory deployment.

---

## Step 2: Server Configuration (`.htaccess`)

Create a **`.htaccess`** file in the root of the deployed site (the directory where the `dist` folder contents are placed). This file enables proper handling of client‑side routing for a React SPA and enforces HTTPS.

```apache
# Enable URL rewriting for SPA routing
RewriteEngine On

# Redirect HTTP to HTTPS (Afrihost provides SSL; ensure it is enabled)
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Serve existing files directly
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Fallback to index.html for all other requests (client‑side routing)
RewriteRule ^ index.html [L]
```

---

## Step 3: Deployment Process

1. **Upload the `dist` folder**

   - Connect to your Afrihost hosting account via **FTP** (FileZilla, WinSCP, etc.) or **cPanel File Manager**.
   - Navigate to the target directory (e.g., `public_html/Earlington_Legacy_Initiative`).
   - Upload the entire contents of the `dist` folder, preserving the folder structure.
   - Ensure the uploaded files retain **644** permissions for files and **755** for directories.

   ![Upload UI](file:///C:/Users/Timothy/.gemini/antigravity/brain/8997ebe2-f6bb-4c7e-9a9c-3f0b20e18dc1/upload_ui.png)

2. **Place the `.htaccess` file**

   - After uploading, create (or edit) the `.htaccess` file in the same directory.
   - Paste the content from **Step 2** above.
   - Save the file.

   ![.htaccess UI](file:///C:/Users/Timothy/.gemini/antigravity/brain/8997ebe2-f6bb-4c7e-9a9c-3f0b20e18dc1/htaccess_ui.png)

3. **Verify SSL is active**

   - In the Afrihost control panel, ensure an SSL certificate is attached to the domain/sub‑directory.
   - If not, request a **Let’s Encrypt** certificate via the panel and enable it.

4. **Clear any server caches** (if using a caching layer like **Varnish** or **Cloudflare**).
   - Purge the cache to make sure the latest assets are served.

---

## Step 4: Verification Checklist

- [ ] Build completes without errors (`npm run build` finishes successfully).
- [ ] Files are uploaded to the correct directory (`public_html/Earlington_Legacy_Initiative`).
- [ ] HTTPS is working on all pages (browser shows a secure lock icon).
- [ ] Client‑side routes (e.g., `/#/donate`, `/#/about`) load correctly without 404 errors.

---

**Tip:** After deployment, open the site in an incognito window and navigate through all major sections to confirm that assets load and routing works as expected.
