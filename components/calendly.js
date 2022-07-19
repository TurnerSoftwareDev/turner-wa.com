import Script from 'next/script';
import classNames from 'classnames';

export default function Calendly({className}) {
    return (
        <section className={classNames('consultation flex flex-col w-full items-center p-4 md:p-8', className)}>
            <div className="flex flex-col md:flex-row justify-center max-w-6xl ">
                <div className="flex flex-col mb-4 md:w-1/3">
                    <h2>Schedule a Consultation</h2>
                    <p className="font-semibold">I am available for a consultation if you need advice about the software challenges your organization faces.</p>
                    <p>Duration: 30 minutes</p>
                    <p>Cost: $50 (invoiced upon completion)</p>
                </div>

                <div className="calendly-inline-widget min-w-[320px] h-[650px]"
                     data-url="https://calendly.com/turnersoftwaredevelopment/consultation?hide_event_type_details=1&hide_gdpr_banner=1"/>
            </div>
            <Script src="https://assets.calendly.com/assets/external/widget.js"/>
        </section>
    )
}