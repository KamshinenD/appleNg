var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex) {
    tabButtons.forEach(function(node){
        node.style.borderBottom='1px solid #c5c2c2';
        node.style.color="gray";
      });

      tabButtons[panelIndex].style.color="black";
      tabButtons[panelIndex].style.borderBottom='1px solid black';
      tabPanels.forEach(function(node){
        node.style.display="none";
    });

    tabPanels[panelIndex].style.display="block";
}
showPanel(0);