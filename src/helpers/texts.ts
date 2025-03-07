export class Texts {
    private static instance: Texts;
    
    public homeTitleText: string;
  
    // Private constructor to prevent direct instantiation
    private constructor() {
      this.homeTitleText = 'Bem-vindo ao SimulaBank!';
    }
  
    // Public method to get the instance
    public static getInstance(): Texts {
      if (!Texts.instance) {
        Texts.instance = new Texts();  // Instantiate once
      }
      return Texts.instance;  // Return the same instance every time
    }
  }
  
  
