import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'The Simple Sudoku',
    description: 'Une application IOS et Android de sudoku.',
    image: 'https://dorianboille.github.io/images/sudoku.png',
    techStack: ['Flutter', 'Figma'],
    category: 'Application Mobile',
    link: 'https://github.com/example/ai-vision'
  },
  {
    id: '2',
    title: 'NLP Sentiment Analysis API',
    description: 'Production-ready API for sentiment analysis of social media content using transformer models and FastAPI.',
    image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349',
    techStack: ['Python', 'Hugging Face', 'FastAPI', 'AWS'],
    category: 'Natural Language Processing',
    link: 'https://github.com/example/nlp-api'
  },
  {
    id: '3',
    title: 'Reinforcement Learning Game Bot',
    description: 'Self-learning agent using Deep Q-Learning to master complex game environments.',
    image: 'https://images.unsplash.com/photo-1700436439273-4e3671da4c8d',
    techStack: ['Python', 'PyTorch', 'OpenAI Gym', 'Redis'],
    category: 'Reinforcement Learning',
    link: 'https://github.com/example/rl-bot'
  }
];