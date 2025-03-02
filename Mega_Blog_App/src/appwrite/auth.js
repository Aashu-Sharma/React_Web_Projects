import config from '../config/config.js'
import {Client, Account, ID} from 'appwrite';

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){   // whovever calls this function will have to pass an object with email, password, and name
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if(userAccount){
                //call another method login here,
                return this.login({email, password})
            }else{
                return userAccount;
            }
        } catch (error) {
            console.log('Appwrite service :: createAccount :: error', error);
        }
    }

    async login({email, password}){
        try {
           return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log('Appwrite service :: login :: error', error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log('Appwrite service :: getCurrentUser :: error', error);
        }
        return null;
    }

    async Logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log('Appwrite service :: Logout :: error',error);
        }
    }
}

const authService = new AuthService()

export default authService;