import Company from '../models/company.js'

export const addCompany=async (req,res)=> {
     try{
        console.log(req.body)
        const{companyName,role,salaryPackage,location}=req.body;

         if(companyName==""){
            return res.status(400).send("please provide comapnay name");
         }

         
        const company=await Company.create(req.body);


        res.status(201).json({
            success:true,
            message:"Comapnay added successfully",
            company
        })
        
     }catch(error){
        console.log(error)
     }
}