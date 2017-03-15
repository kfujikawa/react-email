import React from 'react';

export default function Email(props) {
    return (
        <div>
            <strong>
                {props.title}
            </strong>
            &nbsp;
            {props.from}
        </div>
    );
};