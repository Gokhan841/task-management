import React from 'react'
import { Avatar, AvatarBadge, useToast } from '@chakra-ui/react'
import { Flex, Heading, Spacer, Text, Box, Button, HStack } from '@chakra-ui/react'
import { UnlockIcon } from '@chakra-ui/icons'


const Navbar = () => {
    const toast = useToast()
    const showToast = () => {
        toast({
            title: 'Logged Out',
            description: "We've created your account for you.",
            status: 'success',
            duration: 3000,
            isClosable: false,
            position :"top",
            icon :<UnlockIcon></UnlockIcon>
        })
    }

    return (
        <Flex as="nav" p="10px" alignItems="center" mb="40px">
            <Heading as="h6"> DOJO TASKS</Heading>
            <Spacer></Spacer>

            <HStack spacing="5">
                <Avatar name='Gökhan' bg="purple.400" color="white">
                    <AvatarBadge w="1.3em" bg="black" borderColor="gold">
                        <Text fontSize="xs" color="gold">3</Text>
                    </AvatarBadge>
                </Avatar>
                <Text>mario@netninja.dev</Text>
                <Button colorScheme='purple' onClick={showToast}>Logout</Button>
            </HStack>
        </Flex>

        // Flex normalde div olarak davranır.Ama as özelliğine nav verirsek, flex bileşenini nav etiketi olarak render edebilirsiniz.
        // Spacer kendinden önceki bileşenleri sola sonrakileri sağa hizalar. 
        // Hstack içindeki elemanları düzenlememize yardımcı olur. spacing özelliği aralarındaki boşluğu ayarlar.
    )
}

export default Navbar

// toast pop-uplar için kullanılır.
// import { useToast } from '@chakra-ui/react' ile yüklemek gerikyor en önce

// avatarlarda png yüklemezsek name özelliğinden yararlanıp girilen adın ilk harfini avatar olarak ayarlayabiliriz.
// avatarbadge ile rozet yapabilirz.