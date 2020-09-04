declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: string | undefined;
    MARVEL_API_URL: string;
    MARVEL_API_KEY_PUBLIC: string;
    MARVEL_API_KEY_SECRET: string;
    MARVEL_API_HASH: string;
  }
}
