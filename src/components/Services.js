import { services } from "../data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title1="our" title2="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service key={service.id} service={service} />;
        })}
      </div>
    </section>
  );
};
export default Services;
