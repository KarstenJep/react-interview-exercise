import React, { useEffect } from "react"
import {
    Button,
    Center,
    Heading,
    Text,
    Icon,
    Input,
    ScaleFade,
    OrderedList,
    Divider,
    ListItem,
    Spinner,
    InputGroup, // Some Chakra components that might be usefull
    InputLeftElement,
    Stack,
    HStack,
    Box,
    List,
    ListIcon,
    VStack,
    InputRightAddon,
} from "@chakra-ui/react"
import { Card } from '@components/design/Card'
import Logo from '../logo192.png';
import DistrictList from "./DistrictList"
import SchoolList from "./SchoolList"


const Home: React.FC = () => {

    // By default District Form will load. School Form renders when true
    const [schoolForm, setSchoolForm] = React.useState(false);
    
    return (
        <Center padding="100px" > {/* Removed height="90vh" to allow for scrolling */}
            <ScaleFade initialScale={0.9} in={true}>
                <Card variant="rounded" borderColor="blue.300">
                    {/* Using state to toggle between the School Form and District Form */}
                    {schoolForm ? 
                        <>
                        <Heading color="yellow.800">School Data Finder</Heading>
                        <Divider margin={3} />
                        <HStack spacing={2}>
                            {/* District Btn */}
                            <Button 
                                colorScheme="blue"
                                boxShadow="md" 
                                variant="ghost"
                                onClick={() => setSchoolForm(false)}>
                                Districts
                            </Button>
                            {/* School Btn */}
                            <Button 
                                colorScheme="yellow"
                                boxShadow="md" 
                                variant="solid"
                                onClick={() => setSchoolForm(true)}>
                                Schools
                            </Button>
                        </HStack>
                        <Divider margin={3} />
                        {/* SchoolList component will import form and search results */}
                        <SchoolList />
                        </>
                        :
                        <>
                        <Heading color="blue.700">District Data Finder</Heading>
                        <Divider margin={3} />
                        <HStack spacing={2}>
                            {/* District Btn */}
                            <Button 
                                colorScheme="blue"
                                boxShadow="md" 
                                variant="solid"
                                onClick={() => setSchoolForm(false)}>
                                Districts
                            </Button>
                            {/* School Btn */}
                            <Button 
                                colorScheme="yellow"
                                boxShadow="md" 
                                variant="ghost"
                                onClick={() => setSchoolForm(true)}>
                                Schools
                            </Button>
                        </HStack>
                        <Divider margin={3} />
                        {/* DistrictList component will import form and search results */}
                        <DistrictList />
                        </>
                    }
                    <Divider margin={3} />
                    {/* CS logo */}
                    <img width="80vh" src={Logo} alt="CharacterStrong Logo" />
                </Card>
            </ScaleFade>
        </Center>
    );
};

export default Home

