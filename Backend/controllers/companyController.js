import Company from '../models/company.js'
import Student from '../models/student.js';

export const addCompany = async (req, res) => {
   try {
     const { companyName, role, salaryPackage, location } = req.body;
 
     // Validation
     if (!companyName) {
       return res.status(400).json({
         success: false,
         message: "Please provide company name",
       });
     }
 
     if (!role) {
       return res.status(400).json({
         success: false,
         message: "Please provide job role",
       });
     }
 
     if (!salaryPackage) {
       return res.status(400).json({
         success: false,
         message: "Please provide salary package",
       });
     }
 
     if (!location) {
       return res.status(400).json({
         success: false,
         message: "Please provide location",
       });
     }
 
     const company = await Company.create({
       companyName,
       role,
       salaryPackage,
       location,
     });
 
     res.status(201).json({
       success: true,
       message: "Company added successfully",
       company,
     });
   } catch (error) {
     console.error(error);
 
     res.status(500).json({
       success: false,
       message: error.message,
     });
   }
 };

export const getCompany=async(req,res)=>{
   try{
      const companies=await Company.find();
      if(companies.length==0){
         return res.status(404).json({
            success:false,
            message:"Companies not found"
         })
      }
   res.status(200).json({
      success:true,
      companies:companies
   })
   }catch(error){
      res.status(500).json({
         success:false,
         message:error.message
      })
   }
}

export const getCompanyById=async(req,res)=>{
   try{
     console.log(req.params.id);
     const comapany=await Company.findById(req.params.id);

     if(!comapany) return res.status(404).json({success:false,message:"Company not found"})
     res.status(200).json({
      success:true,
      message:"Company received successfully...",
      comapnay:comapany
     })
   }catch(error){
      res.status(500).json({
         success:false,
         message:error.message
      })
   }
}

export const updateCompany=async(req,res)=>{
   try{
      const comapany=await Company.findByIdAndUpdate(
         req.params.id,
         req.body,
         {new:true}
      )

      res.status(200).json({
         success:true,
         message:"Company updated successfuly",
         comapany:comapany
      })
   }catch(error){
      res.status(500).json({
         success:false,
         message:error.message
      })
   }
}

export const deleteCompany=async(req,res)=>{
   try{
      await Company.findByIdAndDelete(req.params.id)
      res.status(200).json({
         success:true,
         message:"Company Deleted Successfully"
      })

   }catch(error){
      res.status(500).json({
         success:false,
         message:error.message
      })
   }
}

export const applyJob = async (req, res) => {
  try {
    const studentId = req.user.id;
    const companyId = req.params.companyId;

    // Find Student
    const student = await Student.findById(studentId).populate("appliedCompanies");;

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // Find Company
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    // Check if already applied
    if (student.appliedCompanies.includes(companyId)) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job.",
      });
    }

    // Add company to student's applied companies
    student.appliedCompanies.push(companyId);

    // Add student to company's applicants
    company.appliedStudents.push(studentId);

    // Save both
    await student.save();
    await company.save();

    res.status(200).json({
      success: true,
      message: "Job Applied Successfully",
      student,
      company,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};