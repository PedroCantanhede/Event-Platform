import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import React from 'react';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export const Lesson: React.FC<LessonProps> = (props) => {

    const { slug } = useParams<{ slug: string }>()

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={isLessonAvailable ? `/event/lesson/${props.slug}` : ''} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className={classNames('rounded border border-gray-500 p-4 mt-2', {
                'bg-green-500': isActiveLesson, 
                'group-hover:border-green-500': isLessonAvailable
            })}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={classNames('text-sm font-medium flex items-center gap-2', {
                            'text-white': isActiveLesson,
                            'text-blue-500': !isActiveLesson
                        })}>
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium uppercase flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}

                    <span className={classNames('text-xs uppercase rounded py-[0.125rem] px-2 text-white border font-bold', {
                        'border-white': isActiveLesson,
                        'border-green-300': !isActiveLesson,
                    })}>
                        {props.type === 'live' ? 'ao vivo' : 'Aula Prática'}
                    </span>
                </header>

                <strong className={classNames('mt-5 block', {
                    'text-white': isActiveLesson,
                    'text-gray-200': !isActiveLesson
                })}>
                    {isLessonAvailable ? props.title : props.type === 'live' ? 'Em breve aula ao vivo' : 'Aula Prática'}
                </strong>
            </div>
        </Link>
    )
}