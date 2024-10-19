export interface Instance {
    instance: {
        instanceName: String,
        state: String
    }
}

export interface SendMessage {
        number: String,
        textMessage: {
          text: String
        },
        options?: {
          delay: 1200,
          presence: "composing"
        }
}