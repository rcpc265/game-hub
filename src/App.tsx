import NavBar from "@/components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { GameGrid } from "@/components/Game";
import { GenreList } from "@/components/Genre";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { GameQuery } from "./hooks/useGames";
import { useState } from "react";

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
        <NavBar />
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
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery((currentGameQuery) => ({
              ...currentGameQuery,
              platform,
            }))
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
