"use client"

import { courses, userProgress } from '@/db/schema'
import React, { useTransition } from 'react'
import Card from './card';
import { useRouter } from 'next/navigation';

type Props = {
    courses: typeof courses.$inferSelect[];
    activeCourseId: typeof userProgress.$inferSelect.activeCourseId;
}

const List = ({ courses, activeCourseId }: Props) => {

    const router = useRouter()
    const [pending, startTransition] = useTransition()

    const onClick = (id: number) => {
        if (pending) return;

        if (id === activeCourseId) {
            return router.push("/learn")
        }

    }
    return (
        <div className='pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4'>
            {courses.map((course) => (
                <Card
                    title={course.title}
                    id={course.id}
                    key={course.id}
                    imageSrc={course.imageSrc}
                    onClick={onClick}
                    active={course.id === activeCourseId}
                    disabled={pending}
                />
            ))}
        </div>
    )
}

export default List