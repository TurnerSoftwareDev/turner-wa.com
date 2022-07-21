import Link from 'next/link';
import PageLayout from '../pageLayout';

export default function NotFound() {
    return (
        <PageLayout title="Not Found - Turner Engineering Consultants">
            <section className="flex flex-col items-center p-5">
                <h1 className="text-green-900">404 - Not Found</h1>
                <p>The page you were looking for could not be found.</p>
                <p><Link href="/">Return Home</Link></p>
            </section>
        </PageLayout>
    )
}
