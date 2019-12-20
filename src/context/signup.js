import React, { useState } from 'react';

const initialState = {
    name: '',
    location: '',
};

const SignUpContext = React.createContext();

const SignUpProvider = (props) => {
    const [name, setName] = useState(initialState.name);
    const [location, setLocation] = useState(initialState.location);

    const context = {
        name,
        location,
        setLocation,
        setName,
    };

    return (
        <SignUpContext.Provider value={context} {...props} />
    )
}

const useSignUp = () => React.useContext(SignUpContext);
export { SignUpProvider, useSignUp };