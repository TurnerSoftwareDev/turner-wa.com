import About from '../about';
import HeroUnit from '../heroUnit';
import PageLayout from '../pageLayout';
import Services from '../services';
import Calendly from '../calendly';

export default function HomePage() {
    return (
        <PageLayout title="Home - Turner Engineering Consultants">
            <HeroUnit />
            <About className="bg-slate-200"/>
            <Services className="mb-2" />
            {/*<Calendly />*/}
        </PageLayout>
    )
}
