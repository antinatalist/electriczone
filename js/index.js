//for index.html
let allServices = document.getElementsByClassName("servicesButton")
let serviceIcons = document.getElementsByClassName("service-icon")

for(let i = 0; i < allServices.length; i++){
  allServices[i].addEventListener("click", function(){
    localStorage.setItem("title", allServices[i].parentElement.children[0].textContent)
    localStorage.setItem("description", allServices[i].parentElement.children[1].textContent)
    localStorage.setItem("logo", serviceIcons[i].childNodes[1].className)
  })
}

//for services.html
console.log(localStorage.getItem("logo"))
let serviceInfo = document.querySelector(".serviceInfo").children

document.querySelector(".title").innerHTML = `<h2><span>${localStorage.getItem("title")}</span></h2>`

document.querySelector(".orangeIcon").className = `${localStorage.getItem("logo")}`
serviceInfo[0].innerHTML = `${localStorage.getItem("title")}`
if(serviceInfo[0].textContent == 'Maintenance'){
  //serviceInfo[1].innerHTML = `${localStorage.getItem("description")}`
  serviceInfo[1].innerHTML = `Depending on what you need maintaining, costs will vary.`
}
else if(serviceInfo[0].textContent == 'Repair'){
  serviceInfo[1].innerHTML = `r`
}
else if(serviceInfo[0].textContent == 'Installation'){
  serviceInfo[1].innerHTML = `i`
}
else if(serviceInfo[0].textContent == 'Upgrading'){
  serviceInfo[1].innerHTML = `u`
}
else if(serviceInfo[0].textContent == 'Troubleshoot'){
  serviceInfo[1].innerHTML = `t`
}

