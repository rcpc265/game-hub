import { GameGrid } from "@/components/Game";
import { GenreList } from "@/components/Genre";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import { PlatformSelector, SortSelector } from "./components/Filters";
import { NavBar } from "./components/NavBar";
import { GameQuery } from "./hooks/useGames";

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setGameQuery((currentGameQuery) => ({
              ...currentGameQuery,
              searchText,
            }))
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery((currentGameQuery) => ({
                ...currentGameQuery,
                genre,
              }))
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={4} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery((currentGameQuery) => ({
                ...currentGameQuery,
                platform,
              }))
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSort={(sortOrder) =>
              setGameQuery((currentGameQuery) => ({
                ...currentGameQuery,
                sortOrder,
              }))
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
