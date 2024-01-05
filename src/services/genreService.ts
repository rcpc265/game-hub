import { Genre } from "@/entities";
import APIClient from "./api-client";

export default new APIClient<Genre>("/genres");
