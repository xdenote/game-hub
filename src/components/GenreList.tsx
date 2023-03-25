import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre:(genre: Genre) => void;
    selectGenre: Genre | null;
}

const GenreList = ({selectGenre, onSelectGenre}: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return  <Spinner/>;

    return (
        <List>
         {data.map((genre) => (
             <ListItem paddingY="5px" key={genre.id}>
                 <HStack>
                     <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                     <Button fontWeight={genre.id === selectGenre?.id ? 'bold' : 'normal'}
                             onClick={() => onSelectGenre(genre)} fontSize="lg"
                             variant="link">{genre.name}</Button>
                 </HStack>
             </ListItem>
         ))}
        </List>
    )
};

export default GenreList;