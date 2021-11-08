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
    List,
    ListIcon,
    VStack,
    InputRightAddon,
} from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'
import { Card } from '@components/design/Card'
import { searchSchoolDistricts, searchSchools, NCESDistrictFeatureAttributes, NCESSchoolFeatureAttributes } from "@utils/nces"
import Logo from '../logo192.png';


const Home: React.FC = () => {
    const [searching, setSearching] = React.useState(false);
    const [userSearch, setUserSearch] = React.useState(false);
    const [showDistrictList, setShowDistrictList] = React.useState(false);
    const [showSchoolList, setShowSchoolList] = React.useState(false);
    const [districtSearch, setDistrictSearch] = React.useState<NCESDistrictFeatureAttributes[]>([]);
    const [districtSchoolSearch, setDistrictSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);
    const [schoolSearch, setSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);
    const [district, setDistrict] = React.useState('');
    const [districtSchool, setDistrictSchool] = React.useState('');
    const [school, setSchool] = React.useState('');
    
    // function to handle district and districtSchools search queries. 
    const handleDistrict= async () => {
        console.log('in handleDistrict', district, districtSchool);
        const districtSearch = await searchSchoolDistricts(district)
        setDistrictSearch(districtSearch)
        setShowDistrictList(true)
        // setShowSchoolList(false)
        console.log("District(s):", districtSearch);
        
        const districtSchoolSearch = await searchSchools(districtSchool, districtSearch[1].LEAID)
        setDistrictSchoolSearch(districtSchoolSearch)
        console.log("District School(s):", districtSchoolSearch);
        setSearching(false)
        console.log("district state", showDistrictList, "school state", showSchoolList)
        //Clear form
        setDistrict('')
    }

    // function to handle school search queries that bypass district
    const handleSchool = async () => {
        console.log('in handleSchool', school);
        // setSearching(true)
        const schoolSearch = await searchSchools(school)
        setSchoolSearch(schoolSearch)
        setShowDistrictList(false)
        // setShowSchoolList(true)
        console.log("School:", schoolSearch);
        setSearching(false)
        console.log("district state", showDistrictList, "school state", showSchoolList)
        //Clear form
        setSchool('')
    }

    // useEffect is listening, ready to call search function
    useEffect(() => {
        handleDistrict();
        handleSchool();
    }, [])

    // Validate inputs
    const validate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('in validateDistrict', district);
        setUserSearch(true);
        setSearching(true)
        handleDistrict();
        handleSchool();
    }
    
    return (
        <Center padding="100px" > {/* Removed height="90vh" to allow for scrolling */}
            <ScaleFade initialScale={0.9} in={true}>
                <Card variant="rounded" borderColor="green.400">
                    <Heading>School Data Finder</Heading>

                    <Divider margin={4} />
                    
                    {/* Hstack places forms side by side
                    TO DO: add mobile/tablet responsiveness */}
                    <HStack spacing={12}>
                    {/* District Form */}
                    <form onSubmit={validate}>
                        <Stack spacing={3}>
                            {/* Helper Text */}
                            <Text textAlign="center">
                                Enter a <b>District</b>
                            </Text>
                            {/* District Input*/}
                            <InputGroup>
                                <InputLeftElement
                                pointerEvents="none"
                                children={<Search2Icon color="blue.500" />}
                                />
                                <Input 
                                borderRadius="20"
                                boxShadow="base"
                                placeholder="District"
                                value={district}
                                isRequired
                                onChange={(e) => setDistrict(e.target.value)} 
                                />
                            </InputGroup>
                            {/* Search District Button */}
                            <Button 
                                colorScheme="blue"
                                boxShadow="md" 
                                variant="solid"
                                type="submit"
                                isFullWidth>
                                Search
                            </Button>
                            <Text textAlign="center">
                                {searching ? 
                                <Spinner /> 
                                : 
                                <Text textAlign="center">{districtSearch.length} Districts</Text>
                                }
                            </Text>
                        </Stack>
                    </form>

                    <Text>
                        OR
                    </Text>

                    {/* School Form */}
                    <form onSubmit={validate}>
                        <Stack spacing={3}>
                            {/* Helper Text */}
                            <Text textAlign="center">
                                Enter a <b>School</b>
                            </Text>
                            {/* School Input*/}
                            <InputGroup>
                                <InputLeftElement
                                    children={<Search2Icon color="yellow.500" />}
                                />
                                <Input 
                                    focusBorderColor="yellow.500"
                                    borderRadius="20"
                                    boxShadow="base"
                                    placeholder="School"
                                    value={school}
                                    isRequired
                                    onChange={(e) => setSchool(e.target.value)}  
                                />
                            </InputGroup>
                            {/* Search School Button */}
                            <Button 
                                colorScheme="yellow"
                                boxShadow="md" 
                                variant="solid"
                                type="submit">
                                Search
                            </Button>
                            <Text textAlign="center">
                                {searching ? 
                                <Spinner /> 
                                : 
                                <Text>{schoolSearch.length} Schools</Text>
                                }
                            </Text>
                        </Stack>
                    </form>
                    </HStack>

                    <Divider margin={4} />
                    
                    {!userSearch && 
                    <img width="100" src={Logo} alt="CharacterStrong Logo" />
                    }
                    {/* UserSearch checks if the user has entered search query before mapping. This prevents mapping all unfiltered results on page load.
                    If user has not entered a search query, the number of total districts is displayed*/}
                    {/* {userSearch && showDistrictList ?
                        <>
                            <Text><b><u>{district} - {districtSearch.length} Districts</u></b></Text>
                            {districtSearch.map((districts) => {
                            // console.log('In districtSearch map', districts);
                                return (
                                    <List spacing={3}>
                                        <ListItem
                                            key={districts.OBJECTID}
                                            cursor="pointer"
                                            _hover={{fontWeight: "900"}}
                                            // onClick={(e) => handleInfo(districts)}
                                        >
                                            <ListIcon as={Search2Icon} color="blue.500" />
                                            {districts.NAME} - {districts.LCITY}, {districts.LSTATE}
                                        </ListItem>
                                    </List>
                                )
                            })}
                        </>
                        :
                        <>
                            <Text><b><u>{school} - {schoolSearch.length} Schools</u></b></Text>
                            {schoolSearch.map((schools) => {
                            // console.log('In districtSearch map', districts);
                                return (
                                    <List spacing={3}>
                                        <ListItem
                                            key={schools.NCESSCH}
                                            cursor="pointer"
                                            _hover={{fontWeight: "900"}}
                                            // onClick={(e) => handleInfo(districts)}
                                        >
                                            <ListIcon as={Search2Icon} color="yellow.500" />
                                            {schools.NAME} - {schools.CITY}, {schools.STATE}
                                        </ListItem>
                                    </List>
                                )
                            })} 
                       </> }
                  */}
                </Card>
            </ScaleFade>
        </Center>
    );
};

export default Home

