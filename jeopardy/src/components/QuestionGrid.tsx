"use client"
import type { FC } from 'react';
import QuestionCell from './QuestionCell';
import useQuestionStore from '@/stores/questionStore';

interface QuestionGridProps { }

const QuestionGrid: FC<QuestionGridProps> = ({ }) => {
    const categories = Object.keys(useQuestionStore((state) => state.categories));
    const questions = useQuestionStore((state) => state.categories);
    const points = Object.values(questions)[0].map(question => question.points);

    return (
        <div className='h-full'>
            <div className={`grid grid-cols-6 gap-4 p-5 h-[10%]`}>
                {categories.map((category) => (
                    <div key={category} className='flex justify-center items-center text-center rounded-box p-4 text-base-content font-bold'>
                        {category}
                    </div>
                ))}
            </div>
            <div className={`grid grid-cols-6 gap-4 p-5 h-[90%]`}>
                {categories.map((category) =>
                    points.map((points) => {
                        const questionData = questions[category].find(q => q.points === points);
                        if (questionData) {
                            return (
                                <QuestionCell
                                    key={`${category}-${points}`}
                                    category={category}
                                    points={points}
                                    question={questionData.question}
                                    answer={questionData.answer}
                                />
                            );
                        }
                        return null;
                    })
                )}
            </div>
        </div>
    );
}
export default QuestionGrid;