import { SimpleGrid, Text, Card, CardBody, CardHeader, CardFooter, Flex, Box, Heading, HStack, Button, Divider, Avatar } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';

const DashBoard = () => {
  const [data, setData] = useState([]); // Veriyi saklamak için state

  useEffect(() => {
    // Axios ile JSON dosyasından veriyi çekme
    axios.get('/data/db.json')
      .then((response) => {
        console.log(response.data); // Konsola veriyi yazdırarak yapısını inceleyin

        // Eğer veriler "tasks" anahtarı altında ise ona erişin
        if (response.data.tasks) {
          setData(response.data.tasks); // tasks dizisini state'e kaydedin
        } else {
          console.error('Beklenmeyen veri formatı:', response.data);
        }
      })
      .catch((error) => {
        console.error('Veri çekilirken bir hata oluştu:', error);
      });
  }, []);

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {data && data.map((task) => (
        <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
          <CardHeader>
            <Flex gap={5}>
            <Avatar src={task.img}></Avatar>
              <Box>
                <Heading as="h3" size="sm">{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Text>{task.description}</Text>
          </CardBody>
          <Divider borderColor="gray"></Divider>
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon></ViewIcon>}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon></EditIcon>}>Comment</Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default DashBoard;



//Arasında 10px boşluklar olan 4 kutu oluşturur. minchildWidth özelliği her bir bileşenin minimum genişliğini 300px
//olarak ayarladı ve bu değere ulaşana kadar sayfa küçüldüğünde sonraki bileşenleri aşağı attı.

//tasklardaki avatarlarda isim yazılmadığınd aya da yanlış yazıldığında default avatar geliyo.
