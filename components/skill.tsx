import {
  Badge,
  Box,
  Text,
  ThemingProps,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

type VariantType = "outline" | "solid" | "subtle";
interface Props {
  children: React.ReactNode | React.ReactNode[];
  level?: number;
  variant?: VariantType;
}
enum LevelColor {
  BEGINNER = "red",
  INTERMEDIAR = "orange",
  ADVANCE = "green",
  EXPERT = "yellow",
}

const LEVEL_TO_COLOR: Record<number, LevelColor> = {
  1: LevelColor.BEGINNER,
  2: LevelColor.INTERMEDIAR,
  3: LevelColor.ADVANCE,
  4: LevelColor.EXPERT,
};

enum LevelName {
  BEGINNER = "Beginner",
  INTERMEDIAR = "Intermediar",
  ADVANCE = "Advance",
  EXPERT = "Expert",
}

const LEVEL_TO_NAME = {
  1: LevelName.BEGINNER,
  2: LevelName.INTERMEDIAR,
  3: LevelName.ADVANCE,
  4: LevelName.EXPERT,
};

const Skill: React.FunctionComponent<Props> = ({
  children,
  level,
  variant = "solid",
}) => {
  const levelName = level < 5 ? LEVEL_TO_NAME[level] : "Unkown";
  const level5Color = useColorModeValue("blackAlpha", "whiteAlpha");
  const colorSchema = level < 5 ? LEVEL_TO_COLOR[level] : level5Color;
  console.log(level5Color);
  return (
    <Box>
      <Badge
        w='fit-content'
        paddingX={2}
        fontSize={{ base: 20, md: 15 }}
        variant={variant}
        colorScheme={colorSchema}
      >
        {children}
      </Badge>
      {level && (
        <>
          <Text fontSize={{ base: 18, md: 10 }}>{`${levelName} level`}</Text>
          {level < 5 && (
            <Text fontSize={{ base: 18, md: 10 }}>{`${level * 25}% `}</Text>
          )}
          {level > 5 && <Text fontSize={{ base: 18, md: 10 }}>{``}</Text>}
        </>
      )}
    </Box>
  );
};

export default Skill;
