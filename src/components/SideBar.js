import React from 'react'
import { List, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { LinkIcon, CalendarIcon, EditIcon, AtSignIcon } from '@chakra-ui/icons'

const SideBar = () => {
    return (
        <List color="white" fontSize="1.2em" spacing={4}>
            <ListItem>
                <LinkIcon as={CalendarIcon} color={'white'}></LinkIcon>
                <NavLink to="/dashboard">DashBoard</NavLink>
            </ListItem>
            <ListItem>
                <LinkIcon as={EditIcon} color={'white'}></LinkIcon>
                <NavLink to="/create">New Task</NavLink>
            </ListItem>
            <ListItem>
                <LinkIcon as={AtSignIcon} color={'white'}></LinkIcon>
                <NavLink to="/profile">Profile</NavLink>
            </ListItem>
        </List>
    )
}

export default SideBar

// ListIconları kullanmak için chakraui dan icon arat icon kütüphanesini bul npm ile kur. 
// Kullanmak istediğin her icon'u gidip yukarıta import etmeyi unutma.