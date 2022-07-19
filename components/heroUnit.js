import classNames from 'classnames';

export default function HeroUnit({className}) {
    return (
        <section
            className={classNames('hero p-4 md:p-10 lg:p-20 bg-hero-500 md:bg-hero-800 lg:bg-hero-1200 xl:bg-hero-1600 bg-cover bg-fixed text-white', className)}>
            <div className="flex flex-col lg:justify-center lg:text-center">
                <h1 className="h0 text-white font-bold">When Experience Counts</h1>
                <p className="h3 text-white">Licensed Professional Electrical Engineer focusing primarily on Electrical and Instrumentation Systems.</p>
            </div>
        </section>
    )
}
