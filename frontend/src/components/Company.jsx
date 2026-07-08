
import React, { useEffect, useState } from "react";
import CompanyCard from "../pages/CompanyCard";
import API from "../services/api";
export default function Company() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCompanies();
  }, []);
  
  const fetchCompanies = async () => {
    try {
      const response = await API.get("/company");
  
      console.log(response.data);
  
      setCompanies(response.data.companies);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className='bg-gray-100 py-16'>
         {/* Top Hiring Comapanies  */}
            <div className='max-w-7xl mx-auto px-6'>
              <h2 className='text-3xl font-bold text-center mb-10'>Top Hiring Comanies</h2>
              <div className='grid md:grid-cols-3 gap-6'>
                {/* <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" />
                <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" />
                <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" /> */}
                {companies.map((cur)=>{
                   return <CompanyCard key={cur._id}  id={cur._id} name={cur.companyName} role={cur.role} salaryPackage={cur.salaryPackage}/>
                })}
              </div>
    
            </div>
           </section>
  )
}
