const express = require("express")
const path = require('path')
// DATABASE
// 1.Импорт модуля быза данных
const sqlite3 = require('sqlite3').verbose();
// sqlite3.

// Функция закрытие базы данных
// db.close((err) => {
    //     if (err) {
        //         return console.error(err.message);
//     }
//     console.log("Close the database connection")
// });
const PORT = 5000;

// создаем объект приложения
const app = express()

// команда приобразования json-формата для express
app.use(express.json())

// get-запрос
app.get('/', (req, res) => {
    // В консоль выводится параметры запроса
    console.log(req.query);
    res.status(200).json('server is working123, get request work to');
})



// post-запрос
app.post("/", async (req, res) => {
    // const {author, title, content, pictire} = req.body
    // const post = await Post.create({author, title, content, pictire})    
    db.run(`INSERT INTO data(author) VALUES(Andrey)`, ['C'], function(err){
        if (err) {
            return console.log(err.message);
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`)
    });

    res.status(200).json('server is working123, get request work to');
})

// Указание пароль к наешму пользователю
async function startApp() {
    try {
        // 2. Открытие базы данных c callback-функцией, которая будет отлавлывать ошибки
        // для чтения и записи
        let db = new sqlite3.Database(path.resolve(__dirname, 'db_for_app.sqlite3'), sqlite3.OPEN_READWRITE,(err) => {
            if (err) {
                return console.log(err.message);
            }
            console.log("Successful connection to the SQLite database")
        });
        
        // Прослушиваем ПОДКЛЮЧЕНИЕ ПО порту и в случае усупеха
        // выводим в соотвествующую информацию.
        // Другими словами !запускам приложение!.
        app.listen(PORT, () => console.log("server is working" + " " + PORT))
        
    } catch(err) {
        console.log(err)
    }
}

startApp()
