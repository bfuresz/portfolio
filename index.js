function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function ToProjektek(){
    var x=document.getElementById("content");
    document.getElementById("Projektek").className = "active";
    document.getElementById("Rolam").className = "";
    document.getElementById("Tanulmanyok").className = "";
    document.getElementById("Elerhetoseg").className = "";
    myFunction()
    x.innerHTML =`
    <p>
        Portfólió - egyetemi projekt
       </p>
       <p>
        Inventor alkatrész modellezés - egyetemi projekt (folyamatban)
       </p>`;
  }

  function ToRolam(){
    var x=document.getElementById("content");
    document.getElementById("Projektek").className = "";
    document.getElementById("Rolam").className = "active";
    document.getElementById("Tanulmanyok").className = "";
    document.getElementById("Elerhetoseg").className = "";
    myFunction()
    x.innerHTML =`<p>
            Életkor: 19
        </p>
        <p>
            Egyetem: BME (Budapesti Műszaki és Gazdaságtudományi Egyetem)
        </p>
        <p>
            Szak: Energetikai mérnök (Bsc)
        </p>
        <p>
            Nyelvvizsga: C2- német
        </p>
        <p>
            Jogosítvány: B-típusú
        </p>

        <p>   A BME (Budapesti Műszaki és Gazdasági Egyetem) elsőéves energetikai mérnök hallgatója vagyok. Már a gimnáziumi tanulmányaim során megtanultam csapatban, másokkal együtt dolgozni. Mindemellett jó szervezői és problémamegoldói készséggel rendelkezem. 
            Szabadidőmben szívesen töltök időt a szabadban. Mindemellett szeretek  új dolgokat tanulni, ennek hatására kezdtem bele ennek a portfóliónak a készítésébe és a továbbiakban ezért is szeretném majd tovább fejleszteni.
 `;
  }
  function ToTanulmanyok(){
    var x=document.getElementById("content");
    document.getElementById("Projektek").className = "";
    document.getElementById("Rolam").className = "";
    document.getElementById("Tanulmanyok").className = "active";
    document.getElementById("Elerhetoseg").className = "";
    myFunction()
    x.innerHTML =`
     <p>
        BME : Energetikai mérnök Bsc (2024-)

        </p>
       <p>
        Középiskola: Audi Hungária Deutsche Schule Győr (2019-2024) - Német nemzetközi érettségi megszerzése (DIA)
       </p>
`;
  }
  function ToElerhetoseg(){
    var x=document.getElementById("content");
    document.getElementById("Projektek").className = "";
    document.getElementById("Rolam").className = "";
    document.getElementById("Tanulmanyok").className = "";
    document.getElementById("Elerhetoseg").className = "active";
    myFunction()
    x.innerHTML =`
     <p>
            Telefonszám:  06 20 123 4567

        </p>
        <p>
            E-mail: boggancs24@gmail.com
        </p>
        <a href="https://github.com/bfuresz">
            <i class="fa fa-brands fa-github fa-xl">
                
            </i>
        </a>
        <p>
        Idő nálam: <b id ="idopont"> </b>

        </p>`;
        httpGet("https://timeapi.io/api/time/current/zone?timeZone=Europe%2FBudapest")
  }
 async function httpGet(theUrl)
{
    
await fetch(theUrl)
.then(response => {return response.json()})
.then((data) => {console.log(data.time); document.getElementById("idopont").innerHTML = (data.time)});

    }

