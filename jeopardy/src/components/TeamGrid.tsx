'use client'
import type { FC } from 'react';
import AnswerBadge from './AnswerBadge';
import ThemeSwitcher from './ThemeSwitcher';
import useQuestionStore from '@/stores/questionStore';

interface TeamGridProps { }

const TeamGrid: FC<TeamGridProps> = ({ }) => {
    const teams = ["Team 1", "Team 2"]
    const categories = Object.keys(useQuestionStore((state) => state.categories));
    const questions = useQuestionStore((state) => state.categories);
    const team1Points = Object.values(questions)
        .flat()
        .filter(question => question.status === 'team 1')
        .reduce((acc, question) => acc + question.points, 0);
    const team2Points = Object.values(questions)
        .flat()
        .filter(question => question.status === 'team 2')
        .reduce((acc, question) => acc + question.points, 0);

    const getAnswerBadges = (team: string) => {
        return Object.entries(questions).flatMap(([category, questions]) =>
            questions
                .filter(question => question.status === team)
                .map(question => ({ category: category, points: question.points }))
        );
    };

    return (
        <>
            <div className='flex flex-col h-full w-5/6 md:w-full'>
                <div className={`flex flex-col h-full p-5`}>
                    <div className={`flex flex-col md:flex-row 2xl:flex-col gap-4 w-full h-full`}>
                        {teams.map((team, index) => (
                            <div key={team} className='flex flex-col md:flex-row 2xl:flex-col justify-between items-center text-center bg-base-300 text-base-content rounded-box max-h-[50%] md:max-h-full 2xl:max-h-[50%] p-10 gap-5 w-full'>
                                <div className='flex flex-row md:flex-col 2xl:flex-row justify-between font-bold w-full md:w-1/3 2xl:w-full text-left'>
                                    <p>{team}</p>
                                    <p>{index === 0 ? team1Points : team2Points} Points</p>
                                </div>
                                <div className='flex flex-row flex-wrap gap-2 h-full w-full justify-center overflow-y-scroll'>
                                    {getAnswerBadges(index === 0 ? 'team 1' : 'team 2').map(({ category, points }) => (
                                        <AnswerBadge key={`${category}-${points}`} category={category} points={points} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-row w-full rounded-box bg-base-300 p-2 justify-between h-[72px]'>
                    <ThemeSwitcher />

                    <div className="mask mask-circle w-12">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/512px-Breezeicons-actions-22-im-user.svg.png" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default TeamGrid;