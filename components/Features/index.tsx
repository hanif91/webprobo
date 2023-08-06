import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary2/[.03] py-8 md:py-10 lg:py-12"
      >
        <div className="container">
          <SectionTitle
            title="Pelayanan Kami"
            paragraph="Berikut pelayanan-pelayanan kami yang dapat anda dapatkan setelah menjadi pelanggan"
            center
            mb="50px"
          />

          <div className="px-5 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
