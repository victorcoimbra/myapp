import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    Flex,
    HStack,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from 'react-icons/fi'
import { Logo } from './Logo'

export const Navbar = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const isLogin = () => { return false }
    return (

        <Box as="section" pb={{ base: '12', md: '24' }}>
            <Box as="nav" bg="bg-accent" color="on-accent">
                <Container py={{ base: '3', lg: '4' }}>
                    <Flex minWidth='max-content' alignItems='center' gap='5'>
                        <Logo></Logo>

                        <>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <Icon as={FiSearch} color="on-accent" boxSize="5" />
                                </InputLeftElement>
                                <Input placeholder="Search" variant="filled" colorScheme="blue" />
                            </InputGroup>
                        </>

                        {false ? (
                            <>
                                <HStack spacing="4">
                                    <ButtonGroup variant="ghost-on-accent" spacing="1">
                                        <IconButton icon={<FiSearch fontSize="1.25rem" />} aria-label="Search" />
                                        <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                                        <IconButton icon={<FiHelpCircle fontSize="1.25rem" />} aria-label="Help Center" />
                                    </ButtonGroup>
                                    <Avatar boxSize="10" name="Christoph Winston" src="https://tinyurl.com/yhkm2ek8" />
                                </HStack>
                            </>) :
                            (<HStack spacing="4">
                                <ButtonGroup variant="ghost-on-accent" gap='2'>
                                    <Button >Sign Up</Button>
                                    <Button >Log in</Button>
                                </ButtonGroup>
                            </HStack>)}
                    </Flex>
                </Container>
                <>
                    <Divider borderColor="bg-accent-subtle" />
                    <Container py="3">
                        <Flex justify="space-between">
                            <ButtonGroup variant="ghost-on-accent" spacing="1">
                                <Button aria-current="page">Overview</Button>
                                <Button>Analytics</Button>
                                <Button>Key Metrics</Button>
                                <Button>Risks</Button>
                                <Button>Alerts</Button>
                            </ButtonGroup>
                        </Flex>
                    </Container>
                </>
            </Box>
        </Box>
    )
}
