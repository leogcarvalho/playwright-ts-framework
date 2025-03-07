export class Config {
    private static instance: Config;
    
    public baseURL: string;
    public homePageUrl: string;
    public timeout: number;
  
    // Private constructor to prevent direct instantiation
    private constructor() {
      this.baseURL = 'https://leogcarvalho.github.io/simulabank/login.html';
      this.homePageUrl = 'https://leogcarvalho.github.io/simulabank/home.html';
      this.timeout = 30000; // Default timeout for actions
    }
  
    // Public method to get the instance
    public static getInstance(): Config {
      if (!Config.instance) {
        Config.instance = new Config();  // Instantiate once
      }
      return Config.instance;  // Return the same instance every time
    }
  }
  
  
