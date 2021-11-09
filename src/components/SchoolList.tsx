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
import { searchSchools, NCESSchoolFeatureAttributes } from "@utils/nces"

const SchoolList: React.FC = () => {
    // Searching state operates spinner
    const [searching, setSearching] = React.useState(false);
    // userSearch initiates displaying result
    const [userSearch, setUserSearch] = React.useState(false);
    // schoolSearch holds search results list
    const [schoolSearch, setSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);
    // school holds input from school form and transfers to schoolQuery
    const [school, setSchool] = React.useState('');
    const [schoolQuery, setSchoolQuery] = React.useState('');

     // Validate School input
     const validateSchool = (e: React.FormEvent<HTMLFormElement>) => {
        // console.log('in validateSchool', school);
        e.preventDefault();
        setUserSearch(true);
        setSearching(true)
        handleSchool();
    }

     // function to handle school search queries that bypass district
     const handleSchool = async () => {
        // console.log('in handleSchool', school);
        const schoolSearch = await searchSchools(school)
        console.log("School:", schoolSearch);
        setSchoolSearch(schoolSearch)
        setSchoolQuery(school)
        setSearching(false)
        //Clear form
        setSchool('')
    }

    // useEffect is listening, and calls handleSchool on page load
    useEffect(() => {
        handleSchool();
    }, [])

    return (
        <>
        {/* School Form */}
        <form onSubmit={validateSchool}>
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
                {/* Displays spinner if searching, or number of search results */}
                <Text textAlign="center">
                    {searching ? 
                    <Spinner /> 
                    : 
                    <Text>{schoolSearch.length} Schools</Text>
                    }
                </Text>
            </Stack>
        </form>
        
        <Divider margin={3} />

        {/* When userSearch is true, display search results */}
        {userSearch ?
            <>
            <Text><b><u>"{schoolQuery}" - {schoolSearch.length}</u></b></Text>
            {/* < 60 conditional prevents looping through massive lists. Better user experience */}
            {schoolSearch.length < 60 ? 
                schoolSearch.map((schools) => {
                // console.log('In districtSearch map', districts);
                return (
                    // School List
                    <List spacing={3}>
                        <ListItem
                            key={schools.NCESSCH}
                            cursor="pointer"
                            _hover={{fontWeight: "900", color:"yellow.700"}}
                            // onClick={(e) => handleInfo(districts)}
                        >
                        <ListIcon as={Search2Icon} color="yellow.500" />
                        {schools.NAME} - {schools.CITY}, {schools.STATE}
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

export default SchoolList;