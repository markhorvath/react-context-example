import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : 'Nam';

        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    };
}

export default Field;