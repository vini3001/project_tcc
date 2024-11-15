export interface Instance {
    pairingCode: string,
    code: string,
    base64: string
}

export interface SendMessageResponse {
		key: {
			remoteJid: string,
			fromMe: Boolean,
			id: string
		},
		pushName: string,
		message: {
			extendedTextMessage: {
				text: string
			}
		}
    messageType: string,
}

export interface SendMessagePayload {
        number: string,
        textMessage: {
          text: string
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