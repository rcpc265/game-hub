import { Platform } from "@/entities";
import APIClient from "./api-client";

export default new APIClient<Platform>("/platforms/lists/parents");
