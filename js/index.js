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
  serviceInfo[1].innerHTML = `Depending on what you need maintenance costs will vary.`
}
else if(serviceInfo[0].textContent == 'Repair'){
  serviceInfo[1].innerHTML = `We repair anything from fans, switches and lights and the average cost to repair them is around <b>$141 to $419</b>. Emergency/urgent repairs by our electricians on weekends, holidays, or evenings can cost <b>$150/hour</b> and may also change a <b>$75</b> callout fee.<br><br>Replacing an electrical panel can cost between <b>$850 to $2500</b>. Most homes today use a 200-amp panel, but larger homes need 400 amps which cost between <b>$2000 to $4000</b>. Trying to get by with a breaker box that is too small can result in tripped breakers, overheating, and fire. Those issues will cost more in the long run, so it might be a good idea to spend the extra money to get a 200-amp panel now and avoid repairs later.`
}
else if(serviceInfo[0].textContent == 'Installation'){
  serviceInfo[1].innerHTML = `We install fans, switches, and lights and the average cost to repair them is around <b>$141 to $419</b>.<br><br>Installing Door bells, smoke or carbon monoxide detector ranges <b>$90 to $150</b><br><br>Install Light Fixtures	$113 – $414
  <br><br>Install Recessed Light Fixture	$125 – $300
  <br><br>Install Outlet	$120 – $150
  <br><br>Install Ceiling Fan, Track Lights, or Wall Sconce	$150 – $350
  <br><br>Replace Circuit Breaker Switch	$150 – $200
  <br><br>Install Attic Fans	$300 – $900
  <br><br>Install Bathroom Fan	$150 – $550
  <br><br>Smart Home Automation System	$600 – $1,800
  <br><br>Install Electric Car Charging Station	$750 – $2,600
  <br><br>Install Hot Tub Wiring / Conduit	$800 – $1,500
  <br><br>Wiring a House	$1,600 – $11,400
  <br><br>Install Home Generator	$3,000 – $5,000
  <br><br>Install Hardwired Home Automation System	$4,000 – $12,000`
}
else if(serviceInfo[0].textContent == 'Upgrading'){
  serviceInfo[1].innerHTML = `Upgrade Electrical Panel	$1,100 – $2,500`
}
else if(serviceInfo[0].textContent == 'Troubleshoot'){
  serviceInfo[1].innerHTML = `Troubleshooting is the first step for many electrical projects. Identifying the source of the problem and then providing solutions is our specialty.`
}

