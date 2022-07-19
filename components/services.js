import classNames from 'classnames';
import partition from '../lib/partition';

const servicesData = [
    {
        id: "oversight",
        name: "Oversight",
        description: ""
    },
    {
        id: "study",
        name: "Study",
        description: ""
    },
    {
        id: "planning",
        name: "Planning",
        description: ""
    },
    {
        id: "design-specifications",
        name: "Design Specifications",
        description: ""
    },
    {
        id: "operations",
        name: "Operations",
        description: ""
    },
    {
        id: "maintenance",
        name: "Maintenance",
        description: ""
    }
];

function Service({name, description, className}) {
    return (
        <div className={classNames('service md:p-2 md:h-40', className)}>
            <h3 className="text-green-900 md:text-center">{name}</h3>
            <p>{description}</p>
        </div>
    )
}

function ServiceGroup({services, className}) {
    return (
        <div className={classNames("serviceGroup", className)}>
            {services.map((service) => (<Service key={service.id} {...service} />))}
        </div>
    )
}

export default function Services({className}) {
    return (
        <section className={classNames('services flex flex-col md:items-center', className)}>
            <div className="flex flex-col md:flex-row px-4 max-w-4xl">
                {partition(servicesData, 2).map((services, i) => (
                    <ServiceGroup key={`group-${i}`} className={`flex flex-col md:w-1/3`} services={services}/>
                ))}
            </div>
        </section>
    )
}
