import { ConfigService } from "../config"



export const db =()=>{
    const configService = ConfigService.getInstance()
    console.log('tool_box',{configService})
    return configService.getConfig()
}