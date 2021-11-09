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
import { searchSchoolDistricts, NCESDistrictFeatureAttributes } from "@utils/nces"

const DistrictList: React.FC = () => {
    // Searching state operates spinner
    const [searching, setSearching] = React.useState(false);
    // userSearch initiates displaying result
    const [userSearch, setUserSearch] = React.useState(false);
    // districtSearch holds search results list
    const [districtSearch, setDistrictSearch] = React.useState<NCESDistrictFeatureAttributes[]>([]);
    // district holds input from district form and transfers to districtQuery
    const [district, setDistrict] = React.useState('');
    const [districtQuery, setDistrictQuery] = React.useState('');
    // TODO: Add feature to search schools within a district
    // const [districtSchoolSearch, setDistrictSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);
    // const [districtSchool, setDistrictSchool] = React.useState('');

    // Validate District input
    const validateDistrict = (e: React.FormEvent<HTMLFormElement>) => {
        // console.log('in validateDistrict', district);
        e.preventDefault();
        setUserSearch(true);
        setSearching(true);
        handleDistrict();
    }

    // function to handle district and districtSchools search queries. 
    const handleDistrict= async () => {
        // console.log('in handleDistrict', district, districtSchool);
        const districtSearch = await searchSchoolDistricts(district)
        console.log("District(s):", districtSearch);
        setDistrictSearch(districtSearch)
        setDistrictQuery(district)
        setSearching(false)
        // TODO: Add feature to search schools within a district
        // const districtSchoolSearch = await searchSchools(districtSchool, districtSearch[1].LEAID)
        // setDistrictSchoolSearch(districtSchoolSearch)
        // console.log("District School(s):", districtSchoolSearch);
        //Clear form
        setDistrict('')
    }

    // useEffect is listening, and calls handleDistrict on page load
    useEffect(() => {
        handleDistrict();
    }, [])

    return (
        <>
        {/* District Form */}
        <form onSubmit={validateDistrict}>
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
                {/* Renders spinner if searching, or number of search results */}
                <Text textAlign="center">
                    {searching ? 
                    <Spinner /> 
                    : 
                    <Text textAlign="center">{districtSearch.length} Districts</Text>
                    }
                </Text>
            </Stack>
        </form>
        
        <Divider margin={3} />

        {userSearch ?
            <>
            <Text><b><u>"{districtQuery}" - {districtSearch.length}</u></b></Text>
            {/* < 60 conditional prevents looping through massive lists. Better user experience */}
            {districtSearch.length < 60 ? 
                districtSearch.map((districts) => {
                // console.log('In districtList .map', districts)
                return (
                    // District List
                    <List spacing={3}>
                        <ListItem
                            key={districts.OBJECTID}
                            cursor="pointer"
                            _hover={{fontWeight: "900", color: "blue.700"}}
                            // onClick={(e) => handleInfo(districts)}
                        >
                            <ListIcon as={Search2Icon} color="blue.500" />
                            {districts.NAME} - {districts.LCITY}, {districts.LSTATE}
                        </ListItem>
                    </List>
                )
            })
            :
            <Text>Too many results. Please narrow your search!</Text>
            }
        </>
        :
        <></>
        }             
    </>
    );
}

export default DistrictList;

