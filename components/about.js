import classNames from 'classnames';
import Image from 'next/image';

export default function About({className}) {
    return (
        <section className={classNames('about flex flex-col items-center p-4 md:p-8', className)}>
            <div className="flex flex-row items-center max-w-3xl">
                <div>
                    <div className="float-left relative">
                        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64">
                            <Image className="rounded-lg"
                                   src="/images/richard_400.jpg"
                                   alt="Richard Turner portrait"
                                   layout="fill"
                                   objectFit="scale-down"
                            />
                        </div>
                    </div>

                    Richard is a licensed Professional Electrical Engineer focusing primarily on Electrical and
                    Instrumentation Systems with {new Date().getFullYear() - 1974} years of experience. His
                    responsibilities have
                    included overall project management, often in a multiple engineering team membership environment,
                    working from concept through construction and start-up. Clients include industrial facilities, oil
                    and gas pipelines, refineries, distribution facilities, public facilities, educational campuses, and
                    municipal wastewater systems.
                </div>
            </div>
        </section>
    )
}