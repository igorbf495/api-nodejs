import { DatabaseMemory } from './database-memory.js'
import { fastify } from 'fastify'

const server = fastify()

// obter registro
server.get('/videos', () => {
    return 'hello world'
})

//criar registro
server.post('/videos', () => {
    return 'post'
})

// atualizar registro
server.put('/videos/:id', () => {
    return 'put'
})

// deletar registro
server.delete('/videos/:id', () => {
    return 'delete'
})

server.listen(
    {
        port: 2332,
    }
)

