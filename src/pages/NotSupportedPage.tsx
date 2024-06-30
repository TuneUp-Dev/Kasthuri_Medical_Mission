import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Illustration } from "./NotSupportedScreen/IllustrationNSP.tsx";
import classes from "./NotSupportedScreen/NotSupportedScreen.module.css";
import "./NotSupportedScreen/NotSupportedScreen.css";
import React from "react";
import { Link } from "react-router-dom";

function NotSupportedPage() {
  return (
    <div className="Error_Page mt-[200px]">
      <Container className={classes.root}>
        <div className={classes.inner}>
          <div className="">
            <Illustration className={classes.image} />
          </div>
          <div className={classes.content}>
            <div className="Error_Page_Contents mt-[200px] absolute">
              <Title className={classes.title} id="error-page-title">
                Ooops...!
              </Title>
              <Text
                c="dimmed"
                size="lg"
                ta="center"
                className={classes.description}
                id="error-page-description"
              >
                This website is not supported on your device. Please try
                accessing it from a different device or check for compatibility
                updates.
              </Text>
              <Group justify="center">
                <Button size="md" color="#34d399" className="bg-emerald-400">
                  Try again
                </Button>
              </Group>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NotSupportedPage;
