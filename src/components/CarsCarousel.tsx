import { useState } from "react";
import { Spacer } from "vcc-ui";
import CarsFilter from "./CarsFilter";
import Carousel from "./Carousel";
import Card from "./Card";
import cars from "../../public/api/cars.json";

const url = process.env.NEXT_PUBLIC_SITE_URL;

const CarsCarousel = () => {
  const [carType, setCarType] = useState("");

  // Filter cars by body type
  const filteredCars = cars.filter((car) =>
    carType !== "" ? car.bodyType === carType : car
  );
  return (
    <>
      <CarsFilter
        // Remove duplicate body types and pass as an string array to the component
        bodyTypes={[
          ...new Map(
            cars.map((car) => [car["bodyType"], car.bodyType])
          ).values(),
        ]}
        selectedType={(type) => setCarType(type)}
      />
      <Spacer />
      <Carousel
        itemWidth={300}
        length={filteredCars.length}
      >
        {filteredCars.map((car, index) => (
          <Card
            key={car.id}
            itemId={index}
            category={car.bodyType}
            title={car.modelName}
            subtitle={car.modelType}
            image={url + car.imageUrl}
            linkName1="learn"
            linkName2="shop"
            linkUrl1={url + "/learn/" + car.id}
            linkUrl2={url + "/shop/" + car.id}
          />
        ))}
      </Carousel>
    </>
  );
};

export default CarsCarousel;
