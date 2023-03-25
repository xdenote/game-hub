import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectGenre: Genre | null;
}

const GenreList = ({selectGenre, onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner/>;

    return (
        <>
            <Heading marginBottom={3}>Genres</Heading>
            <List>
                {data.map((genre) => (
                    <ListItem paddingY="5px" key={genre.id}>
                        <HStack>
                            <Image objectFit="cover" boxSize="32px" borderRadius={8}
                                   src={getCroppedImageUrl(genre.image_background)}/>
                            <Button whiteSpace="normal" textAlign="left"
                                    fontWeight={genre.id === selectGenre?.id ? 'bold' : 'normal'}
                                    onClick={() => onSelectGenre(genre)} fontSize="lg"
                                    variant="link">{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
};

export default GenreList;