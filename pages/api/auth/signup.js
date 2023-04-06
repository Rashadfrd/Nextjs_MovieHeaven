import { connectMongo } from "@/database/conn"
import Users from "@/schemas/model"
import { hash } from "bcryptjs"

export default async function handler(req, res){
    connectMongo().catch(error => res.json({error:'Connection failed'}))

    //only POST method is accepted

    if(req.method === 'POST'){
        if (!req.body) {
            return res.status(404).json({error:'Dont have form data...!'})
        }
        res.setHeader('Access-Control-Allow-Origin','https://nextjs-movieheaven.vercel.app')
        const {userName, email, password} = req.body
        
        //checking duplication of users
        const checkExisting = await Users.findOne({email})
        if (checkExisting) {
            return res.status(422).json({message:'User already exists'})    
        }

        //hash password and create user
        Users.create({userName, email, password: await hash(password, 12)}).then((data)=>{
            res.status(201).json({status:true, user:data})
        }).catch((err)=>{
            return res.status(404).json({err})
        })
    }
    else{
        res.status(500).json({message:'HTTP method is not valid'})
    }
}