import React from 'react';
import { titleFont } from '@/config/fonts';

interface Props {
    title: string;
    subTitle?: string;
}

export const Title = ({ title, subTitle }: Props) => {

    return (
        <div className='mt-3'>
            <h1 className={`${ titleFont.className } antialiased text-4xl font-semibold`}>
                { title }
            </h1>

            {
                subTitle && 
                    <h3 className={`${ titleFont.className }`}>{ subTitle }</h3>
            }

        </div>
    )

}
