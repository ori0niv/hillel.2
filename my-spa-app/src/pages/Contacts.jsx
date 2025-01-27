import React from 'react';

export default function Contacts() {
    return (
        <div>
            <h1>Контакти</h1>
            <p>Зв’яжіться зі мною за наступними контактами:</p>

            <ul>
                <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:maksim.iliev@icloud.com">maksim.iliev@icloud.com</a>
                </li>
                <li>
                    <strong>Телефон:</strong>{' '}
                    <a href="tel:+380689050963">+380 68 905 09 63</a>
                </li>
            </ul>
        </div>
    );
}
