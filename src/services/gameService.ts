import { Game } from "@/entities";
import APIClient from "./api-client";

export default new APIClient<Game>("/games");
