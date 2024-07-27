'use client'

import type { FC } from 'react';
import useQuestionStore from '../stores/questionStore';

interface QuestionCellProps {
    category: string,
    points: number,
    question: string,
    answer: string
}

const QuestionCell: FC<QuestionCellProps> = ({ category, points, question, answer }) => {
    const setQuestionState = useQuestionStore((state) => state.setQuestionState);
    const questionState = useQuestionStore((state) =>
        state.categories[category]?.find(q => q.points === points)?.status
    );
    const handleAnswer = (team: 'team 1' | 'team 2' | 'wrong') => {
        console.log(team);
        setQuestionState(category, points, team);
    };

    return (
        <>
            <button onClick={() => questionState === 'unanswered' && document.getElementById(`${category}-${points}-modal`).showModal()} key={`${category}-${points}`}
                className={`flex justify-center items-center text-center rounded-box p-4 
                    ${questionState !== 'unanswered' ?
                        'bg-neutral hover:bg-neutral text-neutral-content hover:text-neutral-content cursor-not-allowed' :
                        'bg-primary text-primary-content hover:bg-accent hover:text-accent-content cursor-pointer'
                    }
                transition-all `}>
                {points}
            </button>

            <dialog id={`${category}-${points}-modal`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-base-200 text-base-content">
                    <h3 className="text-lg">{`${category} ${points} `}</h3>
                    <p className="py-4">{question}</p>
                    <p className="py-4">{answer}</p>
                    <div className='flex flex-col gap-5 w-full align-middle justify-center'>

                    </div>

                    <div className="modal-action">
                        <form method="dialog" className='flex flex-col gap-5 w-full align-middle justify-center'>
                            <button className="btn btn-primary" onClick={() => handleAnswer('team 1')}>Point to Team 1</button>
                            <button className="btn btn-primary" onClick={() => handleAnswer('team 2')}>Point to Team 2</button>
                            <button className="btn btn-error" onClick={() => handleAnswer('wrong')}>Both Wrong</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
export default QuestionCell;