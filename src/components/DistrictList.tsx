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

const DistrictList: React.FC = () => {

    const [searching, setSearching] = React.useState(false);
    const [userSearch, setUserSearch] = React.useState(false);
    const [districtSearch, setDistrictSearch] = React.useState<NCESDistrictFeatureAttributes[]>([]);
    // const [districtSchoolSearch, setDistrictSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);
    const [district, setDistrict] = React.useState('');
    const [searchQuery, setSearchQuery] = React.useState('');
    // const [districtSchool, setDistrictSchool] = React.useState('');

    // Validate inputs
    const validateDistrict = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('in validateDistrict', district);
        setUserSearch(true);
        setSearching(true);
        handleDistrict();
    }

    // function to handle district and districtSchools search queries. 
    const handleDistrict= async () => {
        // console.log('in handleDistrict', district, districtSchool);
        const districtSearch = await searchSchoolDistricts(district)
        setDistrictSearch(districtSearch)
        setSearchQuery(district)
        console.log("District(s):", districtSearch);
        // const districtSchoolSearch = await searchSchools(districtSchool, districtSearch[1].LEAID)
        // setDistrictSchoolSearch(districtSchoolSearch)
        // console.log("District School(s):", districtSchoolSearch);
        setSearching(false)
        //Clear form
        setDistrict('')
    }

    // useEffect is listening, ready to call search function
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
            <Text><b><u>"{searchQuery}" - {districtSearch.length}</u></b></Text>
            
            {districtSearch.length < 60 ? 
                districtSearch.map((districts) => {
                // console.log('In districtList .map', districts)
                return (
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

