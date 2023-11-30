import { getAuthSession } from '@/lib/next_auth'
import { redirect } from 'next/navigation';
import React from 'react'

export const metadata = {
    title: "Quiz | Quizzzy",
    description: "Quiz yourself on anything!",
}

type Props = {
    searchParams: {
        topic?: string;
    };
}

const QuizPage = async ({ searchParams }: Props) => {
    const session = await getAuthSession();
    if (!session?.user) {
        redirect("/");
    }

    return <QuizCreation topic={searchParams.topic ?? ""} />;
};

export default QuizPage;