import { View, Text } from "vcc-ui";
import CarsCarousel from "../src/components/CarsCarousel";

function HomePage() {
  return (
    <View extend={{ maxWidth: 1244, margin: "1rem auto" }}>
      <Text
        variant="peary"
        extend={{
          fontSize: "2rem !important",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        Volvo Cars
      </Text>
      <CarsCarousel />
    </View>
  );
}

export default HomePage;
