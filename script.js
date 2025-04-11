const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
    }
})

// -------- light mode and dark mode -----------

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark');

    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
  }


  document.getElementById('handlesend').addEventListener('submit',function(e){
    e.preventDefault();
 

     const name = document.getElementById("name").value.trim();
    
     const email = document.getElementById("email").value.trim()
   
     const message = document.getElementById("message").value
  

  const serviceId = "service_w7p4b4h";
         const templateId = "template_57lbf2r";

         emailjs.send(serviceId, templateId, {
          name:name,
           
          email: email,
      
          message: message
         })
          .then((reset) => {
            document.getElementById("name").value = "";
            
            document.getElementById("email").value = "";
            
            document.getElementById("message").value = "";
            console.log(reset);
            alert("Message sent successfully!!")
          }, 
          (err) => {
            alert("Failed to send the message, please try again later")
            console.log(err)
 
        }
    )
    })