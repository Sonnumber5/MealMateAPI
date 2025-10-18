import { execute } from "../services/mysql.connector";
import { Category } from "./categories.model";
import { categoryQueries } from "./categories.queries";

export const readCategories = async () => {
    return execute<Category[]>(categoryQueries.getCategories, []);
};