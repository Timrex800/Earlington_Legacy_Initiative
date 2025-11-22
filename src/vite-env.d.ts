/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_PUBLIC_URL: string
  readonly VITE_APP_OG_IMAGE: string
  readonly VITE_APP_LOGO_PLACEHOLDER: string
  readonly VITE_UMAMI_ENDPOINT: string
  readonly VITE_UMAMI_SITE_ID: string
  readonly VITE_DONATION_WEBHOOK_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
