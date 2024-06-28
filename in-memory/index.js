const express =require("express")
const app =express();

const user=[{
    name: "john",
    kidneys: [{
        healthy : true, 
        
    }]
}];

app.use(express.json());

app.get("/", function(req,res){
    const johnkidneys=user[0].kidneys;
    const numberofkidneys=johnkidneys.length;
    let numberofhealthyKidneys=0;
    for (let i=0; i<johnkidneys.length; i++){
        if(johnkidneys[i].healthy){
        numberofhealthyKidneys+=1;}
    }

    const numberofunhealthyKidneys = numberofkidneys-numberofhealthyKidneys;
    res.json({
        numberofkidneys,
        numberofhealthyKidneys,
        numberofunhealthyKidneys
    })
})

app.post("/", function(req,res){
    const ishealthy=req.body.ishealthy; //(passing an argumnet)
    user[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"Done!" 
    })
})

function isHealthy(){
    for(let i=0;i<user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy=false){
            return false
        }
        
    }
}

app.put("/",function(req,res){
    if(isHealthy()){
    for(let i=0;i<user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy=true;
    }}
    res.json({});
})

app.delete("/",function(req,res){
    if(isHealthy()){
    const newkidney=[];
    for(let i=0;i<user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newkidney.push({
                healthy: true
            })
        };

    }
    user[0].kidneys=newkidney;
    
    res.json({});
}
else{
    res.status(411).json({
        msg : "you have no bad kidney"
    })
}});

app.listen(3000);