// stores/questionStore.ts
import { create } from 'zustand';
import { initialData } from './questionData';

interface Question {
    question: string;
    answer: string;
    points: number;
    status: 'unanswered' | 'team 1' | 'team 2' | 'wrong';
}

interface Category {
    [key: string]: Question[];
}

interface QuestionState {
    categories: Category;
    setQuestionState: (category: string, points: number, status: 'unanswered' | 'team 1' | 'team 2' | 'wrong') => void;
}

const useQuestionStore = create<QuestionState>((set) => ({
    categories: initialData,
    setQuestionState: (category, points, status) =>
        set((state) => {
            if (!state.categories[category]) {
                console.error(`Category ${category} not found`);
                return state;
            }
            return {
                categories: {
                    ...state.categories,
                    [category]: state.categories[category].map((question) =>
                        question.points === points ? { ...question, status } : question
                    ),
                },
            };
        }),
}));


export default useQuestionStore;
