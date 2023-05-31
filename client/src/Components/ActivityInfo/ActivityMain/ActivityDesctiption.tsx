import React from 'react';

type DesciptionProps = {
    description: string;
}

const ActivityDesctiption = ({ description }: DesciptionProps) => {
    const paragraphs = description.split('\n').map((paragraph, index) => (
        <>
            {index !== 0 && <br />}
            <p key={index}>{paragraph}</p>
        </>
    ));

    return <div>{paragraphs}</div>;
};

export default ActivityDesctiption;
