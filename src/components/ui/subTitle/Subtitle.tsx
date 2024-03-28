import React from 'react';
import { titleFont } from '@/config/fonts';

interface Props {
    title: string;
    subTitle?: string
}

export const Subtitle = ({ title, subTitle }: Props) => {

    return (

        <div className='mt-2'>

            <h2 className={`${ titleFont.className } antialiased text-2xl font-semibold`}>
                { title }
            </h2>

            {
                subTitle && (
                    <h4 className={`${ titleFont.className }`}>{ subTitle }</h4>
                )
            }

        </div>

    )

}
