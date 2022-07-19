import classNames from 'classnames';

export default function Contact({className}) {
    return (
        <section className={classNames("contact p-4", className)}>
            <p>How to contact me</p>
        </section>
    )
}