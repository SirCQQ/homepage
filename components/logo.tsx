import Link from "next/link";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  // const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href='/' scroll={false}>
      <a>
        <LogoBox>
          <Flex
            borderRadius={9999}
            border={useColorModeValue("3px solid black", " 3px solid white")}
            borderWidth='3px'
            padding='1'
            h='10'
            w='10'
            alignItems={"center"}
            justifyContent='center'
          >
            <Text
              fontSize={"1rem"}
              h='fit-content'
              w='full'
              textAlign={"center"}
              lineHeight='inherit'
              _hover={{
                transform: "rotate(-20deg)",
              }}
            >
              SQ
            </Text>
          </Flex>
          {/* <Image src={logoImg} width={20} height={20} alt="logo" /> */}
          <Text
            color={useColorModeValue("gray.900", "whiteAlpha.900")}
            fontFamily='monospace, sans-serif'
            fontWeight='bold'
            ml={3}
          >
            Gatu Cristian
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
