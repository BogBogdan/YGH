<?php

/*Kada korisnik ovde posalje GET zahtev sa parametrom
id_deka Treba da mu se posalje taj dek kao JSON objekat
koji sadrzi id deka, naziv ucitan iz baze i string karata
iz deka iz baze, parsiracu ga kasnije ja u javascriptu

string sa kartama ce izgledati ovako nekako:
"1000001 1000002 1000001 1000001 1000005 1000002"
Ali bice string tako da ne moras da brines o obradi

Ee, ustv msm da je bolje da parametar bude id_igraca i
 da mu iz baze uzima sve dekove koji su njegovi*/

    class deck {
        private $id_deka;
        private $naziv;
        private $karte;
    }

    function get_deck() {
        
    }
?>