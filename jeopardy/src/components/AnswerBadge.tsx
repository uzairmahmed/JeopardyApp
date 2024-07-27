"use client"
import useQuestionStore from '@/stores/questionStore';
import { FC, useState } from 'react';

interface AnswerBadgeProps {
    category: string,
    points: number,
}

const AnswerBadge: FC<AnswerBadgeProps> = ({ category, points }) => {
    const setQuestionState = useQuestionStore((state) => state.setQuestionState);

    const handleRemove = () => {
        setQuestionState(category, points, 'unanswered');
    };


    return (
        <>
            <button
                key={`${name}-badge`}
                className="badge badge-lg badge-primary hover:badge-accent gap-3 align-middle justify-between cursor-pointer select-none"
                onClick={() => document.getElementById(`${category}-${points}-delete-modal`).showModal()}
            >
                <p>
                    {category} - {points}
                </p>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-4 w-4 stroke-current">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"></path>
                </svg>

            </button>

            <dialog id={`${category}-${points}-delete-modal`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-base-200 text-base-content">
                    <h3 className="text-lg">Remove {category} - {points} from team?</h3>
                    <div className="modal-action">
                        <form method="dialog" className='flex flex-col gap-5 w-full align-middle justify-center'>
                            <button className="btn btn-primary" onClick={handleRemove}>Yes, Remove</button>
                            <button className="btn btn-error">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
export default AnswerBadge;