// src/evaluator/roleSuitability.ts

interface Candidate {
    name: string;
    skills: string[];
}

interface JobRequirement {
    title: string;
    requirements: string[];
}

function predictRoleSuitability(candidate: Candidate, job: JobRequirement): number {
    const matchedSkills = candidate.skills.filter(skill => job.requirements.includes(skill));
    const suitabilityScore = (matchedSkills.length / job.requirements.length) * 100;
    return suitabilityScore;
}

// Example usage:
const candidate: Candidate = {
    name: "John Doe",
    skills: ["Java", "TypeScript", "React", "Node.js"]
};

const job: JobRequirement = {
    title: "Full Stack Developer",
    requirements: ["Java", "TypeScript", "React"]
};

const suitability = predictRoleSuitability(candidate, job);
console.log(`${candidate.name} is ${suitability}% suitable for the position of ${job.title}.`);
