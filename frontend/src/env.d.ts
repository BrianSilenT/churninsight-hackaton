declare global {
  interface ImportMetaEnv {
    readonly VITE_API_URL?: string;
    readonly VITE_USE_MOCK?: string;
    readonly DEV?: boolean;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};
