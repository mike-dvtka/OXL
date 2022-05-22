# OXL

Zachowany model MVC

Front: HTML5, CSS3, sablony EJS, Bootstrap

Backend: Node.js, Express, baza danych MongoDB z nakładką Mongoose (szablon rekordu w bazie danych)

plik oxldb.json to moja wyeksportowana baza danych, można ją zaimportować albo pododawać kilka ogłoszeń żeby zobaczyć efekt

Kilka ciekawych rzeczy:
- zdjęcia są wrzucane do bazy
- zabezpieczenie przed nieautoryzowanym dostępem do panelu admina (/login)
- responsive web design
- po kliknięciu "Więcej" mamy kilka dodatkowych informacji o ogłoszeniu

Aby uruchomić:
- stworzyć w katalogu z projektem plik .env i wkleić to do niego:
SESSION_SECRET=secret
MONGO_URL=mongodb://localhost/oxldb 
- npm install
- npm start
