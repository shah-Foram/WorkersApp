// src/types.ts

export interface Category {
    id: string;
    Worker_Role: string;
    image: string;
  }
  
  export interface Worker {
    id: string;
    name: string;
    country: string;
    profileImage: string;
    category: string;
  }
  