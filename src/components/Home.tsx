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
import { Search2Icon } from '@chakra-ui/icons'
import { Card } from '@components/design/Card'
import { searchSchoolDistricts, searchSchools, NCESDistrictFeatureAttributes, NCESSchoolFeatureAttributes } from "@utils/nces"
import Logo from '../logo192.png';
import './SchoolList'
import DistrictList from "./DistrictList"
import SchoolList from "./SchoolList"


const Home: React.FC = () => {

    const [schoolForm, setSchoolForm] = React.useState(false);
    console.log('schoolForm', schoolForm)
    // const [searching, setSearching] = React.useState(false);
    // const [userSearch, setUserSearch] = React.useState(false);
    // const [showDistrictList, setShowDistrictList] = React.useState(false);
    // const [showSchoolList, setShowSchoolList] = React.useState(false);
    // const [districtSearch, setDistrictSearch] = React.useState<NCESDistrictFeatureAttributes[]>([]);
    // const [districtSchoolSearch, setDistrictSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);
    // const [schoolSearch, setSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);
    // const [district, setDistrict] = React.useState('');
    // const [districtSchool, setDistrictSchool] = React.useState('');
    // const [school, setSchool] = React.useState('');
    
    // // Validate inputs
    // const validateDistrict = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log('in validateDistrict', district);
    //     setUserSearch(true);
    //     setSearching(true);
    //     // setShowDistrictList(true);
    //     handleDistrict();
        
    // }

    //  // Validate inputs
    //  const validateSchool = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log('in validateDistrict', district);
    //     setUserSearch(true);
    //     setSearching(true)
    //     handleSchool();
    // }

    // // function to handle district and districtSchools search queries. 
    // const handleDistrict= async () => {
    //     // console.log('in handleDistrict', district, districtSchool);
        
    //     const districtSearch = await searchSchoolDistricts(district)
    //     setDistrictSearch(districtSearch)
       
    //     console.log("District(s):", districtSearch);
    
    //     // const districtSchoolSearch = await searchSchools(districtSchool, districtSearch[1].LEAID)
    //     // setDistrictSchoolSearch(districtSchoolSearch)
    //     // console.log("District School(s):", districtSchoolSearch);
    //     setSearching(false)
    //     // console.log("district state", showDistrictList, "school state", showSchoolList)
    //     //Clear form
    //     setDistrict('')
        
    // }

    // // function to handle school search queries that bypass district
    // const handleSchool = async () => {
    //     // console.log('in handleSchool', school);
    //     setShowDistrictList(false);
    //     const schoolSearch = await searchSchools(school)
    //     setSchoolSearch(schoolSearch)
       
    //     console.log("School:", schoolSearch);
    //     setSearching(false)
    //     console.log("district state", showDistrictList, "school state", showSchoolList)
    //     //Clear form
    //     setSchool('')
    // }

    // // useEffect is listening, ready to call search function
    // useEffect(() => {
    //     handleDistrict();
    //     // handleSchool();
    // }, [])
    
    return (
        <Center padding="100px" > {/* Removed height="90vh" to allow for scrolling */}
            <ScaleFade initialScale={0.9} in={true}>
                <Card variant="rounded" borderColor="blue.300">
                    {/* TO DO: add mobile/tablet responsiveness */}
                    {schoolForm ? 
                        <>
                        <Heading color="yellow.800">School Data Finder</Heading>
                        <Divider margin={3} />
                        <HStack spacing={2}>
                            <Button 
                                colorScheme="blue"
                                boxShadow="md" 
                                variant="ghost"
                                onClick={() => setSchoolForm(false)}>
                                Districts
                            </Button>
                            <Button 
                                colorScheme="yellow"
                                boxShadow="md" 
                                variant="solid"
                                onClick={() => setSchoolForm(true)}>
                                Schools
                            </Button>
                        </HStack>
                        <Divider margin={3} />
                        <SchoolList />
                        </>
                        :
                        <>
                        <Heading color="blue.700">District Data Finder</Heading>
                        <Divider margin={3} />
                        <HStack spacing={2}>
                            <Button 
                                colorScheme="blue"
                                boxShadow="md" 
                                variant="solid"
                                onClick={() => setSchoolForm(false)}>
                                Districts
                            </Button>
                            <Button 
                                colorScheme="yellow"
                                boxShadow="md" 
                                variant="ghost"
                                onClick={() => setSchoolForm(true)}>
                                Schools
                            </Button>
                        </HStack>
                        <Divider margin={3} />
                        <DistrictList />
                        </>
                    }

                    <Divider margin={3} />

                    <img width="80vh" src={Logo} alt="CharacterStrong Logo" />
                 
                    
                    {/* UserSearch checks if the user has entered search query before mapping. This prevents mapping all unfiltered results on page load.
                    If user has not entered a search query, the number of total districts is displayed*/}
                    {/* {userSearch && showDistrictList ?
                        <>
                            <Text><b><u>{district} - {districtSearch.length} Districts</u></b></Text>
                            {districtSearch.map((districts) => { */}
                          
                                {/* return (
                                    <List spacing={3}>
                                        <ListItem
                                            key={districts.OBJECTID}
                                            cursor="pointer"
                                            _hover={{fontWeight: "900", color: "blue.500"}}
                                            // onClick={(e) => handleInfo(districts)}
                                        >
                                            <ListIcon as={Search2Icon} color="blue.500" />
                                            {districts.NAME} - {districts.LCITY}, {districts.LSTATE}
                                        </ListItem>
                                    </List>
                                )
                            })}
                        </> */}
                        {/* : */}
                        {/* <>
                            <Text><b><u>{school} - {schoolSearch.length} Schools</u></b></Text>
                            {schoolSearch.map((schools) => {
                            // console.log('In districtSearch map', districts);
                                return (
                                    <List spacing={3}>
                                        <ListItem
                                            key={schools.NCESSCH}
                                            cursor="pointer"
                                            _hover={{fontWeight: "900", color:"yellow.500"}}
                                            // onClick={(e) => handleInfo(districts)}
                                        >
                                            <ListIcon as={Search2Icon} color="yellow.500" />
                                            {schools.NAME} - {schools.CITY}, {schools.STATE}
                                        </ListItem>
                                    </List>
                                )
                            })} 
                       </> } */}
                 
                </Card>
            </ScaleFade>
        </Center>
    );
};

export default Home

