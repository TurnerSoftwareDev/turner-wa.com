import Link from 'next/link';
import classNames from 'classnames';

export default function Logo({className}) {
    return (
        <Link href="/">
            <a className={classNames("logo inline-block hover:no-underline font-semibold text-sm md:text-2xl p-2", className)}>
                Turner Engineering Consultants
            </a>
        </Link>
    )
}