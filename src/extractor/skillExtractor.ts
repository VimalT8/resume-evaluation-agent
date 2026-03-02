// src/extractor/skillExtractor.ts

import { skillSet } from '../data/skills'; // Assume we have a predefined list of skills

// Skill categories
const skillCategories = {
    'Programming Languages': ['JavaScript', 'Python', 'Java', 'C++', 'C#'],
    'Frameworks': ['React', 'Node.js', 'Django', 'Spring'],
    'Tools': ['Git', 'Docker', 'Jira', 'VS Code'],
    'Soft Skills': ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability'],
};

// Function to extract and categorize skills from resume text
export function extractSkills(resumeText: string): Record<string, string[]> {
    const extractedSkills: Record<string, string[]> = {};
    
    for (const category in skillCategories) {
        extractedSkills[category] = [];
        skillCategories[category].forEach(skill => {
            const regExp = new RegExp(`\\b${skill}\\b`, 'i'); // Match whole word, case insensitive
            if (regExp.test(resumeText)) {
                extractedSkills[category].push(skill);
            }
        });
    }

    return extractedSkills;
}