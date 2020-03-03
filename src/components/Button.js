import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {
    //this is how we hook up a context object to a class component, contextType is a specific name that must b used
    static contextType = LanguageContext;
    //static basically adds a property to the class itself, could also use Button.contextType = Language Context instead after creating the class (outside the class)

    render() {
        console.log(this.context);
        return (
            <button className="ui button primary">Submit</button>
        )
    }
}

export default Button;