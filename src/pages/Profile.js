import React from 'react';
import { TabList, TabPanels, Tabs, Tab, TabPanel, List, ListItem, ListIcon } from '@chakra-ui/react';
import { EmailIcon, ChatIcon, StarIcon, CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { warning } from 'framer-motion';
const Profile = () => {
  return (
    <div>
      <Tabs mt="40px" p="10px" colorScheme="purple" variant="enclosed">
        <TabList >
          <Tab _selected={{ color: "white", bg: "purple" }}>Account Info</Tab>
          <Tab _selected={{ color: "white", bg: "purple" }}>Task History</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <List spacing={4} textAlign="left">
              <ListItem>
                <ListIcon as={EmailIcon} color="purple.400" />
                Email: mario@netninja.dev
              </ListItem>
              <ListItem>
                <ListIcon as={ChatIcon} color="purple.400" />
                Lorem ipsum dolor
              </ListItem>
              <ListItem>
                <ListIcon as={StarIcon} color="purple.400" />
                Lorem ipsum dolor sit amet
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <List spacing={4} textAlign="left">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="teal.400" />
                Duis aute irure dolor in reprehenderit in voluptate velit
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="teal.400" />
                Duis aute irure dolor in reprehenderit in voluptate velit
              </ListItem>
              <ListItem>
                <ListIcon as={WarningIcon} color="red.400" />
                Duis aute irure dolor in reprehenderit in voluptate velit
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="teal.400" />
                Duis aute irure dolor in reprehenderit in voluptate velit
              </ListItem>
              <ListItem>
                <ListIcon as={WarningIcon} color="red.400" />
                Duis aute irure dolor in reprehenderit in voluptate velit
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>

      </Tabs>
    </div>
  );
}

export default Profile;

//variant="enclosed" kenarları yuvarlatır.
//_selected={{color:"white", bg:"purple" }} seçildiğinde arka planı mor yazı rengini beyaz yapar.
