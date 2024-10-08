export class DatabaseMemory {
    #videos = new Map()

    list() {
        return this.#videos.values()
    }

    create(){
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }

}