import { Injectable } from '@angular/core';
import { IComixItem } from 'src/app/areas/list/list.interfaces';

@Injectable({
	providedIn: 'root'
})

export class ListDataService {

	constructor()
	{

	}

	GetComixListData(): Array<IComixItem>
	{
		let comixListData: Array<IComixItem> = [
			// KAJKO I KOKOSZ
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Złoty puchar - część 1',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2004, 2017',
				NumberOfPages: 40,
				CoverHard: false,
				Rating: 8,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Złoty puchar - część 2',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2004, 2017',
				NumberOfPages: 40,
				CoverHard: false,
				Rating: 8,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Złoty puchar - część 3',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2004, 2017',
				NumberOfPages: 39,
				CoverHard: false,
				Rating: 8,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Woje Mirmila - część 1',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 40,
				CoverHard: false,
				Rating: 8,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Woje Mirmila - część 2',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 40,
				CoverHard: false,
				Rating: 8,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Woje Mirmila - część 3',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 37,
				CoverHard: false,
				Rating: 8,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Szranki i konkury - część 1',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2005, 2017',
				NumberOfPages: 55,
				CoverHard: false,
				Rating: 9,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Szranki i konkury - część 2',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2005, 2017',
				NumberOfPages: 55,
				CoverHard: false,
				Rating: 9,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Szranki i konkury - część 3',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2005, 2017',
				NumberOfPages: 55,
				CoverHard: false,
				Rating: 9,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Szkoła latania',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 35,
				CoverHard: false,
				Rating: 8,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Wielki turniej',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 35,
				CoverHard: false,
				Rating: 8,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Na wczasach',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 35,
				CoverHard: false,
				Rating: 8,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Zamach na Milusia',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 38,
				CoverHard: false,
				Rating: 9,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Skarby Mirmiła',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 43,
				CoverHard: false,
				Rating: 8,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Cudowny lek',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 43,
				CoverHard: false,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Festiwal czarownic',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 40,
				CoverHard: false,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Dzień śmiechały',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 40,
				CoverHard: false,
				Rating: 9,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'W krainie borostworów',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 48,
				CoverHard: false,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Mirmił w opałach',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2003, 2017',
				NumberOfPages: 47,
				CoverHard: false,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Urodziny Milusia',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2004, 2021',
				NumberOfPages: 30,
				CoverHard: false,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Obłęd Hegemona',
				Author: 'Różni wg Janusza Christy',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2016, 2021',
				NumberOfPages: 36,
				CoverHard: false,
				Rating: 3,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Łamignat straszliwy',
				Author: 'Różni wg Janusza Christy',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2016, 2021',
				NumberOfPages: 38,
				CoverHard: false,
				Rating: 4,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Królewska Konna',
				Author: 'Maciej Kur, Sławomir Kiełbus, Piotr Bednarczyk',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2019, 2021',
				NumberOfPages: 44,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Zaćmienie i zmierzchu',
				Author: 'Maciej Kur, Sławomir Kiełbus, Piotr Bednarczyk',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2021',
				NumberOfPages: 46,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			// KAJTEK I KOKO
			{
				SeriesTitle: 'Kajtek i Koko',
				SeriesSubtitle: 'W kosmosie',
				ComixTitle: 'Zabłąkana rakieta',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2018',
				NumberOfPages: 92,
				CoverHard: false,
				Rating: 4,
				Collected: true
			},
			{
				SeriesTitle: 'Kajtek i Koko',
				SeriesSubtitle: 'W kosmosie',
				ComixTitle: 'Twierdza tyrana',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2018',
				NumberOfPages: 92,
				CoverHard: false,
				Rating: 4,
				Collected: true
			},
			{
				SeriesTitle: 'Kajtek i Koko',
				SeriesSubtitle: 'W kosmosie',
				ComixTitle: 'Przyjaciel Jol',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2018',
				NumberOfPages: 92,
				CoverHard: false,
				Rating: 4,
				Collected: true
			},
			{
				SeriesTitle: 'Kajtek i Koko',
				SeriesSubtitle: 'W kosmosie',
				ComixTitle: 'Planeta automatów',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2020',
				NumberOfPages: 92,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Kajtek i Koko',
				SeriesSubtitle: 'W kosmosie',
				ComixTitle: 'Obce świadomości',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2020',
				NumberOfPages: 92,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Kajtek i Koko',
				SeriesSubtitle: 'W kosmosie',
				ComixTitle: 'Dwór Apodyktusa',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2020',
				NumberOfPages: 92,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Kajtek i Koko',
				SeriesSubtitle: 'W kosmosie',
				ComixTitle: 'Bogini moczarów',
				Author: 'Janusz Christa',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2020',
				NumberOfPages: 92,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			// THORGAL
			// Louve
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Louve - tom 1',
				ComixTitle: 'Raissa',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2011, 2018',
				NumberOfPages: 46,
				CoverHard: true,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Louve - tom 2',
				ComixTitle: 'Dłoń boga Tyra',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2012, 2018',
				NumberOfPages: 46,
				CoverHard: true,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Louve - tom 3',
				ComixTitle: 'Królestwo chaosu',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2013',
				NumberOfPages: 46,
				CoverHard: true,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Louve - tom 4',
				ComixTitle: 'Crow',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2014',
				NumberOfPages: 46,
				CoverHard: true,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Louve - tom 5',
				ComixTitle: 'Skald',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2015',
				NumberOfPages: 46,
				CoverHard: true,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Louve - tom 6',
				ComixTitle: 'Królowa czarnych elfów',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2016, 2018',
				NumberOfPages: 46,
				CoverHard: true,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Louve - tom 7',
				ComixTitle: 'Nidhogg',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2017, 2020',
				NumberOfPages: 46,
				CoverHard: true,
				Collected: true
			},
			// Młodzieńcze lata
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Młodzieńcze lata - tom 1',
				ComixTitle: 'Trzy siostry Minkelsonn',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2017',
				NumberOfPages: 46,
				CoverHard: true,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Młodzieńcze lata - tom 2',
				ComixTitle: 'Oko Odyna',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2014',
				NumberOfPages: 46,
				CoverHard: true,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Młodzieńcze lata - tom 3',
				ComixTitle: 'Runa',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2020',
				NumberOfPages: 46,
				CoverHard: true,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Młodzieńcze lata - tom 4',
				ComixTitle: 'Berserkerowie',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2018',
				NumberOfPages: 46,
				CoverHard: true,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Młodzieńcze lata - tom 5',
				ComixTitle: 'Slivia',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2019',
				NumberOfPages: 46,
				CoverHard: true,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Młodzieńcze lata - tom 6',
				ComixTitle: 'Lodowy drakkar',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2018',
				NumberOfPages: 46,
				CoverHard: true,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Młodzieńcze lata - tom 7',
				ComixTitle: 'Sinozęby',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2019',
				NumberOfPages: 46,
				CoverHard: true,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Młodzieńcze lata - tom 8',
				ComixTitle: 'Bękarty',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2020',
				NumberOfPages: 46,
				CoverHard: true,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Thorgal',
				SeriesSubtitle: 'Młodzieńcze lata - tom 9',
				ComixTitle: 'Łzy Hel',
				Author: 'Roman Surżenko, Pennetier Yann',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2021',
				NumberOfPages: 46,
				CoverHard: true,
				Rating: 6,
				Collected: true
			},
			// ASTERIKS
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Przygody Gala Asteriksa',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Złoty sierp',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks i Goci',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks gladiator',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Wyprawa dookoła Galii',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks i Kleopatra',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Walka wodzów',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks u Brytów',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks i Normanowie',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks legionista',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Tarcza Arwernów',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks na igrzyskach olimpijskich',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks i kociołek',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks w Hiszpanii',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Niezgoda',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks u Helwetów',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Osiedle bogów',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Laury Cezara',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Wróżbita',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks na Korsyce',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Podarunek Cezara',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Wielka przeprawa',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Obeliks i spółka',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks u Belgów',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Wielki rów',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Odyseja Asteriksa',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Syn Asteriksa',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks u Reszehezady',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Róża i miecz',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Galera Obeliksa',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks i Latraviata',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Galijskie początki',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Kiedy niebo spada na głowę',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Rocznica urodzin Asteriksa i Obeliksa – Złota księga',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks u Piktów',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Papirus Cezara',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks w Italii',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Córka Wercyngetoryksa',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Asteriks i Gryf',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'ak Obeliks wpadł do kociołka druida, kiedy był mały',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			{
				SeriesTitle: 'Asteriks',
				ComixTitle: 'Złoty menhir',
				Author: 'Rene Goscinny, Albert Uderzo',
				Collected: false
			},
			// LUCKY LUKE
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Kopalnia złota Dicka Diggera',
				Author: 'Morris',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Rodeo',
				Author: 'Morris',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Arizona',
				Author: 'Morris',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Pod niebem Zachodu',
				Author: 'Morris',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Lucky Luke kontra Pat Poker',
				Author: 'Morris',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Wyjęci spod prawa',
				Author: 'Morris',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Eliksir doktora Doxeya',
				Author: 'Morris',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Lucky Luke i Phil Defer',
				Author: 'Morris',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Szyny na prerii',
				Author: 'Morris',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Uwaga na Niebieskie Stopy',
				Author: 'Morris',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Lucky Luke kontra Joss Jamon',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Kuzyni Daltonów',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Sędzia',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Na podbój Oklahomy',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Ucieczka Daltonów',
				Author: 'Morris, Rene Goscinny',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2019',
				NumberOfPages: 44,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'W górę Missisipi',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Na tropie Daltonów',
				Author: 'Morris, Rene Goscinny',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2020',
				NumberOfPages: 44,
				CoverHard: false,
				Collected: true
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'W cieniu wież wiertniczych',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Rywale z Painful Gulch',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Billy Kid',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Góry Czarne',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Daltonowie i zamieć',
				Author: 'Morris, Rene Goscinny',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2021',
				NumberOfPages: 44,
				CoverHard: false,
				Collected: true
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Daltonowie wciąż uciekają',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Karawana',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Miasto duchów',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Daltonowie odkupują winy',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Dwudziesty pułk kawalerii',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Eskorta',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Zasieki na prerii',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Calamity Jane',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Tortilla dla Daltonów',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Dyliżans',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Żółtodziób',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Dalton City',
				Author: 'Morris, Rene Goscinny',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2018',
				NumberOfPages: 45,
				CoverHard: false,
				Collected: true
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Jesse James',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Cyrk Western',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Kanion Apaczów',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Mama Dalton',
				Author: 'Morris, Rene Goscinny',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2017',
				NumberOfPages: 44,
				CoverHard: false,
				Collected: true
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Łowca nagród',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Wielki książę',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Spadek dla Bzika',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Siedem opowieści o Lucky Luke’u',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Biały jeździec',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Daltonowie na kuracji',
				Author: 'Morris, Rene Goscinny',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2018',
				NumberOfPages: 44,
				CoverHard: false,
				Collected: true
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Cesarz Smith',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Śpiewający drut',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Skarb Daltonów',
				Author: 'Morris, Vicq',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2018',
				NumberOfPages: 44,
				CoverHard: false,
				Collected: true
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Jednoręki bandyta',
				Author: 'Morris, Bob de Groot',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Sarah Bernhardt',
				Author: 'Morris, Xavier Fauche, Jean Leturgie',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Sznur wisielca i inne historie',
				Author: 'Morris, Bob de Groot, Dom Domi, Rene Goscinny, Lodewijk, Vicq',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Daisy Town',
				Author: 'Morris, Rene Goscinny',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Fingers',
				Author: 'Morris, Lo Hartog Van Banda',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Daily Star',
				Author: 'Morris, Xavier Fauche, Jean Leturgie',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Narzeczona Lucky Luke’a',
				Author: 'Morris, Guy Vidal',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Ballada o Daltonach i inne opowieści',
				Author: 'Morris, Rene Goscinny, Greg',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2017',
				NumberOfPages: 46,
				CoverHard: false,
				Collected: true
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Przeklęte ranczo',
				Author: 'Morris, Xavier Fauche, Jean Leturgie, Claude Guylouis',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Nitrogliceryna',
				Author: 'Morris, Lo Hartog Van Banda',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Alibi',
				Author: 'Morris, Claude Guylouis',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Pony Express',
				Author: 'Morris, Xavier Fauche, Jean Leturgie',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Daltonowie tracą pamięć',
				Author: 'Morris, Xavier Fauche, Jean Leturgie',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2018',
				NumberOfPages: 44,
				CoverHard: false,
				Collected: true
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Polowanie na duchy',
				Author: 'Morris, Lo Hartog Van Banda',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Daltonowie na ślubie',
				Author: 'Morris, Xavier Fauche, Jean Leturgie',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Most na Missisipi',
				Author: 'Morris, Xavier Fauche, Jean Leturgie',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Belle Starr',
				Author: 'Morris, Xavier Fauche',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Klondike',
				Author: 'Morris, Jean Leturgie, Yann',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Corral OK',
				Author: 'Morris, Eric Adam, Xavier Fauche',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Marcel Dalton',
				Author: 'Morris, Bob de Groot',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Prorok',
				Author: 'Morris, Patrick Nordmann',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Artysta malarz',
				Author: 'Morris, Bob de Groot',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Legenda Zachodu',
				Author: 'Morris, Patrick Nordmann',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Piękna prowincja',
				Author: 'Achde, Laurent Gerra',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Pętla na szyi',
				Author: 'Achde, Laurent Gerra',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Człowiek z Waszyngtonu',
				Author: 'Achde, Laurent Gerra',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Lucky Luke kontra Pinkerton',
				Author: 'Achde, Daniel Pennac, Tonino Benacquista',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Samotny jeździec',
				Author: 'Achde, Daniel Pennac, Tonino Benacquista',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Wujaszkowie Dalton',
				Author: 'Achde, Laurent Gerra, Jacques Pessis',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2017',
				NumberOfPages: 44,
				CoverHard: false,
				Collected: true
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Ziemia obiecana',
				Author: 'Achde, Jul',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Kowboj w Paryżu',
				Author: 'Achde, Jul',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Lucky Luke w bawełnie',
				Author: 'Achde, Jul',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Człowiek, który zabił Lucky Luke’a',
				Author: 'Matthieu Bonhomme',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Lucky Luke na siodełku',
				Author: 'Mawil',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				ComixTitle: 'Wanted Lucky Luke',
				Author: 'Matthieu Bonhomme',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				SeriesSubtitle: 'Kid Lucky - 1',
				ComixTitle: 'Uczeń kowboja',
				Author: 'Achde',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				SeriesSubtitle: 'Kid Lucky - 2',
				ComixTitle: 'Niebezpieczne lasso',
				Author: 'Achde',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				SeriesSubtitle: 'Kid Lucky - 3',
				ComixTitle: 'Statua Squaw',
				Author: 'Achde',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				SeriesSubtitle: 'Kid Lucky - 4',
				ComixTitle: 'Podążaj za strzałą',
				Author: 'Achde',
				Collected: false
			},
			{
				SeriesTitle: 'Lucky Luke',
				SeriesSubtitle: 'Kid Lucky - 5',
				ComixTitle: 'Podwójny Kid',
				Author: 'Achde',
				Collected: false
			},
			// JONKA, JONEK I KLEKS
			{
				SeriesTitle: 'Jonka, Jonek i Kleks',
				ComixTitle: 'Niech żyje wyobraźnia',
				Author: 'Szarlota Pawel',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2012, 2020',
				NumberOfPages: 62,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Jonka, Jonek i Kleks',
				ComixTitle: 'Porwanie księżniczki',
				Author: 'Szarlota Pawel',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2013, 2016',
				NumberOfPages: 62,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Jonka, Jonek i Kleks',
				ComixTitle: 'Pióro kontra flamaster',
				Author: 'Szarlota Pawel',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2012, 2021',
				NumberOfPages: 60,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Jonka, Jonek i Kleks',
				ComixTitle: 'Smocze jajo',
				Author: 'Szarlota Pawel',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2012, 2016',
				NumberOfPages: 61,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Jonka, Jonek i Kleks',
				ComixTitle: 'Złoto Alaski',
				Author: 'Szarlota Pawel',
				Collected: false
			},
			{
				SeriesTitle: 'Jonka, Jonek i Kleks',
				ComixTitle: 'W pogoni za czarnym Kleksem',
				Author: 'Szarlota Pawel',
				Collected: false
			},
			// OSKRA I FABRYCY
			{
				SeriesTitle: 'Oskar i Fabrycy',
				ComixTitle: 'Straszne smoczysko',
				Author: 'Mieczysław Fijał',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2017',
				NumberOfPages: 38,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Oskar i Fabrycy',
				ComixTitle: 'Dyliżans widmo',
				Author: 'Mieczysław Fijał, Maciej Kur',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2018',
				NumberOfPages: 38,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			// SMERFY
			{
				SeriesTitle: 'Przygody Smerfów',
				ComixTitle: 'Z życia Smerfów',
				Author: 'Peyo, Yvan Delporte',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2019',
				NumberOfPages: 52,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Przygody Smerfów',
				SeriesSubtitle: 'Smerfy i wioska dziewczyn',
				ComixTitle: 'Kruk',
				Author: 'Alain Maury, Luc Parthoens, Thierry Culliford',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2019',
				NumberOfPages: 52,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			// TYTUS, ROMEK I ATOMEK
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga I',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 53,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga II',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 52,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga III',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 52,
				CoverHard: false,
				Rating: 4,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga IV',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 50,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga V',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 53,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga VI',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 52,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga VII',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 52,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga VIII',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 52,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga IX',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 52,
				CoverHard: false,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga X',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 51,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XI',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 61,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XII',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 61,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XIII',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 61,
				CoverHard: false,
				Rating: 8,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XIV',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 61,
				CoverHard: false,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XV',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 62,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XVI',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 61,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XVII',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 60,
				CoverHard: false,
				Rating: 7,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XVIII',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 61,
				CoverHard: false,
				Rating: 6,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XIX',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 60,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XX',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 46,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XXI',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 46,
				CoverHard: false,
				Rating: 4,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XXII',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2009',
				NumberOfPages: 46,
				CoverHard: false,
				Rating: 4,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XXIII',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2010',
				NumberOfPages: 46,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XXIV',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2010',
				NumberOfPages: 46,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			{
				SeriesTitle: 'Tytus, Romek i Atomek',
				ComixTitle: 'Księga XXV - Tytus się żeni',
				Author: 'Henryk Jerzy Chmielewski',
				Publisher: 'Prószyński Media',
				PublishmentYear: '2010',
				NumberOfPages: 45,
				CoverHard: false,
				Rating: 5,
				Collected: true
			},
			// RÓŻNE
			{
				ComixTitle: 'Umpa-Pa czerwonoskóry',
				Author: 'Rene Goscinny, Albert Uderzo',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2007',
				NumberOfPages: 176,
				CoverHard: true,
				Rating: 6,
				Collected: true
			},
			{
				ComixTitle: 'Porady praktycznego pana',
				Author: 'Tadeusz Baranowski',
				Publisher: 'Ongrys',
				PublishmentYear: '2020',
				NumberOfPages: 49,
				CoverHard: true,
				Rating: 5,
				Collected: true
			},
			{
				ComixTitle: '... Czar komiksów Tadeusza',
				Author: 'Artur Ruducha',
				Publisher: 'Ongrys',
				PublishmentYear: '2020',
				NumberOfPages: 30,
				CoverHard: false,
				Rating: 4,
				Collected: true
			},
			{
				SeriesTitle: 'Fantastyczna podróż',
				ComixTitle: 'Wyspa przypływów i inne opowieści',
				Author: 'Grzegorz Rosiński, Jean-Claude Smit Le Benedicte',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2008',
				NumberOfPages: 60,
				CoverHard: true,
				Rating: 4,
				Collected: true
			},
			{
				SeriesTitle: 'Myszka Miki',
				ComixTitle: 'Kawa Zombo',
				Author: 'Regis Loisel',
				Publisher: 'EGMONT Polska',
				PublishmentYear: '2017',
				NumberOfPages: 68,
				CoverHard: true,
				Rating: 4,
				Collected: true
			},

		]

		return comixListData;
	}

}
