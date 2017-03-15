import React from 'react';
import Email from  './email';

export default function EmailList(props) {
     const emails = Object.keys(props.emails).map((emailID, index) => {
         const email = props.emails[emailID];
         return (
             <li key={index}>
                <Contact id={email.id} title={email.title}
                         from={email.from} />
             </li>
         );
     });

    return (
        <ul>
            {emails}
        </ul>
    );
};