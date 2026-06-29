import Student from "../models/student.js"


export const addStudent=async(req,res)=>{
      const emailRegex=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      try{
           const{name,email,course,skills}=req.body;

           if(!name) return res.status(400).json({success:false,message:"Please provide name"});
           if(!email) return res.status(400).json({success:false,message:"Please provide email"})

           if(!emailRegex.test(email)) return res.status(400).json({success:false,message:"please provide valid email"})
           
           if(!course) return res.status(400).json({success:false,message:"Please provide course"});
           if(!skills) return res.status(400).json({success:false,message:"Please provide skills"})

           const student= await Student.create(req.body);
           res.status(201).json({
            success:true,
            message:"Student created successfully",
            student:student
           })
      }catch(error){{
        res.status(500).json({
            success:false,
            message:error.message
        })
      }}
}

export const getStudent=async(req,res)=>{
     try{
         const student=await Student.find();
         res.status(200).json({
          success:true,
          message:"Successfully reaceived the data",
          student:student
         })
     }catch(error){
        res.status(500).json({
          success:false,
          message:error.message
        })
     }
}

