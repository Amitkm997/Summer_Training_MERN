

export const student=(req,res)=>{
    console.log(req.body)
    res.json(
        [
            {
                id:1,
                name:"Amit"
            },
            {
                id:2,
                name:"Ankit"
            }
        ]
    )
}