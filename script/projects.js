const projects=[
    {id:"p-1",
    imgsrc:"https://media.istockphoto.com/id/2140172947/photo/women-using-laptop-shopping-online-with-cart-icons-with-a-virtual-interface-shipping-global.jpg?s=612x612&w=0&k=20&c=_uRyv3FW3oowPPmo6zd4ImJAWOe9hSc5e5PSuX18Inw=",
    title:"ShopVerse",
    time:"10 days",
    leavel:"Medium",
    desc:"Developed a full-stack e-commerce application using Java and Spring Boot, implementing RESTful APIs for product management, user authentication, and order. ",
    tech:[  "Java","Springboot","SQL","REST APIs"],
    git:"#",
    demo:"#",
    featured:true

},
    {id:"p-2",
    imgsrc:"https://cdn.prod.website-files.com/635e632477408d12d1811a64/69667738c916ce4a7d5c3e16_best-secure-messaging-apps.jpg",
    title:"Secure Chat Application",
    time:"2 months",
    leavel:"Hard",
    desc:"In today’s digital world, secure chat applications protect conversations from unauthorized access. This presentation explains how to build a strong, encrypted messaging platform.",
    tech:["HTML","CSS","JAVASCRIPT","React",],
    git:"#",
    demo:"#",
    featured:true
    
},
    {id:"p-3",
    imgsrc:"https://shyamfuture.com/wp-content/uploads/2024/09/food-delivery-app-development-company-.jpg",
    title:"Food Order Application",
    time:"1 months",
    leavel:"Medium",
    desc:"Meal recipe finder that suggests dishes based on user-entered ingredients.",
    tech:["HTML","CSS","JAVASCRIPT",],
    git:"#",
    demo:"#",
    featured:false
    
},
{id:"p-4",
    imgsrc:"https://i.ytimg.com/vi/CSjPD4pM0gw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALReQFMtDkE9n-Uk-CDCQtiZp5aQ",
    title:"AI-Based Movie Recommendation System ",
    time:"1.5 months",
    leavel:"Medium",
    desc:"Built an AI-powered movie recommendation engine using collaborative filtering and content-based filtering techniques to deliver personalised suggestions",
    tech:["Python","TensorFlow","Numpy"," Pandas",],
    git:"#",
    demo:"#",
    featured:true
    
},
{id:"p-5",
    imgsrc:"https://images.unsplash.com/photo-1762330472502-83efbe1d4478?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Jwt-Authentication ",
    time:"1-month",
    leavel:"medium",
    desc:"A Node.js and Express backend project demonstrating user authentication (Express,MongoDB)",
     tech:["React","Node js","Express JS","Tailwind CSS","JWT Authentication"],
     git:"#",
      demo:"#",

    featured:false
    
}

]

const allprojects=document.getElementById("allpr")
const featured=document.getElementById("fea")
const container=document.getElementById("projectcon")
projects.filter(p=>p.featured).forEach(project=>{
    let techHTML = "";
project.tech.forEach(t => {
  techHTML += `<span>${t}</span>`;
});
    container.innerHTML+=`
    <div class="project" id=${project.id} style=" box-shadow: 1px 1px 5px rgba(26, 25, 25, 0.37); border: none;  border-radius: 10px;">
                <div class="up">
                    <img src=${project.imgsrc} alt="">
                </div>
                <div class="down">
                    <h4>${project.title}</h4>
                    <div class="tl">
                        <div class="t">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar h-4 w-4" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                            <p>${project.time}</p>
                        </div>
                        <div class="l">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers w-4 h-4 mr-2" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                            <p>${project.leavel}</p>
                        </div>
                    </div>
                    <p class="conte">${project.desc}</p>
                    <span class="consp">Tech Stack</span>
                    <div class="tech">
                        ${techHTML}
                    </div>
                    <div class="links">
                        <a href=${project.git} target="_blank"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-6 w-6" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>Code</button></a>
                        <a href=${project.demo} target="blank"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>Demo</button></a>
                    </div>
                </div>
            </div>`

})
function ag(){
        if(window.matchMedia("(max-width: 1024px)").matches){
        projectcon.style.gridTemplateColumns = "repeat(1, 1fr)";
        }
        else{
        projectcon.style.gridTemplateColumns = "repeat(3, 1fr)";
        }
}

featured.addEventListener("click",()=>{
    allprojects.classList.remove("active")
    featured.classList.add("active")
      document.getElementById("projectcon").style.display = "grid";
  document.getElementById("projectcon").style.gridTemplateColumns = "repeat(3, 1fr)";
  ag()

    container.innerHTML=" "
projects.filter(p=>p.featured).forEach(project=>{
    let techHTML = "";
project.tech.forEach(t => {
  techHTML += `<span>${t}</span>`;
});
    container.innerHTML+=`
    <div class="project" id=${project.id} style=" box-shadow: 1px 1px 5px rgba(26, 25, 25, 0.37); border: none;  border-radius: 10px;">
                <div class="up">
                    <img src=${project.imgsrc} alt="">
                </div>
                <div class="down">
                    <h4>${project.title}</h4>
                    <div class="tl">
                        <div class="t">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar h-4 w-4" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                            <p>${project.time}</p>
                        </div>
                        <div class="l">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers w-4 h-4 mr-2" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                            <p>${project.leavel}</p>
                        </div>
                    </div>
                    <p class="conte">${project.desc}</p>
                    <span class="consp">Tech Stack</span>
                    <div class="tech">
                        ${techHTML}
                    </div>
                    <div class="links">
                        <a href=${project.git} target="_blank"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-6 w-6" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>Code</button></a>
                       
                </div>
            </div>`

})
})
const gri=document.getElementById("projectcon")
function applygrid(){
    if(window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches){
        projectcon.style.gridTemplateColumns = "repeat(3, 1fr)";
    }
    else if(window.matchMedia("(min-width: 1024px) and (max-width: 1440px)").matches){
          projectcon.style.gridTemplateColumns = "repeat(4, 1fr)";
    }
    else if(window.matchMedia("(max-width: 768px)").matches){
         projectcon.style.gridTemplateColumns = "repeat(1, 1fr)";
         projectcon.style.animationDuration="0.5s";
         projectcon.style.animationDelay="0s";
        projectcon.style.animationTimingFunction = "ease-in";

    }
        
    
    else{
        projectcon.style.gridTemplateColumns = "repeat(5, 1fr)";
    }

}



allprojects.addEventListener("click",()=>{
    allprojects.classList.add("active")
    featured.classList.remove("active")
     document.getElementById("projectcon").style.display = "grid";
     applygrid()
     container.innerHTML = ""; 
    projects.forEach(project=>{
    let techHTML = "";
project.tech.forEach(t => {
  techHTML += `<span>${t}</span>`;
});
    container.innerHTML+=`
    <div class="project" id=${project.id} style=" box-shadow: 1px 1px 5px rgba(26, 25, 25, 0.37); border: none;  border-radius: 10px;">
                <div class="up">
                    <img src=${project.imgsrc} alt="">
                </div>
                <div class="down">
                    <h4>${project.title}</h4>
                    <div class="tl">
                        <div class="t">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar h-4 w-4" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                            <p>${project.time}</p>
                        </div>
                        <div class="l">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers w-4 h-4 mr-2" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                            <p>${project.leavel}</p>
                        </div>
                    </div>
                    <p class="conte">${project.desc}</p>
                    <span class="consp">Tech Stack</span>
                    <div class="tech">
                        ${techHTML}
                    </div>
                    <div class="links">
                        <a href=${project.git} target="_blank"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-6 w-6" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>Code</button></a>
                      
                    </div>
                </div>
            </div>`

})
})
window.addEventListener("resize", applygrid)



/*const getprojects=(isFeatured)=>{
let projs=[]
if(isFeatured){
    projs=projects.filter(p=>p.featured)
}
else{
    projs=projects
}
     container.innerHTML = ""; 
    projects.forEach(project=>{
    let techHTML = "";
project.tech.forEach(t => {
  techHTML += `<span>${t}</span>`;
});
    container.innerHTML+=`
    <div class="project" id=${project.id}>
                <div class="up">
                    <img src=${project.imgsrc} alt="">
                </div>
                <div class="down">
                    <h4>${project.title}</h4>
                    <div class="tl">
                        <div class="t">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar h-4 w-4" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                            <p>${project.time}</p>
                        </div>
                        <div class="l">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers w-4 h-4 mr-2" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                            <p>${project.leavel}</p>
                        </div>
                    </div>
                    <p class="conte">${project.desc}</p>
                    <span class="consp">Tech Stack</span>
                    <div class="tech">
                        ${techHTML}
                    </div>
                    <div class="links">
                        <a href=${project.git} target="_blank"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-6 w-6" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>Code</button></a>
                        <a href=${project.demo} target="blank"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>Demo</button></a>
                    </div>
                </div>
            </div>`

})
}*/