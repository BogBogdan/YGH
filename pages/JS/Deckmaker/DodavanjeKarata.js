var cdek, csvekarte, deksvihkarata, red, kolona, indekspomeranja, indekspomeranja1, korisnickiDek, prekoracenje, csvsdek, kolona1, red1, svekarte;
//deklasiranje
cdek = document.getElementById("KarteDeka");
csvsdek = cdek.getContext("2d");
csvekarte = document.getElementById("SveKarte");
csvsvekarte = csvekarte.getContext("2d");
korisnickiDek = [];
deksvihkarata = [];
indekspomeranja = 1000001;
indekspomeranja1 = 0;

function prikaziRed(a) {
    var konzola = document.getElementById("Debugger");
    konzola.innerHTML += "\n" + a;
}

function resetDebugLog() {
    var konzola = document.getElementById("Debugger");
    konzola.innerHTML = "Debug komande:";
}

function insertData() {
    var id_deka, naziv, karte_u_deku, id_korisnika;

    vnaziv = document.getElementById("nazivtb").value;
    if (vnaziv == "") vnaziv = "Dek";
    var vkarte = "";
    korisnickiDek.forEach(element => {
        vkarte += element + " ";
    });
    var vkorisnicko_ime = getCookie("korisnicko_ime");
    var vlozinka = getCookie("lozinka");
    var trenidDeka = null;
    $.post('../control/getuserinfo.php', { korisnicko_ime: vkorisnicko_ime, lozinka: vlozinka },
        function(returnedData) {
            prikaziRed(returnedData);
            vid_korisnika = returnedData;
            var dekk = {
                id_deka: trenidDeka,
                id_korisnika: vid_korisnika,
                naziv: vnaziv,
                karte_u_deku: vkarte
            };
            $.ajax({
                type: 'post',
                url: '../control/postdeck.php',
                data: JSON.stringify(dekk),
                contentType: "application/json; charset=utf-8",
                traditional: true,
                success: function(data) {
                    prikaziRed(data);
                }
            });
        });
    /*var params = JSON.stringify();
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);
*/
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



kolona1 = 0;
red1 = 0;
kolona = 0;
red = 0;
loadCards();

setTimeout(render, 500);

handleEvents();