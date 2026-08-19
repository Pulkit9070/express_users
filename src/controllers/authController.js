const { TokenExpiredError } = require("jsonwebtoken");
const authService = require("../services/authServices/authService");

async function register(req,res){



    try{
        const {name,email,password} = req.body;
            if(!name || !email || !password){
                return res.status(400).json({
                    message:"Invalid  or empty user Data"
                })
            }
                
                const user = await authService.registerUser(name,email,password);
                

                return res.status(201).json({
                    message:"User registered successfully"
                });

            
    } catch(error){
        return res.status(error.statusCode || 500).json({
            message:error.message
        })
    } 

    
}

async function login(req,res){


    try{
        const {email,password} = req.body;
            if(!email|| !password){
                return res.status(400).json({
                    message:"Invalid json or empty user data"
                })
            }

            const user = await authService.loginUser(email,password)

            return res.status(200).json({
                message:"User logged in Succesfully",
                Token:user
                
            })
    }
    catch(error){
        return res.status(error.statusCode || 500).json({
            message:error.message
        })
    }
    
}

module.exports = {
    register,
    login
}