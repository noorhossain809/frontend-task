import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const RootLayout = ({children}) => {
    return (
        <>
            <Header />
            <>
            {children}
            </>
            <Footer />
        </>
    );
};

export default RootLayout;