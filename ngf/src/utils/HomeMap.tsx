export default function HomeMap() {
  return (
    <section className="home-map-section">
      <div className="row">
        <div className="col-sm-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5086043485444!2d77.2548527!3d28.5244286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1659ef3ba19%3A0x6a12e69f033edae2!2sNEW%20GREEN%20FIELD%20SCHOOL!5e0!3m2!1sen!2sin!4v1753686351838!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="New Green Field School Location"
          />
        </div>
      </div>
    </section>
  );
}
