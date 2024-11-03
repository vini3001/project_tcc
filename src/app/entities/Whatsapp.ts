export interface Instance {
    instance: {
        instanceName: String,
        state: String
    }
}

export interface SendMessageResponse {
		key: {
			remoteJid: String,
			fromMe: Boolean,
			id: String
		},
		pushName: String,
		message: {
			extendedTextMessage: {
				text: String
			}
		}
    messageType: String,
}

export interface SendMessagePayload {
        number: String,
        textMessage: {
          text: String
        },
        options?: {
          delay: 1200,
          presence: "composing"
        }
}

export interface GetGroupsResponse {
      id: string,
      subject: string
}

export interface GetGroupParticipants {
    participant:
      {
        id: string,
        admin: string
      }
}