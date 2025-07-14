import { User } from "./users.model";
import { OkPacket } from "mysql";
import { userQueries } from "./users.queries";
import { execute } from "../services/mysql.connector";

export const createUser = async (user: User) => {
    return execute<OkPacket>(userQueries.createUser, [user.firstName, user.lastName, user.email, user.hashedPassword])
}

export const readUser = async (email: string, password: string) => {
    return execute<User>(userQueries.readUser, [email, password]);
};

export const updateUser = async (user: User) => {
    return execute<OkPacket>(userQueries.updateUser, [user.firstName, user.lastName, user.email, user.hashedPassword, user.userId]);
};

export const deleteUser = async (userId: number) => {
    return execute<OkPacket>(userQueries.deleteUser, [userId]);
};