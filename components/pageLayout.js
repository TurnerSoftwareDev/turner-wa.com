import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import Logo from './logo';
import Button from './button';

function Header({className}) {
    return (
        <header className={classNames('header', className)}>
            <div className="flex flex-row px-4 py-2 justify-between items-center align-middle">
                <Logo className="text-green-900"/>
                    <Button className={'bg-green-900'}>
                        <Link href='mailto:richard.turner@turner-wa.com'>
                            <a className="text-white">Contact Me</a>
                        </Link>
                    </Button>
            </div>
        </header>
    )
}

function Footer({className}) {
    return (
        <footer className={classNames("footer p-8", className)}>
            <p className="text-center">
            <Link href="mailto:richard.turner@turner-wa.com.com">
                <a className="text-white">richard.turner@turner-wa.com</a>
            </Link>
            </p>
            <p className="text-center font-light text-xs md:text-base text-slate-400">Copyright &copy; {new Date().getFullYear()} Turner Engineering Consultants, LLC</p>
        </footer>
    )
}

export default function PageLayout({title, className, children}) {
    const footerBgColor = 'bg-slate-900';
    const bodyBgColor = 'bg-white';

    return (
        <div className={classNames('pageLayout flex flex-col h-screen', footerBgColor, className)}>
            <Head>
                <title>{title}</title>
            </Head>
            <Header className={bodyBgColor}/>
            <main className={bodyBgColor}>
                {children}
            </main>
            <Footer className={footerBgColor} />
        </div>
    )
}