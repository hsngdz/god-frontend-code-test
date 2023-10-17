import { Block, Flex } from "vcc-ui";
import type { IndicatorProps } from "./interfaces";

const Indicators = ({ length, active }: IndicatorProps) => {
  let indicators = [];

  for (let i = 0; i < length; i++) {
    const createIndicator = () => {
      return (
        <Block
          key={i}
          extend={{
            width: 8,
            height: 8,
            backgroundColor: `rgba(0,0,0,${i === active ? "0.96" : "0.3"})`,
            borderRadius: "100%",
            marginInline: 5,
          }}
        ></Block>
      );
    };
    indicators.push(createIndicator());
  }

  return (
    <Flex
      data-testid="indicators"
      extend={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "1rem",
        fromM: {
          display: "none",
        },
      }}
    >
      {indicators}
    </Flex>
  );
};

export default Indicators;
