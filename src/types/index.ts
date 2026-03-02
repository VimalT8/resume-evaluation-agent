// src/types/index.ts

// Interface for Resume
export interface Resume {
    name: string;
    email: string;
    phone: string;
    skills: Skills[];
    experience: Experience[];
    education: Education[];
}

// Interface for Skills
export interface Skills {
    skill: string;
    proficiency: string; // e.g., 'Beginner', 'Intermediate', 'Expert'
}

// Interface for Experience
export interface Experience {
    jobTitle: string;
    company: string;
    startDate: string; // ISO Date
    endDate: string; // ISO Date or 'Present'
    description?: string;
}

// Interface for Education
export interface Education {
    degree: string;
    institution: string;
    graduationYear: number;
}

// Interface for Evaluation
export interface Evaluation {
    resumeId: string;
    score: number; // e.g., score out of 100
    comments: string[];
}