import classNames from 'classnames';

export default function Portfolio({className}) {
    return (
        <section className={classNames('portfolio p-4', className)}>
            <p>Project examples</p>
        </section>
    )
}