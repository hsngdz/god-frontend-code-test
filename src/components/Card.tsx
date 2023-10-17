import Image from "next/future/image";
import { useTheme, Block, Flex, Text, Link } from "vcc-ui";

type Props = {
  itemId: number;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  linkName1: string;
  linkName2: string;
  linkUrl1: string;
  linkUrl2: string;
};

const Card = ({
  itemId,
  category,
  title,
  subtitle,
  image,
  linkName1,
  linkName2,
  linkUrl1,
  linkUrl2,
}: Props) => {
  const theme = useTheme();
  return (
    <Flex
      role="group"
      aria-roledescription="slide"
      aria-label={`item-${itemId}`}
      extend={{ width: 300, padding: "0 0.75rem", scrollSnapAlign: "start" }}
      data-itemid={itemId}
    >
      <Text
        subStyle="emphasis"
        variant="bates"
        extend={{ color: theme.color.foreground.secondary }}
      >
        {category.toUpperCase()}
      </Text>
      <Flex extend={{ fromL: { flexDirection: "row" } }}>
        <Text
          as="h2"
          variant="ootah"
          extend={{
            fontSize: "1rem !important",
            fontWeight: "500 !important",
            marginRight: 3,
          }}
        >
          {title}
        </Text>
        <Text
          as="h3"
          variant="ootah"
          extend={{
            fontSize: "1rem !important",
            color: theme.color.foreground.secondary,
            marginTop: 3,
            fromL: {
              marginTop: 0,
            },
          }}
        >
          {subtitle}
        </Text>
      </Flex>
      <Image
        width={290}
        height={218}
        src={image}
        alt={title}
        // Placeholder background, useful on slow networks
        style={{
          margin: "1rem 0",
          backgroundColor: theme.color.background.secondary,
        }}
        // Load the first item image on priority
        priority={itemId === 0 && true}
      />
      <Flex extend={{ flexDirection: "row", justifyContent: "center" }}>
        <Block extend={{ marginInline: 10 }}>
          <Link href={linkUrl1} arrow="right">
            {linkName1.toUpperCase()}
          </Link>
        </Block>
        <Block extend={{ marginInline: 10 }}>
          <Link href={linkUrl2} arrow="right">
            {linkName2.toUpperCase()}
          </Link>
        </Block>
      </Flex>
    </Flex>
  );
};

export default Card;
