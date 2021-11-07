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
    const [schoolSearch, setSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);
    
    // function to handle district and school search queries. 1st draft
    const search = async () => {
        setSearching(true)
        const demoDistrictSearch = await searchSchoolDistricts("Peninsula School District")
        setDistrictSearch(demoDistrictSearch)
        console.log("District example", demoDistrictSearch);
        
        const demoSchoolSearch = await searchSchools("k", demoDistrictSearch[1].LEAID)
        setSchoolSearch(demoSchoolSearch)
        console.log("School example", demoSchoolSearch);
        setSearching(false)
    }

    // useEffect is listening, ready to call search function
    useEffect(() => {
        search()
    }, [])
    
    return (
        <Center padding="100px" height="90vh">
            <ScaleFade initialScale={0.9} in={true}>
                <Card variant="rounded" borderColor="blue">
                    <Heading>School Data Finder</Heading>
                    <Text>
                        How would you utilize React.useEffect with the searchSchoolDistricts and searchSchools functions? <br />
                        Using <a href="https://chakra-ui.com/docs/principles" target="_blank">Chakra-UI</a> or your favorite UI toolkit, build an interface that allows the user to: <br />
                        <OrderedList>
                            <ListItem>Search for a district</ListItem>
                            <ListItem>Search for a school within the district (or bypass district filter)</ListItem>
                            <ListItem>View all returned data in an organized way</ListItem>
                        </OrderedList>
                    </Text>
                    <Divider margin={4} />
                    <Text>
                        Enter a <b>District</b> and <b>School</b> below, then click <b>Search!</b>
                    </Text>
                    <Stack spacing={3}>
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
                            />
                        </InputGroup>
                         {/* Search District Button */}
                         <Button 
                            colorScheme="purple"
                            boxShadow="md" 
                            variant="solid">
                            Search District
                        </Button>
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
                            />
                        </InputGroup>
                        {/* Search School Button */}
                        <Button 
                            colorScheme="purple"
                            boxShadow="md" 
                            variant="solid">
                            Search School
                        </Button>
                        <Text>
                            {searching ? <Spinner /> : <></>}< br />
                            {districtSearch.length} Districts<br />
                            {schoolSearch.length} Schools<br />
                        </Text>
                    </Stack>
                </Card>
            </ScaleFade>
        </Center>
    );
};

export default Home