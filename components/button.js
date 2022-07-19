import classNames from 'classnames';

export default function Button({className, children}) {
    return (
        <button className={classNames("btn inline-block text-sm p-2 rounded-lg", className)}>
            {children}
        </button>
    )
}