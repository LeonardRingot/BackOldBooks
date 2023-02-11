declare namespace NodeJS {

    export interface ProcessEnv {
        readonly BD_URI: string;
        readonly DB_USERNAME: string;
        readonly DB_PWD: string;
        readonly DB_NAME: string;
        readonly CLUSTER_URI: string;
    }
    
}
