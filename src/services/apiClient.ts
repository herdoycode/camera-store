import { api_key } from "../config.json";
import axios from "axios";

export default axios.create({
  baseURL: api_key,
});
