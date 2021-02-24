export const data = {
  name: 'T',
  children: [
    {
      name: 'A',
      children: [
        { name: 'A1' },
        { name: 'A2' },
        { name: 'A3' },
        {
          name: 'C',
          children: [
            {
              name: 'C1',
            },
            {
              name: 'D',
              children: [
                {
                  name: 'D1',
                },
                {
                  name: 'D2',
                },
                {
                  name: 'D3',
                },
              ],
            },
          ],
        },
      ],
    },
    { name: 'Z' },
    {
      name: 'B',
      children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }],
    },
  ],
};

const jsonDATA = `
{
  "strukturaOrganizacyjna": {
    "idStrukturaOrganizacyjna": "79eb1894d86f4c3ba831e4b844ea4f90",
    "idStrukturaOrganizacyjnaWersja": "6b3cf8f703374f49a50d53453ffdaa2e",
    "wersja": "0.1",
    "nazwa": "Nowa Aga",
    "dataUtworzenia": "2021-01-26T22:31:14.569813",
    "dataModyfikacji": "2021-01-26T22:31:14.569813",
    "idPodmiotWlascicielBiznesowy": "2"
  },
  "komorkiOrganizacyjne": [
    {
      "id": "b3f0a77804ab41eca293fe8132610c39",
      "nazwa": "Podlaski Urząd Wojewódzki",
      "symbol": "ROOT_UNIT",
      "typKomorki": "Urząd Wojewódzki"
    },
    {
      "id": "4173a522422240c2a945881ca8936575",
      "nazwa": "Wojewódzka Inspekcja Geodezyjna i ",
      "symbol": "GK",
      "opis": "",
      "typKomorki": "Wydział",
      "idNadrzednaKomorkaOrganizacyjna": "b3f0a77804ab41eca293fe8132610c39"
    },
    {
      "id": "fdb008537c6b451da8e6f38ca39c6705",
      "nazwa": "Oddział Nadzoru Geodezyjnego",
      "symbol": "GK-I",
      "opis": "",
      "typKomorki": "Oddział",
      "idNadrzednaKomorkaOrganizacyjna": "4173a522422240c2a945881ca8936575"
    },
    {
      "id": "e887d9858ce64c05b512816bcde1e4a0",
      "nazwa": "Oddział Nadzoru Kartograficznego",
      "symbol": "GK-II",
      "opis": "",
      "typKomorki": "Oddział",
      "idNadrzednaKomorkaOrganizacyjna": "4173a522422240c2a945881ca8936575"
    },
    {
      "id": "90bcb212e3d64ae98de1ad893cbb1b43",
      "nazwa": "Biuro Informatyki",
      "symbol": "BI",
      "opis": "",
      "typKomorki": "Wydział",
      "idNadrzednaKomorkaOrganizacyjna": "b3f0a77804ab41eca293fe8132610c39"
    },
    {
      "id": "9929685182904736a4f5289dfb91d73d",
      "nazwa": "Biuro Obsługi Urzędu",
      "symbol": "BOU",
      "opis": "",
      "typKomorki": "Wydział",
      "idNadrzednaKomorkaOrganizacyjna": "b3f0a77804ab41eca293fe8132610c39"
    },
    {
      "id": "cea9a823d3534b7286f01d59bb21dd67",
      "nazwa": "Oddział Systemów Teleinformatycznych",
      "symbol": "BI-I",
      "opis": "",
      "typKomorki": "Oddział",
      "idNadrzednaKomorkaOrganizacyjna": "90bcb212e3d64ae98de1ad893cbb1b43"
    },
    {
      "id": "e20aafce1a5d4f1da0c5c6c42d38bcc4",
      "nazwa": "Oddział Administratorów",
      "symbol": "BI-II",
      "opis": "",
      "typKomorki": "Oddział",
      "idNadrzednaKomorkaOrganizacyjna": "90bcb212e3d64ae98de1ad893cbb1b43"
    },
    {
      "id": "a64baf86ec914592915b3ff04b67ce7e",
      "nazwa": "Oddział Serwisu",
      "symbol": "BI-III",
      "opis": "",
      "typKomorki": "Oddział",
      "idNadrzednaKomorkaOrganizacyjna": "90bcb212e3d64ae98de1ad893cbb1b43"
    },
    {
      "id": "ae87ba67a1c34c61a533b6f8a33ac7ab",
      "nazwa": "Biuro Obsługi Klienta",
      "symbol": "BOU-I",
      "opis": "",
      "typKomorki": "Oddział",
      "idNadrzednaKomorkaOrganizacyjna": "9929685182904736a4f5289dfb91d73d"
    },
    {
      "id": "0acbae539e6e4e03b1c06b7ad1506f6d",
      "nazwa": "Oddział Transportu i Konserwacji",
      "symbol": "BOU-I",
      "opis": "",
      "typKomorki": "Oddział",
      "idNadrzednaKomorkaOrganizacyjna": "9929685182904736a4f5289dfb91d73d"
    }
  ],
  "stanowiska": [
    {
      "id": "1840a6a6f6dd4b6c9515bd31dad7df7d",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:42:25.204928",
      "idKomorkaOrganizacyjna": "b3f0a77804ab41eca293fe8132610c39",
      "idUzytkownik": "22",
      "idTypStanowiska": "0b4e20c1ff9e4a5a85a5bf27cd7c05e9",
      "dataUtworzenia": "2021-01-26T22:42:25.204926",
      "idPodmiotWlascicielBiznesowy": "2",
      "uzytkownik": {
        "czyUsuniety": false,
        "czyZablokowany": false,
        "czySystemowy": false,
        "dataModyfikacji": "2020-01-27T00:00:00",
        "dataUtworzenia": "2020-01-27T00:00:00",
        "email": "abondarukpuw",
        "id": "22",
        "idPodmiotWlascicielBiznesowy": "2",
        "imie": "Adam",
        "nazwisko": "Bondaruk",
        "stanowisko": "",
        "ustawieniaProfilu": "",
        "certyfikatDomyslny": "",
        "telefon": ""
      },
      "komorkaOrganizacyjna": {
        "id": "b3f0a77804ab41eca293fe8132610c39",
        "nazwa": "Podlaski Urząd Wojewódzki",
        "symbol": "ROOT_UNIT",
        "typKomorki": "Urząd Wojewódzki"
      },
      "typStanowiska": {
        "id": "0b4e20c1ff9e4a5a85a5bf27cd7c05e9",
        "nazwa": "Wojewoda Podlaski",
        "dataUtworzenia": "2021-01-26T22:30:20.079596",
        "dataModyfikacji": "2021-01-26T22:30:20.079599",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "050ff9ae91b745ca8e8537f5d3cb3559",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:45:24.371474",
      "idKomorkaOrganizacyjna": "4173a522422240c2a945881ca8936575",
      "idUzytkownik": "9617d3d7cf3d4fec9a7a0f7901953d8b",
      "idTypStanowiska": "bec511660b7b4bb99883bf8b851b0b19",
      "dataUtworzenia": "2021-01-26T22:45:24.371471",
      "idPodmiotWlascicielBiznesowy": "2",
      "uzytkownik": {
        "czyUsuniety": false,
        "czyZablokowany": false,
        "czySystemowy": false,
        "dataModyfikacji": "2020-09-21T08:38:25.31429",
        "dataUtworzenia": "2020-09-21T08:35:28.184025",
        "email": "gglodz@bialystok.uw.gov.pl",
        "id": "9617d3d7cf3d4fec9a7a0f7901953d8b",
        "idPodmiotWlascicielBiznesowy": "2",
        "imie": "Grzegorz",
        "nazwisko": "Głódź",
        "stanowisko": "Administrator"
      },
      "komorkaOrganizacyjna": {
        "id": "4173a522422240c2a945881ca8936575",
        "nazwa": "Wojewódzka Inspekcja Geodezyjna i ",
        "symbol": "GK",
        "opis": "",
        "typKomorki": "Wydział",
        "idNadrzednaKomorkaOrganizacyjna": "b3f0a77804ab41eca293fe8132610c39"
      },
      "typStanowiska": {
        "id": "bec511660b7b4bb99883bf8b851b0b19",
        "nazwa": "Dyrektor Wydziału",
        "dataUtworzenia": "2021-01-26T22:43:19.647815",
        "dataModyfikacji": "2021-01-26T22:43:19.647819",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "5b80f2b1cc62479894115898a728034a",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:46:28.08358",
      "idKomorkaOrganizacyjna": "4173a522422240c2a945881ca8936575",
      "idUzytkownik": "21",
      "idTypStanowiska": "b52bf99aa33b4c30b249f388cedd4264",
      "dataUtworzenia": "2021-01-26T22:46:28.083577",
      "idPodmiotWlascicielBiznesowy": "2",
      "uzytkownik": {
        "czyUsuniety": false,
        "czyZablokowany": false,
        "czySystemowy": false,
        "dataModyfikacji": "2021-01-27T08:26:44.303071",
        "dataUtworzenia": "2020-01-27T00:00:00",
        "email": "aga1212@o2.pl",
        "id": "21",
        "idPodmiotWlascicielBiznesowy": "2",
        "imie": "Agnieszka",
        "nazwisko": "Łajkowska",
        "stanowisko": "",
        "telefon": "123213123"
      },
      "komorkaOrganizacyjna": {
        "id": "4173a522422240c2a945881ca8936575",
        "nazwa": "Wojewódzka Inspekcja Geodezyjna i ",
        "symbol": "GK",
        "opis": "",
        "typKomorki": "Wydział",
        "idNadrzednaKomorkaOrganizacyjna": "b3f0a77804ab41eca293fe8132610c39"
      },
      "typStanowiska": {
        "id": "b52bf99aa33b4c30b249f388cedd4264",
        "nazwa": "Zastępca Dyrektora Wydziału",
        "dataUtworzenia": "2021-01-26T22:45:59.711845",
        "dataModyfikacji": "2021-01-26T22:45:59.711848",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "c308ebc0e4f341b2b5006548ca605545",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:47:40.573082",
      "idKomorkaOrganizacyjna": "90bcb212e3d64ae98de1ad893cbb1b43",
      "idTypStanowiska": "bec511660b7b4bb99883bf8b851b0b19",
      "dataUtworzenia": "2021-01-26T22:47:40.573079",
      "idPodmiotWlascicielBiznesowy": "2",
      "komorkaOrganizacyjna": {
        "id": "90bcb212e3d64ae98de1ad893cbb1b43",
        "nazwa": "Biuro Informatyki",
        "symbol": "BI",
        "opis": "",
        "typKomorki": "Wydział",
        "idNadrzednaKomorkaOrganizacyjna": "b3f0a77804ab41eca293fe8132610c39"
      },
      "typStanowiska": {
        "id": "bec511660b7b4bb99883bf8b851b0b19",
        "nazwa": "Dyrektor Wydziału",
        "dataUtworzenia": "2021-01-26T22:43:19.647815",
        "dataModyfikacji": "2021-01-26T22:43:19.647819",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "104256a459e84d60b841bc51d99e8b02",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:55:27.926004",
      "idKomorkaOrganizacyjna": "cea9a823d3534b7286f01d59bb21dd67",
      "idTypStanowiska": "14965fa337f74b6a936fe08dea1d9ead",
      "dataUtworzenia": "2021-01-26T22:55:27.926002",
      "idPodmiotWlascicielBiznesowy": "2",
      "komorkaOrganizacyjna": {
        "id": "cea9a823d3534b7286f01d59bb21dd67",
        "nazwa": "Oddział Systemów Teleinformatycznych",
        "symbol": "BI-I",
        "opis": "",
        "typKomorki": "Oddział",
        "idNadrzednaKomorkaOrganizacyjna": "90bcb212e3d64ae98de1ad893cbb1b43"
      },
      "typStanowiska": {
        "id": "14965fa337f74b6a936fe08dea1d9ead",
        "nazwa": "Kierownik oddziału",
        "dataUtworzenia": "2021-01-26T22:35:43.494002",
        "dataModyfikacji": "2021-01-26T22:35:43.494005",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "0d785e6a2fd2444c8081b3259d630870",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:55:37.865399",
      "idKomorkaOrganizacyjna": "a64baf86ec914592915b3ff04b67ce7e",
      "idTypStanowiska": "14965fa337f74b6a936fe08dea1d9ead",
      "dataUtworzenia": "2021-01-26T22:55:37.865393",
      "idPodmiotWlascicielBiznesowy": "2",
      "komorkaOrganizacyjna": {
        "id": "a64baf86ec914592915b3ff04b67ce7e",
        "nazwa": "Oddział Serwisu",
        "symbol": "BI-III",
        "opis": "",
        "typKomorki": "Oddział",
        "idNadrzednaKomorkaOrganizacyjna": "90bcb212e3d64ae98de1ad893cbb1b43"
      },
      "typStanowiska": {
        "id": "14965fa337f74b6a936fe08dea1d9ead",
        "nazwa": "Kierownik oddziału",
        "dataUtworzenia": "2021-01-26T22:35:43.494002",
        "dataModyfikacji": "2021-01-26T22:35:43.494005",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "1be255e217a84434a23022742d27a7fd",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:55:49.014601",
      "idKomorkaOrganizacyjna": "e20aafce1a5d4f1da0c5c6c42d38bcc4",
      "idTypStanowiska": "14965fa337f74b6a936fe08dea1d9ead",
      "dataUtworzenia": "2021-01-26T22:55:49.014599",
      "idPodmiotWlascicielBiznesowy": "2",
      "komorkaOrganizacyjna": {
        "id": "e20aafce1a5d4f1da0c5c6c42d38bcc4",
        "nazwa": "Oddział Administratorów",
        "symbol": "BI-II",
        "opis": "",
        "typKomorki": "Oddział",
        "idNadrzednaKomorkaOrganizacyjna": "90bcb212e3d64ae98de1ad893cbb1b43"
      },
      "typStanowiska": {
        "id": "14965fa337f74b6a936fe08dea1d9ead",
        "nazwa": "Kierownik oddziału",
        "dataUtworzenia": "2021-01-26T22:35:43.494002",
        "dataModyfikacji": "2021-01-26T22:35:43.494005",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "1381e4e03f3140c9b188f7d3086e7f97",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:56:02.388212",
      "idKomorkaOrganizacyjna": "e20aafce1a5d4f1da0c5c6c42d38bcc4",
      "idTypStanowiska": "c93d9739aa1b418eba47ee748f9bc5c1",
      "dataUtworzenia": "2021-01-26T22:56:02.38821",
      "idPodmiotWlascicielBiznesowy": "2",
      "komorkaOrganizacyjna": {
        "id": "e20aafce1a5d4f1da0c5c6c42d38bcc4",
        "nazwa": "Oddział Administratorów",
        "symbol": "BI-II",
        "opis": "",
        "typKomorki": "Oddział",
        "idNadrzednaKomorkaOrganizacyjna": "90bcb212e3d64ae98de1ad893cbb1b43"
      },
      "typStanowiska": {
        "id": "c93d9739aa1b418eba47ee748f9bc5c1",
        "nazwa": "Specjalista",
        "dataUtworzenia": "2021-01-26T22:35:20.828321",
        "dataModyfikacji": "2021-01-26T22:35:20.828324",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "85278e48a01a43b1a2737fd6f573cfcd",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:56:14.387461",
      "idKomorkaOrganizacyjna": "e887d9858ce64c05b512816bcde1e4a0",
      "idTypStanowiska": "14965fa337f74b6a936fe08dea1d9ead",
      "dataUtworzenia": "2021-01-26T22:56:14.387459",
      "idPodmiotWlascicielBiznesowy": "2",
      "komorkaOrganizacyjna": {
        "id": "e887d9858ce64c05b512816bcde1e4a0",
        "nazwa": "Oddział Nadzoru Kartograficznego",
        "symbol": "GK-II",
        "opis": "",
        "typKomorki": "Oddział",
        "idNadrzednaKomorkaOrganizacyjna": "4173a522422240c2a945881ca8936575"
      },
      "typStanowiska": {
        "id": "14965fa337f74b6a936fe08dea1d9ead",
        "nazwa": "Kierownik oddziału",
        "dataUtworzenia": "2021-01-26T22:35:43.494002",
        "dataModyfikacji": "2021-01-26T22:35:43.494005",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "cb1a8e7eaaea4b97b521b775f2bd1038",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:56:26.818099",
      "idKomorkaOrganizacyjna": "e887d9858ce64c05b512816bcde1e4a0",
      "idTypStanowiska": "846b584f3a6b4939888c4d7ca7094a76",
      "dataUtworzenia": "2021-01-26T22:56:26.818097",
      "idPodmiotWlascicielBiznesowy": "2",
      "komorkaOrganizacyjna": {
        "id": "e887d9858ce64c05b512816bcde1e4a0",
        "nazwa": "Oddział Nadzoru Kartograficznego",
        "symbol": "GK-II",
        "opis": "",
        "typKomorki": "Oddział",
        "idNadrzednaKomorkaOrganizacyjna": "4173a522422240c2a945881ca8936575"
      },
      "typStanowiska": {
        "id": "846b584f3a6b4939888c4d7ca7094a76",
        "nazwa": "Inspektor",
        "dataUtworzenia": "2021-01-26T22:30:30.765281",
        "dataModyfikacji": "2021-01-26T22:30:30.765284",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "1af1be792bab43baaedb9eb83e0b0c03",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:56:34.824977",
      "idKomorkaOrganizacyjna": "e887d9858ce64c05b512816bcde1e4a0",
      "idTypStanowiska": "c554d368e0ca48b68135fef5a8564688",
      "dataUtworzenia": "2021-01-26T22:56:34.824974",
      "idPodmiotWlascicielBiznesowy": "2",
      "komorkaOrganizacyjna": {
        "id": "e887d9858ce64c05b512816bcde1e4a0",
        "nazwa": "Oddział Nadzoru Kartograficznego",
        "symbol": "GK-II",
        "opis": "",
        "typKomorki": "Oddział",
        "idNadrzednaKomorkaOrganizacyjna": "4173a522422240c2a945881ca8936575"
      },
      "typStanowiska": {
        "id": "c554d368e0ca48b68135fef5a8564688",
        "nazwa": "Starszy inspektor wojewódzki",
        "dataUtworzenia": "2021-01-26T22:30:51.707128",
        "dataModyfikacji": "2021-01-26T22:30:51.707135",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "b62ceeb2b0b04b39b2cb32f143de857d",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:56:45.024759",
      "idKomorkaOrganizacyjna": "9929685182904736a4f5289dfb91d73d",
      "idTypStanowiska": "bec511660b7b4bb99883bf8b851b0b19",
      "dataUtworzenia": "2021-01-26T22:56:45.024757",
      "idPodmiotWlascicielBiznesowy": "2",
      "komorkaOrganizacyjna": {
        "id": "9929685182904736a4f5289dfb91d73d",
        "nazwa": "Biuro Obsługi Urzędu",
        "symbol": "BOU",
        "opis": "",
        "typKomorki": "Wydział",
        "idNadrzednaKomorkaOrganizacyjna": "b3f0a77804ab41eca293fe8132610c39"
      },
      "typStanowiska": {
        "id": "bec511660b7b4bb99883bf8b851b0b19",
        "nazwa": "Dyrektor Wydziału",
        "dataUtworzenia": "2021-01-26T22:43:19.647815",
        "dataModyfikacji": "2021-01-26T22:43:19.647819",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "c812dc50aeeb45808b93f293b32153c5",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-26T22:57:09.158652",
      "idKomorkaOrganizacyjna": "9929685182904736a4f5289dfb91d73d",
      "idTypStanowiska": "b52bf99aa33b4c30b249f388cedd4264",
      "dataUtworzenia": "2021-01-26T22:57:09.15865",
      "idPodmiotWlascicielBiznesowy": "2",
      "komorkaOrganizacyjna": {
        "id": "9929685182904736a4f5289dfb91d73d",
        "nazwa": "Biuro Obsługi Urzędu",
        "symbol": "BOU",
        "opis": "",
        "typKomorki": "Wydział",
        "idNadrzednaKomorkaOrganizacyjna": "b3f0a77804ab41eca293fe8132610c39"
      },
      "typStanowiska": {
        "id": "b52bf99aa33b4c30b249f388cedd4264",
        "nazwa": "Zastępca Dyrektora Wydziału",
        "dataUtworzenia": "2021-01-26T22:45:59.711845",
        "dataModyfikacji": "2021-01-26T22:45:59.711848",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "b3449b13dcb64739ad265e0b9fd78770",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-27T07:45:56.629917",
      "idKomorkaOrganizacyjna": "cea9a823d3534b7286f01d59bb21dd67",
      "idTypStanowiska": "846b584f3a6b4939888c4d7ca7094a76",
      "dataUtworzenia": "2021-01-27T07:45:56.629913",
      "idPodmiotWlascicielBiznesowy": "2",
      "komorkaOrganizacyjna": {
        "id": "cea9a823d3534b7286f01d59bb21dd67",
        "nazwa": "Oddział Systemów Teleinformatycznych",
        "symbol": "BI-I",
        "opis": "",
        "typKomorki": "Oddział",
        "idNadrzednaKomorkaOrganizacyjna": "90bcb212e3d64ae98de1ad893cbb1b43"
      },
      "typStanowiska": {
        "id": "846b584f3a6b4939888c4d7ca7094a76",
        "nazwa": "Inspektor",
        "dataUtworzenia": "2021-01-26T22:30:30.765281",
        "dataModyfikacji": "2021-01-26T22:30:30.765284",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    },
    {
      "id": "176f70960f5b46c59610226fa5b34286",
      "czyUsuniete": false,
      "dataModyfikacji": "2021-01-27T08:36:31.02847",
      "idKomorkaOrganizacyjna": "e20aafce1a5d4f1da0c5c6c42d38bcc4",
      "idTypStanowiska": "35224f5e47414a21ad2451d4be08900b",
      "dataUtworzenia": "2021-01-27T08:36:31.028468",
      "idPodmiotWlascicielBiznesowy": "2",
      "komorkaOrganizacyjna": {
        "id": "e20aafce1a5d4f1da0c5c6c42d38bcc4",
        "nazwa": "Oddział Administratorów",
        "symbol": "BI-II",
        "opis": "",
        "typKomorki": "Oddział",
        "idNadrzednaKomorkaOrganizacyjna": "90bcb212e3d64ae98de1ad893cbb1b43"
      },
      "typStanowiska": {
        "id": "35224f5e47414a21ad2451d4be08900b",
        "nazwa": "Starszy inspektor",
        "dataUtworzenia": "2021-01-26T22:36:05.99925",
        "dataModyfikacji": "2021-01-26T22:36:05.999253",
        "idPodmiotWlascicielBiznesowy": "2",
        "czyUsuniety": false
      }
    }
  ]
}`;
export const response = JSON.parse(
  jsonDATA
) as GetStructureDetailsResponseModel;

export const responseTree = createStructureTree(
  response.komorkiOrganizacyjne,
  response.stanowiska
);

type StructureTreeModel = KomorkaOrganizacyjnaModel & {
  isExpanded?: boolean;
  children?: any[];
};
export function createStructureTree(
  listaKomorek: KomorkaOrganizacyjnaModel[],
  stanowiska: StanowiskoModel[]
): StructureTreeModel {
  let tree: StructureTreeModel = { ...listaKomorek[0] };
  const stanowiskaKomorki = stanowiska?.filter(
    (x) => x.idKomorkaOrganizacyjna === tree.id
  );
  if (stanowiskaKomorki) {
    let xx = stanowiskaKomorki?.map((x) => x) || [];
    tree.children = [...(tree.children || []), ...xx];
  }
  const komorkiPodrzedne = listaKomorek.filter(
    (x) => x?.idNadrzednaKomorkaOrganizacyjna === tree.id
  );
  if (komorkiPodrzedne) {
    tree.children = [
      ...(tree.children || []),
      ...komorkiPodrzedne.map((x) => x),
    ];
    deepCheckTree(listaKomorek, stanowiska, tree);
  }
  return tree;
}

function deepCheckTree(listaKomorek: any[], stanowiska: any[], komorkaEl: any) {
  if (komorkaEl.children) {
    for (let komorka of komorkaEl?.children) {
      const stanowiskaKomorki = stanowiska?.filter(
        (x) => x.idKomorkaOrganizacyjna === komorka.id
      );
      if (stanowiskaKomorki) {
        komorka.children = [
          ...(komorka.children || []),
          ...stanowiskaKomorki.map((x) => x),
        ];
      }
      const komorkiPodrzedne = listaKomorek.filter(
        (x) => x.idNadrzednaKomorkaOrganizacyjna === komorka.id
      );
      if (komorkiPodrzedne) {
        komorka.children = [
          ...(komorka.children || []),
          ...komorkiPodrzedne.map((x) => x),
        ];
        deepCheckTree(listaKomorek, stanowiska, komorka);
      }
    }
  }
}

export type UzytkownikModel = {
  imie: string;
  nazwisko: string;
  awatar: string;
  stanowisko: string;
  jednostka: string;
  jednostkaSymbol: string;
  nazwaJednostkaNadrzedna?: string;
};

export type CreateStructureRequestModel = {
  nazwa: string;
};

export type CreateUnitRequestModel = {
  idStrukturaOrganizacyjnaWersja: string;
  idNadrzednaKomorkaOrganizacyjna: string;
  nazwa: string;
  opis: string;
  symbol: string;
  typKomorki: string;
};

export type CreateStructureResponseModel = {
  idStrukturaOrganizacyjna: string;
  idStrukturaOrganizacyjnaWersja: string;
};

export type GetStructureResponseModel = {};

export type GetStructuresResponseModel = {
  strukturyOrganizacyjne: StrukturaOrganizacyjnaModel[];
};

export type GetStructureDetailsRequestModel = {
  idStrukturaOrganizacyjnaWersja: string;
  idStrukturaOrganizacyjna?: string;
};
export type KomorkaOrganizacyjnaModel = {
  id: string;
  idNadrzednaKomorkaOrganizacyjna?: string;
  nazwa: string;
  symbol: string;
  typKomorki: string;
  opis: string;
};

export type StrukturaOrganizacyjnaModel = {
  idStrukturaOrganizacyjna: string;
  idStrukturaOrganizacyjnaWersja: string;
  wersja: string;
  nazwa: string;
  dataUtworzenia: string;
  dataModyfikacji: string;
};

export type StanowiskoModel = {
  id: string;
  czyUsuniete: boolean;
  dataModyfikacji: string;
  idKomorkaOrganizacyjna: string;
  idUzytkownik: string;
  idTypStanowiska: string;
  dataUtworzenia: string;
  idPodmiotWlascicielBiznesowy: string;
  uzytkownik: UzytkownikModel;
  komorkaOrganizacyjna: KomorkaOrganizacyjnaModel;
  typStanowiska: TypStanowiska;
};

export type GetStructureDetailsResponseModel = {
  komorkiOrganizacyjne: KomorkaOrganizacyjnaModel[];
  strukturaOrganizacyjna: StrukturaOrganizacyjnaModel;
  stanowiska?: StanowiskoModel[];
};

export type AddJobPositionRequestModel = {
  idUzytkownik: string;
  idKomorkaOrganizacyjna: string;
  idTypStanowiska: string;
  idStrukturaOrganizacyjnaWersja: string;
};

export type AddJobPositionResponseModel = {};

export type TypStanowiska = {
  [K in
    | 'id'
    | 'nazwa'
    | 'dataUtworzenia'
    | 'dataModyfikacji'
    | 'idPodmiotWlascicielBiznesowy']: string;
} & {
  czyUsuniety: boolean;
};

export type GetJobPositionTypesResponseModel = {
  typyStanowisk: TypStanowiska[];
};
