import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/header";

const Projects: NextPage = () => {

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className='text-white font-medium min-h-screen'>
                <section className='flex flex-wrap gap-4 p-4 mt-10 h-full' id='projects'>
                    <h2 className='w-full text-4xl '>Projects</h2>
                    <div className='border border-green-600  bg-green-600/10 max-w-sm w-full h-64 rounded-md'>
                    </div>
                    <div className='border border-green-600  bg-green-600/10 max-w-sm w-full h-64 rounded-md'>
                    </div>
                </section>
            </main>
        </div>
    );

}

export default Projects;