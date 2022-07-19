import classNames from 'classnames';
import Image from 'next/image';

export default function About({className}) {
    return (
        <section className={classNames('about flex flex-col items-center p-4 md:p-8', className)}>
            <div className="flex flex-row items-center max-w-2xl">
                <Image className="rounded-lg"
                       src="/images/richard_400.jpg"
                       alt="Richard Turner portrait"
                       width={400}
                       height={517}/>

                <p className="ml-4 w-5/6">
                    Richard is a licensed Professional Electrical Engineer focusing primarily on Electrical and
                    Instrumentation Systems with over 35 years of experience. His responsibilities have
                    included overall project management, often in a multiple engineering team membership environment,
                    working from concept through construction and start-up. Clients include industrial facilities, oil
                    and gas pipelines, refineries, distribution facilities, public facilities, educational campuses, and
                    municipal wastewater systems.
                </p>
            </div>
        </section>
    )
}