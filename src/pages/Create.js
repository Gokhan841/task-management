import React from 'react'
import { useState } from 'react';
import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react'


const Create = () => {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    isPriority: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(formData); 
  };
  return (


    <Box maxW="480px">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb="40px" textAlign="left" >
          <FormLabel>Task Name :</FormLabel>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}></Input>
          <FormHelperText >Enter a descriptive task name</FormHelperText>
        </FormControl>

        <FormControl isRequired mb="40px" textAlign="left" >
          <FormLabel>Task Description :</FormLabel>
          <Textarea
            name="description"
            placeholder="Enter a detailed description about the task..."
            value={formData.description}
            onChange={handleChange}
          ></Textarea>
        </FormControl>

        <FormControl display="flex" alignItems="center" textAlign="left" mb="40px" >
          <Checkbox name='isPriority' size="lg" colorScheme="purple" mr="10px"></Checkbox>
          <FormLabel mb="0px">Make this priority task</FormLabel>
        </FormControl>

        <Button type='submit'>Submit</Button>

      </form>
    </Box>
  )
}

export default Create

