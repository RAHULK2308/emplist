const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser')
const empData=require('../backend/model/employee')

app=new express();
app.use(cors());
app.use(bodyparser.json());

app.post('/insert',function(req,res){
   
    
   
    var emp = {       
        id:req.body._id,
        Name: req.body.Name,
        Email : req.body.Email,
        Contact: req.body.Contact,
        Date_of_Birth:req.body.Date_of_Birth,
        Sex : req.body.Sex,
   }       
   var employee = new empData(emp);
   employee.save();
});

app.get('/getData',function(req,res){
    
    empData.find()
                .then(function(emps){
                
                    res.send(emps);
                });
});

app.get('/emp/:id',  (req, res) => {
  
    const id = req.params.id;
      empData.findOne({"_id":id})
      .then((employee)=>{
          res.send(employee);
      });
  })
  
      app.put('/emp/update/',(req,res)=>{
        console.log(req.body)
        Id=req.body._id;
        Name= req.body.Name;
        Email = req.body.Email;
        Contact= req.body.Contact;
        Date_of_Birth=req.body.Date_of_Birth;
        Sex = req.body.Sex;
    
       empData.findByIdAndUpdate({"_id":Id},
                                    {$set:{"Name" : Name,
                                    "Email" : Email,
                                    "Contact": Contact,
                                    "Date_of_Birth" : Date_of_Birth,
                                    "Sex" : Sex,
                                
                                }})
       .then(function(){
           res.send();
       })
     })
     
  app.delete('/empremove/:id',(req,res)=>{
       id = req.params.id;
       console.log(id)
       empData.findByIdAndDelete({"_id":id})
       .then(()=>{
           console.log('success')
           res.send();
       })
     })

app.listen(3000,function(req,res){
    console.log('app listening at 3000' )
})
