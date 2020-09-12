import React from 'react';
import Head from 'next/head';

const Layout = ({title, children}) => {
    console.log('children', children);
    return (
        <div className="bg-gray-300">
            <Head>
                <title>{title}</title>
            </Head>
            <main className="container mx-auto max-w-xl pt-8 min-h-screen">
                {children}
            </main>
        </div>
    )
}

export default Layout
