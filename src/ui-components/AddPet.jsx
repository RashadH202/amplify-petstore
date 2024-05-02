/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createPet, updatePet } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Button, Flex, Image, Text, TextField } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
const client = generateClient();
export default function AddPet(props) {
  const { pet, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useState("");
  const [
    textFieldThreeEightSixEightOneFiveSevenNineValue,
    setTextFieldThreeEightSixEightOneFiveSevenNineValue,
  ] = useState("");
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useState("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useState("");
  const [
    textFieldThreeEightSixFiveOneFiveOneThreeValue,
    setTextFieldThreeEightSixFiveOneFiveOneThreeValue,
  ] = useState("");
  const [
    textFieldThreeEightSixFiveOneFiveTwoZeroValue,
    setTextFieldThreeEightSixFiveOneFiveTwoZeroValue,
  ] = useState("");
  const contentOnClick = async () => {
    await client.graphql({
      query: createPet.replaceAll("__typename", ""),
      variables: {
        input: {
          about: textFieldTwoNineSevenSixSixNineTwoFourValue,
        },
      },
    });
  };
  const uploadNewImageOnClick = async () => {
    await client.graphql({
      query: updatePet.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldThreeEightSixEightOneFiveSevenNineValue,
          id: pet?.image,
        },
      },
    });
  };
  const textFieldTwoNineSevenSixSixNineTwoTwoOnClick = async () => {
    await client.graphql({
      query: createPet.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
        },
      },
    });
  };
  const textFieldTwoNineSevenSixSixNineTwoThreeOnClick = async () => {
    await client.graphql({
      query: createPet.replaceAll("__typename", ""),
      variables: {
        input: {
          breed: textFieldTwoNineSevenSixSixNineTwoThreeValue,
        },
      },
    });
  };
  const textFieldThreeEightSixFiveOneFiveOneThreeOnClick = async () => {
    await client.graphql({
      query: createPet.replaceAll("__typename", ""),
      variables: {
        input: {
          color: textFieldThreeEightSixFiveOneFiveOneThreeValue,
        },
      },
    });
  };
  const textFieldThreeEightSixFiveOneFiveTwoZeroOnClick = async () => {
    await client.graphql({
      query: createPet.replaceAll("__typename", ""),
      variables: {
        input: {
          age: textFieldThreeEightSixFiveOneFiveTwoZeroValue,
        },
      },
    });
  };
  const textFieldThreeEightSixEightOneFiveSevenNineOnClick = async () => {
    await client.graphql({
      query: createPet.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldThreeEightSixEightOneFiveSevenNineValue,
        },
      },
    });
  };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="833px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="70px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AddPet")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="629px"
        height="752px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="24px 24px 24px 24px"
        onClick={() => {
          contentOnClick();
        }}
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-end"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 438")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Add Pet"
              {...getOverrideProps(overrides, "Add Pet")}
            ></Text>
          </Flex>
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload New Image"
            onClick={() => {
              uploadNewImageOnClick();
            }}
            {...getOverrideProps(overrides, "Upload New Image")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Name"
            placeholder="John Doe"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onClick={() => {
              textFieldTwoNineSevenSixSixNineTwoTwoOnClick();
            }}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Breed"
            placeholder="lab"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onClick={() => {
              textFieldTwoNineSevenSixSixNineTwoThreeOnClick();
            }}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="About"
            placeholder="something about your dog"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Color"
            placeholder="red"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSixFiveOneFiveOneThreeValue}
            onClick={() => {
              textFieldThreeEightSixFiveOneFiveOneThreeOnClick();
            }}
            onChange={(event) => {
              setTextFieldThreeEightSixFiveOneFiveOneThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38651513")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Age"
            placeholder="age"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSixFiveOneFiveTwoZeroValue}
            onClick={() => {
              textFieldThreeEightSixFiveOneFiveTwoZeroOnClick();
            }}
            onChange={(event) => {
              setTextFieldThreeEightSixFiveOneFiveTwoZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38651520")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Image url"
            placeholder="img  url"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSixEightOneFiveSevenNineValue}
            onClick={() => {
              textFieldThreeEightSixEightOneFiveSevenNineOnClick();
            }}
            onChange={(event) => {
              setTextFieldThreeEightSixEightOneFiveSevenNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38681579")}
          ></TextField>
        </Flex>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Save"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
