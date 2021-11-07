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
    VStack,
    InputRightAddon,
} from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'
import { Card } from '@components/design/Card'
import { searchSchoolDistricts, searchSchools, NCESDistrictFeatureAttributes, NCESSchoolFeatureAttributes } from "@utils/nces"


const Home: React.FC = () => {
    const [searching, setSearching] = React.useState(false)
    const [districtSearch, setDistrictSearch] = React.useState<NCESDistrictFeatureAttributes[]>([]);
    const [districtSchoolSearch, setDistrictSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);
    const [schoolSearch, setSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);
    const [district, setDistrict] = React.useState('');
    const [districtSchool, setDistrictSchool] = React.useState('');
    const [school, setSchool] = React.useState('');
    

    
    // function to handle district and districtSchools search queries. 
    const handleDistrict= async () => {
        console.log('in handleDistrict', district, districtSchool);
        setSearching(true)
        const districtSearch = await searchSchoolDistricts(district)
        setDistrictSearch(districtSearch)
        console.log("District(s):", districtSearch);
        
        const districtSchoolSearch = await searchSchools(districtSchool, districtSearch[1].LEAID)
        setDistrictSchoolSearch(districtSchoolSearch)
        console.log("District School(s):", districtSchoolSearch);
        setSearching(false)
    }

    // function to handle school search queries that bypass district
    const handleSchool = async () => {
        console.log('in handleSchool', school);
        setSearching(true)
        
        const schoolSearch = await searchSchools(school)
        setSchoolSearch(schoolSearch)
        console.log("School:", schoolSearch);
        setSearching(false)
    }

    // useEffect is listening, ready to call search function
    useEffect(() => {
        handleDistrict();
        handleSchool();
    }, [])

    // Validate inputs
    // Todo: declare type for e or find a different method
    const validate = (e) => {
        e.preventDefault();
        console.log('in validateDistrict', district);
        handleDistrict();
        handleSchool();
    }

    

    
    return (
        <Center padding="100px" height="90vh">
            <ScaleFade initialScale={0.9} in={true}>
                <Card variant="rounded" borderColor="blue">
                    <Heading>School Data Finder</Heading>

                    <Divider margin={4} />
                    {/* <Text>
                        How would you utilize React.useEffect with the searchSchoolDistricts and searchSchools functions? <br />
                        Using <a href="https://chakra-ui.com/docs/principles" target="_blank">Chakra-UI</a> or your favorite UI toolkit, build an interface that allows the user to: <br />
                        <OrderedList>
                            <ListItem>Search for a district</ListItem>
                            <ListItem>Search for a school within the district (or bypass district filter)</ListItem>
                            <ListItem>View all returned data in an organized way</ListItem>
                        </OrderedList>
                    </Text> */}
                    
                    <HStack spacing={12}>
                    {/* District Form */}
                    <form onSubmit={validate}>
                        <Stack spacing={3}>
                            {/* Helper Text */}
                            <Text>
                                Enter a <b>District</b> and click <b>Search!</b>
                            </Text>
                            {/* District Input*/}
                            <InputGroup>
                                <InputLeftElement
                                pointerEvents="none"
                                children={<Search2Icon color="black.300" />}
                                />
                                <Input 
                                borderRadius="20"
                                boxShadow="base"
                                placeholder="District"
                                isRequired
                                onChange={(e) => setDistrict(e.target.value)} 
                                />
                            </InputGroup>
                            {/* Search District Button */}
                            <Button 
                                colorScheme="purple"
                                boxShadow="md" 
                                variant="solid"
                                type="submit"
                                isFullWidth>
                                Search
                            </Button>
                        </Stack>
                    </form>

                    <Text>
                        OR
                    </Text>

                    {/* School Form */}
                    <form onSubmit={validate}>
                        <Stack spacing={3}>
                            {/* Helper Text */}
                            <Text>
                                Enter a <b>School</b> and click <b>Search!</b>
                            </Text>
                            {/* School Input*/}
                            <InputGroup>
                                <InputLeftElement
                                children={<Search2Icon color="black.300" />}
                                />
                                <Input 
                                focusBorderColor="green.300"
                                borderRadius="20"
                                boxShadow="base"
                                placeholder="School"
                                isRequired
                                onChange={(e) => setSchool(e.target.value)}  
                                />
                            </InputGroup>
                            {/* Search School Button */}
                            <Button 
                                colorScheme="purple"
                                boxShadow="md" 
                                variant="solid"
                                type="submit">
                                Search School
                            </Button>
                        </Stack>
                    </form>
                    </HStack>

                    <Divider margin={4} />

                        <Text>
                            {searching ? <Spinner /> : <></>}< br />
                            {districtSearch.length} Districts<br />
                            {districtSchoolSearch.length} District Schools<br />
                            {schoolSearch.length} Schools<br />
                        </Text>
                </Card>
            </ScaleFade>
        </Center>
    );
};

export default Home

