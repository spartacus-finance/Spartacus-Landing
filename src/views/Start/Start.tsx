import React, { useCallback, useEffect, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardIcon,
  Container,
  Separator,
  Spacer,
} from "react-neu";
import styled from "styled-components";

import StartPage from "components/StartPage";
import StartPageHeader from "components/StartPageHeader";
import StartSplit from "components/StartSplit";

const ASTRONAUTS = ["🕛", "🏛️", "⏳", "🔱 Ω", "Λ"];

const Start: React.FC = () => {
  const [astronaut, setAstronaut] = useState("Λ");

  const updateAstronaut = useCallback(() => {
    const newAstro = ASTRONAUTS[Math.floor(Math.random() * ASTRONAUTS.length)];
    setAstronaut(newAstro);
  }, [setAstronaut]);

  useEffect(() => {
    const refresh = setInterval(updateAstronaut, 1000);
    return () => clearInterval(refresh);
  }, [updateAstronaut]);

  return (
    <StartPage>
      <StyledHero>
        <StartPageHeader
          icon={`${astronaut}`}
          title="DeFi 2.0 tools to grow your crypto assets"
          subtitle="Spartacus is the Olympus fork on Fantom. Spartacus is missioned to build a community owned protocol for decentralized reserve currency."
        />
        <Container size="lg">
          <Box row justifyContent="center">
            <Button text="Open App" href="https://app.spartacus.finance" />
            <Spacer />
            <Button
              text="Join Λ Discord"
              href="https://discord.gg/WHVARU4KzV"
              variant="secondary"
            />
          </Box>
        </Container>
      </StyledHero>
      <Container size="lg">
        <Spacer size="lg" />
        <Separator />
        <Spacer size="lg" />
        <StyledSectionIcon>⚖️</StyledSectionIcon>
        <Spacer size="lg" />
        <StyledSectionTitle>Fair finance for everyone.</StyledSectionTitle>
        <StyledSectionDescription>
          Spartacus is owned and controlled by our community of Λ token holders.
        </StyledSectionDescription>
        <Spacer size="lg" />
        <StartSplit>
          <Card>
            <Spacer size="md" />
            <CardIcon>💸</CardIcon>
            <CardContent>
              <StyledCardName>Growing Treasury</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
                Bond sales and liquidity fees increase Treasury values, which back outstanding SPA tokens with intrinsic value.
              </StyledCardDescription>
            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button
                  text="View treasury"
                  variant="secondary"
                  to="/dashboard"
                />
              </Box>
            </CardActions> */}
          </Card>
          <Card>
            <Spacer size="md" />
            <CardIcon>🏛️</CardIcon>
            <CardContent>
              <StyledCardName>Protocol Owned Liquidity</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
                No more predatory farmers. Lock-in liquidity also help regulate SPA supply.
              </StyledCardDescription>
            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button text="Start farming" variant="secondary" to="/farm" />
              </Box>
            </CardActions> */}
          </Card>
          <Card>
            <Spacer size="md" />
            <CardIcon>🗣️</CardIcon>
            <CardContent>
              <StyledCardName>Decentralized Governance</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
                Λ holders decide Spartacus's future via on-chain voting.
              </StyledCardDescription>
            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button text="Go vote" variant="secondary" to="/governance" />
              </Box>
            </CardActions> */}
          </Card>
        </StartSplit>
        <Spacer size="lg" />
        <Separator />
        <Spacer size="lg" />
      </Container>
    </StartPage>
  );
};

const StyledHero = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(80vh - 96px);
  max-height: 600px;
  min-height: 400px;
`;

const StyledCardName = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const StyledCardDescription = styled.div`
  color: ${(props) => props.theme.colors.grey[500]};
  font-size: 16px;
  min-height: 56px;
  text-align: center;
`;
const StyledSectionDescription = styled.h3`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  opacity: 0.66;
  font-weight: 400;
  text-align: center;
`;

const StyledSectionTitle = styled.div`
  color: ${(props) => props.theme.colors.primary.main};
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const StyledSectionIcon = styled.div`
  font-size: 64px;
  text-align: center;
`;

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0.66;
`;

export default Start;
