import contact from './contact.svg'
import contactSelected from './contactSelected.svg'

import house from './house.svg'
import houseSelected from './houseSelected.svg'

import mailSend from './send.svg'
import mailSendSelected from './sendSelected.svg'

import mailReceive from './mail.svg'
import mailReceiveSelected from './mailSelected.svg'

import people from './people.svg'
import peopleSelected from './peopleSelected.svg'

import connections from './globe.svg'
import connectionsSelected from './globeSelected.svg'

import user from './user.svg'
import userSelected from './userSelected.svg'
import { SvgIconImg } from './svgIconStyle'

export type HiconType = 'contact' | 'house' | 'mailSend' |
        'mailReceive' | 'people' | 'connections' |
        'user'

export type SvgIconProps = React.HTMLAttributes<HTMLOrSVGElement> & {
    type?: HiconType
    variant?: 'notSelected' | 'selected'
  }

export default function SvgIcon({type, variant, onClick}: SvgIconProps) {

    function getSvgSource() {
        if(type === 'user') {
            return variant === 'notSelected' ? user.src : userSelected.src
        }
        if(type === 'people') {
            return variant === 'notSelected' ? people.src : peopleSelected.src
        }
        if(type === 'house') {
            return variant === 'notSelected' ? house.src : houseSelected.src
        }
        if(type === 'contact') {
            return variant === 'notSelected' ? contact.src : contactSelected.src
        }
        if(type === 'mailReceive') {
            return variant === 'notSelected' ? mailReceive.src : mailReceiveSelected.src
        }
        if(type === 'mailSend') {
            return variant === 'notSelected' ? mailSend.src : mailSendSelected.src
        }
        if(type === 'connections') {
            return variant === 'notSelected' ? connections.src : connectionsSelected.src
        }
    }

    const source = getSvgSource()

    return <SvgIconImg src={source} onClick={onClick}/>
}