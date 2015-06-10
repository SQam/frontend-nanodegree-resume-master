 var name= "Serap"
 var Role= "Web Developer"
 var formattedName= HTMLheaderName.replace( "%data%", name);
 var formattedRole= HTMLheaderRole.replace( "%data%", Role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);




