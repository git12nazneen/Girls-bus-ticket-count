function setBackGroundColorElement(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-lime-500');
}
function removeBackGroundColorElement(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-slate-300');
}
