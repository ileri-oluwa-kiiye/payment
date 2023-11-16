import Student from "../components/student";
import { DashboardDiv } from "../components/styles";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
// import TopNav from "../components/topNav";

const Dashboard = () => {
  const handlerName = "NiMechSa";
  const revenue = "30,000.00";
  return (
    <DashboardDiv>
      {/* <TopNav  */}
      <h1>NEXUS Pay</h1>
      <div className="header">
        <p className="main">{handlerName}&apos;s Transactions</p>
        <div>
          <h2>Total Revenue</h2>
          <p>#{revenue}</p>
        </div>
      </div>
      <div>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div>
                <Student name="Abolade Ilerioluwakiiye" matricNo="20201838" />
                <Student name="Adele Toyibat" matricNo="20202848" />
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </DashboardDiv>
  );
};

export default Dashboard;
