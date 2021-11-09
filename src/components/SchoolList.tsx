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


const SchoolList: React.FC = () => {
    const [searching, setSearching] = React.useState(false);
    const [userSearch, setUserSearch] = React.useState(false);
    const [schoolSearch, setSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);
    const [school, setSchool] = React.useState('');

     // Validate inputs
     const validateSchool = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('in validateSchool', school);
        // setUserSearch(true);
        // setSearching(true)
        handleSchool();
    }

     // function to handle school search queries that bypass district
     const handleSchool = async () => {
        // console.log('in handleSchool', school);
        const schoolSearch = await searchSchools(school)
        setSchoolSearch(schoolSearch)
       
        console.log("School:", schoolSearch);
        setSearching(false)
       
        //Clear form
        setSchool('')
    }

     // useEffect is listening, ready to call search function
     useEffect(() => {
       
        handleSchool();
    }, [])

    return (

        // School Form
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
                <Text textAlign="center">
                    {searching ? 
                    <Spinner /> 
                    : 
                    <Text>{schoolSearch.length} Schools</Text>
                    }
                </Text>
            </Stack>
        </form>
    );
}

export default SchoolList;