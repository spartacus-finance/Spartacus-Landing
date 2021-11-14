
import numeral from "numeral";
import React from "react";
import { Container } from "react-neu";

import Page from "components/Page";
import PageHeader from "components/PageHeader";

import TopCards from "./components/TopCards";


import { useTranslation } from 'react-i18next';

const Dashboard: React.FC = () => {


  const { t } = useTranslation();

  const yamObject = {
    currentPrice: numeral(1).format(
      "0.00a"
    ),
    maxSupply: numeral(1e6).format("0.00a"),
    marketCap: numeral(1e6).format("0.00a"),
    treasuryValue:
      "~$" + numeral(1e7).format("0.00a"),
    change24:
      numeral(10).format("0.00a") + "%",
  };

  return (
    <Page>
      <PageHeader icon="📊" subtitle="Overview of the YAM ecosystem" title="YAM Dashboard" />
      {/* <p>{t("hello")}</p> */}
      <Container size="lg">
        <TopCards yamObject={yamObject} />
      </Container>
    </Page>
  );
};

export default Dashboard;
