import { Trailer } from "@/entities";
import APIClient from "./api-client";

export default (gameId: number) =>
  new APIClient<Trailer>(`/games/${gameId}/movies`);
