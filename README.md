# Zadanie rekrutacyjne dokumentacja:

## Technologia

Niżej opisane zadanie zostało wykonane przy pomocy Next.js (framework JS) oraz style SCSS (SASS - preprocesor dla CSS).
- Next.js
- SCSS

### Główne warunki (KOMPLET):

Udało się spełnić 3 główne warunki zadania opisane niżej. (Breakpoint dodany do stałych SCSS).
- Nie używać bootstrapa/tailwinda ani innych bibliotek/frameworków do styli
- Zastosować SCSS
- 960px jako główny breakpoint

### Dodatkowe plusy, które udało się wykonać (KOMPLET):
- Użycie JSowego frameworku (Next.js),
- Brak plików graficznych - żadnych poza logotypem (użyty został plik SVG ponieważ jest najlepiej edytowalny, "lekki" i łatwo zrobić wszystko w kodzie,
- CSS IS AWESOME w footerze animowane zgodnie z założeniem (ramka bez napisu),
- Zastosowanie BEM (mam nadzieję że odpowiednio - wiem że często różni się to w firmach, więc dostosowałem się do konwencji której ja wcześniej używałem - aczkolwiek jestem w pełni otwarty na zmianę tego nawyku),
- Spełnienie zasad a11y,
- Wykorzystanie jednostek rem, vw, vh, aby ograniczyć skalowanie pikselami (jest to również ryzykowne ponieważ rem odnosi się do wielkości czcionki i jest mocno uzależnione od użytkownika, dlatego wiem że nie jest to perfekcyjne rozwiązanie),
- Mobile first,
- Alfabetyczne sortowanie doklejanych elementów
- Wyświetlanie alertu przy braku opcji spełnienia warunku doklejania (lub już wklejonego tam komponentu),
- Button w footerze wysuwa ramkę bez JSa,
- Praca wrzucona do netlify jako prezentacja wyników pod linkiem:

### Zadanie na 6 (nie wykonane):
Zadanie nie zostało wykonane niestety z braku czasu (od piątku byłem na wyjeździe służbowym stąd miałem jakieś 5h na wykonanie zadania).
Natomiast nie jest to bardzo trudne zadanie - aby to uczynić wystarczy dane stanu `content` przenieść do localStorage i edytować `useEffectem` wywołując go w trakcie użycia `setContent`, resetowanie to ponowne ustawienie useState-content do wartości `[jsonData[10].text]`
Dodatkowo aby to ulepszyć dane te można zapisywać w linku `query-strings`, przez co przy przesłaniu lub zmianach przeglądarki dane byłyby dalej aktualne i wybrane te same elementy (wtedy wystarczy przeładować stronę do '/' aby wyczyścić dane. Jest to moim zdaniem prostsze rozwiązanie (przynajmniej w Next.js) i jednocześnie w przypadku gdy nie trzymamy tutaj danych wrażliwych lepsze, ponieważ możemy każdemu przesyłać to co my widzimy.

### Ode mnie
Dzień dobry, jak wyżej opisałem jestem mocno ograniczony czasowo przy tym zadaniu, daltego wiem że nie wykonałem takich rzeczy jak np. obracająca się strzałka w footerze przy wysuwaniu modala, czy zachowaniu idealnych proporcji. Natomiast chciałem skupić się na wykonaniu poleconych zadań, aby pokazać spektrum moich umiejętności, wierząc że w chwili normalnego taska te zadania były by zrobione - nie jest to niedopatrzenie lecz faktyczne ograniczenie czasem (deadline też nie jest problemem, gdy można oddać się zadaniu za które ma się pieniądze - mam nadzieję że Państwo rozumieją o co chodzi). 

### Trochę o kodzie

- W kodzie zastosowano podział na komponenty, folder ze stylami, zastosowano exporty folderowe, aby w rozbudowie kod był czytelniejszy,
- Istniene pliku layout z reużywalnym wyglądem gdzie następnie operujemy tylko kontentem, a w tym przypadku mamy ten sam footer i navbar
- Zastosowano plki scss z reużywalnymi elementami `_colors` i `_breakpoints` dzięki czemu w jednym miejscu możemy zmienić kolor lub chwilę zmiany ułożenia wszystkich elementów o danym atrybucie,
- Kod, można by było rozbudować o formuły SCSS, np do breakpointów lub czcionek, aby jedną linijką zmieniać wielkość, grubość, spacing i line-height
- Zachowane zostały zasady SEO,
- Plik JSON znajduje się w `page.js` i składa się z `id` oraz `text`


 ## O co bym rozbudował?

 - Wyniesienie poszczególnych komponentów do osobnych plików, aby upraszczać kod i lepiej stosować DRY (np. buttony, inputy radio, czy nawet takie rzeczy jak element "CSS IS AWESOME),
 - Dodanie większej ilości breakpointów,
 - Większa ilość commitów - per komponent / większe działanie zwiększając czytelność i ułatwiając pracę lub poszukiwanie błędów,
 - Zadania na 6,
 - Przerobienia komponentów stałych (navbar, footer i page jako `use server` a osobnych komponentów trzymających dane jako `use client` co by przyspieszyło stronę.


### Bardzo dziękuję za zapoznanie się z rozwiązaniem


  
### -----------------------------------------------------------------------------
### -----------------------------------------------------------------------------

# Zadanie rekrutacyjne treść:
Witaj,

Prosimy Cię o wykonanie poniższego zadania najlepiej jak tylko umiesz. Pozwoli to nam lepiej ocenić Twoje umiejętności :)

## OPIS
W katalogu znajdziesz projekt graficzny. Prosimy Cię o jego pocięcie oraz napisanie funkcjonalności dla poszczególnych elementów. Swoje prace rób jako fork tego repozytorium.


### CEL

- Pocięta strona ma wypełniać całe okno przeglądarki (nie zamykać contentu w kontenerze o stałej szerokości). Przy reponsywności możesz zastosować dowolne breakpointy, samemu uznaj jak będzie najlepiej.

- Header powinien być na stałe przyklejony do topu, Logo HTML5 w headerze powinno linkować do '/' .  

- Stopka strony w przypadku małej ilości treści w contencie powinna i tak być na samym dole strony a nie 'doklejać' się pod contentem.

- W bloku pierwszym są radiobuttony, ich wybór a następnie kliknięcie przycisku w bloku drugim wykona akcję podmiany lub doklejenia tekstu w bloku ostatnim. Treści które mają zostać użyte należy pobrać z JSONa (szczegóły niżej). Opcja pierwsza wybierze zawsze treść pierwszą, opcja druga drugą a opcja losowa dowolną z pozostałych. Każda osobna treść w ostatnim bloku powinna być objęta tagiem <article>. Doklejając treść należy uniknąć powielania już istniejącej treści (w przypadku użycia opcji losowej należy wylosować kolejną jeszcze nie użytą treść). 

- Button 'pokaż' w footerze po kliknięciu pokazuje ramkę (wysuwa ją spod footera) z 2 klikalnymi opcjami. Pierwsza przywraca stronę do początkowych ustawień, druga w headerze dokleja Twoje imię i nazwisko.


### PLIK JSON
Zbudować plik z tablicą przynajmniej 6 elementów zawierających dowolną treść. Wolno w JSONie trzymać dodatkowe dane jeżeli uprości to wykonanie zadania.


### WARUNKI
- Nie używać bootstrapa/tailwinda ani innych podobnych frameworków.
- Zastosować SCSS.
- Poniżej 960px według uznania dokonać zmian w projekcie by jak najlepiej przedstawić stronę (najlepiej wykorzystać przykład projektu mobilnego).


### DODATKOWE PLUSY
- Osadzenie całego zadania w jakimś JSowym frameworku (najlepiej Angular).
- Brak plików graficznych w końcowym projekcie (brak plików typu jpg, gif, png, svg).
- CSS IS AWESOME w footerze - po najechaniu myszką ramka (bez tekstu) powinna wykonać animowany obrót.
- Zastosowanie BEM.
- Spełnianie zasad a11y.
- Logiczne wykorzystanie jednostek rem, em, vh, vw (w efekcie jak najmniejsze użycie jednostki px) - w taki sposób by w efekcie responsywność spełniona została jak najmniejszą ilością kodu.
- Mobile first.
- Doklejając treść sprawić by w ostatnim bloku treści były posortowane alfabetycznie.
- Przy doklejaniu treści w przypadku niemożliwości spełnienia warunku by była unikalna wyświetlić stosowny komunikat (np. alert/dialog/modal).
- Button w footerze ("pokaż") wysuwający ramkę bez użycia JSa.
- Rezultat prac wrzucić do podglądu na jakąś darmową platformę (np. netlify/heroku).


### ZADANIE NA 6 :)
- Wykorzystać localStorage do załadowania treści z pliku i ich późniejszego przechowywania oraz napisać dodatkową funkcjonalność pozwalającą na zarządzanie nimi (dodawanie/edycja/usuwanie).


## UWAGI
Projekt nie musi być 'pixel perfect'. Z uwagi na brak pliku źródłowego a jedynie jpg należy wymiary samemu zmierzyć. Ale przykładowo jeżeli jakiś element po zmierzeniu wydaje się że ma 139px to dobrą praktyką będzie zaokrąglić go do 140px. Użyty w projekcie font to OpenSans.


## WYSYŁKA PRACY
Należy przesłać link do swojego repozytorium z rozwiązaniem. Dodatkowo wrzuć dokument tekstowy z listą rzeczy których nie udało się wykonać z celów głównych oraz listę rzeczy które zrobiono dodatkowo.

POWODZENIA :)
