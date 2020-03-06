import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
    //this is how we hook up a context object to a class component, contextType is a specific name that must b used
    // static contextType = LanguageContext;
    //static basically adds a property to the class itself, could also use Button.contextType = Language Context instead after creating the class (outside the class)


    //WE USE CONSUMER ANY TIME WE WANT TO GET INFORMATION OUT OF MULTIPLE DIFFERENT CONTEXT OBJECTS
    //INSIDE A SINGLE COMPONENT.

    //USING THIS.CONTEXT IS USED WHEN WE ACCESS A SINGLE CONTEXT OBJECT IN A SINGLE COMPONENENT

    //helper func for Consumer
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    render() {
        //THIS IS FOR USING THIS.CONTEXT
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        // return (
        //     <button className="ui button primary">{text}</button>
        // )

        //providing a function as a child to a react component
        //This could be turned into a JSX helper function
        return (
            <ColorContext.Consumer>
            {(color) =>
                <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {({ language }) => this.renderSubmit(language)}
                    </LanguageContext.Consumer>
                </button>
            }
            </ColorContext.Consumer>
        )
    }
}

export default Button;