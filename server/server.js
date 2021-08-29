const io = require('socket.io')(5000)

io.on('connection', socket => {
    //kee same id consistently
    const id = socket.handshake.query.id
    socket.join(id)

    socket.on('send-message', ({ recipients, text }) => {
        recipients.forEach(recipient => {
            //removing the current recipient from list of recipients
            const newRecipients = recipients.filter(r => r !== recipient)
            //adding sender to list of recipients
            newRecipients.push(id)
            socket.broadcast.to(recipient).emit('receive-message', {
                recipients: newRecipients, sender: id, text
            })
        })
    })
})