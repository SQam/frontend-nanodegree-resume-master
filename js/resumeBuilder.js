

var bio={"name" : "Serap Qamar",
         "role": "Software Engineer",
         "contacts":{
         	"email":  "s.qamar08@yahoo.com" ,
            "location": "Massachusetts"
         },
         "welcomemessage": "Objective: To obtain a challenging position in Software Engineering " ,
          "skills":["C/C++", "Python", "HTML/CSS", "JavaScript", "NET", "VB.NET", "HTML/CSS", "SQL"],
         "biopic" : "programmers.jpg"  
         };


 var formattedName= HTMLheaderName.replace( "%data%", bio.name);
 var formattedRole= HTMLheaderRole.replace( "%data%", bio.role);

 var formattedemail= HTMLcontactGeneric.replace("%contact%", "email").replace("%data%", bio.contacts.email )
 var formattedlocation=HTMLcontactGeneric.replace("%contact%", "location").replace("%data%", bio.contacts.location )
 var pic=HTMLbioPic.replace("%data%", bio.biopic) 	
 
 $("#header").prepend(pic)
 $("#header").prepend(formattedlocation);
 $("#header").prepend(formattedemail);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 
