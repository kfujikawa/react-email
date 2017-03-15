import React from 'react';
import Email from  './email';

export default function EmailList(props) {
     const emails = Object.keys(props.emails).map((emailId, index) => {
         const email = props.emails[emailId];
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