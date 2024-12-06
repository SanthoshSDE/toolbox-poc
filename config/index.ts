export class ConfigService {
    private config
    private static instance: ConfigService
    constructor(configData: any){
        this.config = configData
    }

    public static getInstance(configData?: any){
        if(!ConfigService.instance){
            console.log({configData})
            ConfigService.instance = new ConfigService(configData)
        }
        console.log('Outside')
        return ConfigService.instance
    }

    public getConfig(){
        return this.config
    }
}