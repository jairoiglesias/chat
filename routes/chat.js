module.exports = function(app){

    app.get('/chat', (req, res) => {
        res.render('chat')
    })

    app.get('/get_messages', (req, res) =>{
        res.send(globa.msgs)
    })

}