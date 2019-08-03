

// wstawiacz fragmentów do wyświetlenia na stronach html
// insertHtml(selector, [strona lub kod html])
var insertHtml = function(selector, html){
	document.querySelector(selector).innerHTML=html;
};


		

//************* hide/show element function ***************
function hideShow(item) {
  var x = document.getElementById(item);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		
//***********button1  *************
    document.querySelector("#button1")
      .addEventListener("click", function () {
        
       document.querySelector("#button1Content")
                .innerHTML ='<audio controls><source src="audio/Wrze.mp3" type="audio/mp3"></audio>';
    hideShow("button1Content");
    
        document.querySelector("#button1PanelHeading")
                .innerHTML = '<div class="piece"><h5>A Fair Day</h5><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

    var x = document.getElementById("button1PanelHeading");
    var y = document.getElementById("button1");   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML = 'Chamber';      
    } 
    else {
      x.style.display = "block";
      y.innerHTML = 'Close';
    }
  });

//***********button2  *************
    document.querySelector("#button2")
      .addEventListener("click", function () {
        
       document.querySelector("#button2Content")
                .innerHTML ='<audio controls><source src="audio/Pazdz.mp3" type="audio/mp3"></audio>';
    hideShow("button2Content");
    
        document.querySelector("#button2PanelHeading")
                .innerHTML = '<div class="piece"><h5>październik 2006&ndash;2017</h5><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

    var x = document.getElementById("button2PanelHeading");
    var y = document.getElementById("button2");   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML = 'Piano';      
    } 
    else {
      x.style.display = "block";
      y.innerHTML = 'Close';
    }
  });


//***********button3  *************
    document.querySelector("#button3")
      .addEventListener("click", function () {
        
       document.querySelector("#button3Content")
                .innerHTML ='<audio controls><source src="audio/Aug.mp3" type="audio/mp3"></audio>';
		hideShow("button3Content");
		
        document.querySelector("#button3PanelHeading")
                .innerHTML = '<div class="piece"><h5>Strings overtone suite</h5><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

	  var x = document.getElementById("button3PanelHeading");
	  var y = document.getElementById("button3");	  
		if (x.style.display === "block") {
			x.style.display = "none";
      y.innerHTML = 'Strings';			
		} 
    else {
			x.style.display = "block";
      y.innerHTML = 'Close';
		}
	});



//***********button4  *************
    document.querySelector("#button4")
      .addEventListener("click", function () {
        
       document.querySelector("#button4Content")
                .innerHTML ='<audio controls><source src="audio/Xyl.mp3" type="audio/mp3"></audio>';
    hideShow("button4Content");
    
        document.querySelector("#button4PanelHeading")
                .innerHTML = '<div class="piece"><h5>In The Sunlit Corridors of Childhood</h5><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

    var x = document.getElementById("button4PanelHeading");
    var y = document.getElementById("button4");   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML = 'Orchestra';      
    } 
    else {
      x.style.display = "block";
      y.innerHTML = 'Close';
    }
  });



//***********button5  *************
    document.querySelector("#button5")
      .addEventListener("click", function () {
        
       document.querySelector("#button5Content")
                .innerHTML ='<audio controls><source src="audio/Via.mp3" type="audio/mp3"></audio>';
    hideShow("button5Content");
    
        document.querySelector("#button5PanelHeading")
                .innerHTML = '<div class="piece"><h5>Via di speranza</h5><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

    var x = document.getElementById("button5PanelHeading");
    var y = document.getElementById("button5");   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML = 'Strings+';      
    } 
    else {
      x.style.display = "block";
      y.innerHTML = 'Close';
    }
  });


//***********button6  *************
    document.querySelector("#button6")
      .addEventListener("click", function () {
        
       document.querySelector("#button6Content")
                .innerHTML ='<audio controls><source src="audio/Him.mp3" type="audio/mp3"></audio>';
    hideShow("button6Content");
    
        document.querySelector("#button6PanelHeading")
                .innerHTML = '<div class="piece"><h5>Himalayas</h5><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

    var x = document.getElementById("button6PanelHeading");
    var y = document.getElementById("button6");   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML = 'Orchestra';      
    } 
    else {
      x.style.display = "block";
      y.innerHTML = 'Close';
    }
  });


//***********button7  *************
    document.querySelector("#button7")
      .addEventListener("click", function () {
        
       document.querySelector("#button7Content")
                .innerHTML ='<audio controls><source src="audio/Ora.mp3" type="audio/mp3"></audio>';
    hideShow("button7Content");
    
        document.querySelector("#button7PanelHeading")
                .innerHTML = '<div class="piece"><h5>Orate pro ea</h5><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

    var x = document.getElementById("button7PanelHeading");
    var y = document.getElementById("button7");   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML = 'Choir';      
    } 
    else {
      x.style.display = "block";
      y.innerHTML = 'Close';
    }
  });


//***********button8  *************
    document.querySelector("#button8")
      .addEventListener("click", function () {
        
       document.querySelector("#button8Content")
                .innerHTML ='<audio controls><source src="audio/Bene.mp3" type="audio/mp3"></audio>';
    hideShow("button8Content");
    
        document.querySelector("#button8PanelHeading")
                .innerHTML = '<div class="piece"><h5>Benedictus</h5><p>Z tym że nie jest <em>Benedictus</em> do kompilowanego tekstu, nie mszalny.</p><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

    var x = document.getElementById("button8PanelHeading");
    var y = document.getElementById("button8");   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML = 'Choir/Orch';      
    } 
    else {
      x.style.display = "block";
      y.innerHTML = 'Close';
    }
  });


//***********button9  *************
    document.querySelector("#button9")
      .addEventListener("click", function () {
        
       document.querySelector("#button9Content")
                .innerHTML ='<audio controls><source src="audio/Pater.mp3" type="audio/mp3"></audio>';
    hideShow("button9Content");
    
        document.querySelector("#button9PanelHeading")
                .innerHTML = '<div class="piece"><h5>Pater noster qui es...</h5><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

    var x = document.getElementById("button9PanelHeading");
    var y = document.getElementById("button9");   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML = 'Choir/Orch';      
    } 
    else {
      x.style.display = "block";
      y.innerHTML = 'Close';
    }
  });


//***********button10  *************
    document.querySelector("#button10")
      .addEventListener("click", function () {
        
       document.querySelector("#button10Content")
                .innerHTML ='<audio controls><source src="audio/White.mp3" type="audio/mp3"></audio>';
    hideShow("button10Content");
    
        document.querySelector("#button10PanelHeading")
                .innerHTML = '<div class="piece"><h5>White Prelude</h5><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

    var x = document.getElementById("button10PanelHeading");
    var y = document.getElementById("button10");   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML = 'Organ';      
    } 
    else {
      x.style.display = "block";
      y.innerHTML = 'Close';
    }
  });


//***********button11  *************
    document.querySelector("#button11")
      .addEventListener("click", function () {
        
       document.querySelector("#button11Content")
                .innerHTML ='<audio controls><source src="audio/Adiuva.mp3" type="audio/mp3"></audio>';
    hideShow("button11Content");
    
        document.querySelector("#button11PanelHeading")
                .innerHTML = '<div class="piece"><h5>Adiuva me</h5><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

    var x = document.getElementById("button11PanelHeading");
    var y = document.getElementById("button11");   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML = 'Choir';      
    } 
    else {
      x.style.display = "block";
      y.innerHTML = 'Close';
    }
  });


//***********button12  *************
    document.querySelector("#button12")
      .addEventListener("click", function () {
        
       document.querySelector("#button12Content")
                .innerHTML ='<audio controls><source src="audio/Half.mp3" type="audio/mp3"></audio>';
    hideShow("button12Content");
    
        document.querySelector("#button12PanelHeading")
                .innerHTML = '<div class="piece"><h5>Orchestral study</h5><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

    var x = document.getElementById("button12PanelHeading");
    var y = document.getElementById("button12");   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML = 'Orch/Piano';      
    } 
    else {
      x.style.display = "block";
      y.innerHTML = 'Close';
    }
  }); 


//***********button13  *************
    document.querySelector("#button13")
      .addEventListener("click", function () {
        
       document.querySelector("#button13Content")
                .innerHTML ='<audio controls><source src="audio/Valse.mp3" type="audio/mp3"></audio>';
    hideShow("button13Content");
    
        document.querySelector("#button13PanelHeading")
                .innerHTML = '<div class="piece"><h5>Valse sentimentale</h5><p class="minimal">(nagranie mechaniczne z edytora zapisu nutowego)</p><div>';

    var x = document.getElementById("button13PanelHeading");
    var y = document.getElementById("button13");   
    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML = 'Strings';      
    } 
    else {
      x.style.display = "block";
      y.innerHTML = 'Close';
    }
  }); 
