import contact from './contact.svg'
import contactSelected from './contactSelected.svg'

import house from './house.svg'
import houseSelected from './house.svg'

import mailSend from './send.svg'
import mailSendSelected from './send.svg'

import mailReceive from './mail.svg'
import mailReceiveSelected from './mail.svg'

import people from './people.svg'
import peopleSelected from './people.svg'

import settings from './settings.svg'
import settingsSelected from './settings.svg'

import user from './user.svg'
import userSelected from './user.svg'
import { SvgIconImg } from './svgIconStyle'

export type HiconType = 'contact' | 'house' | 'mailSend' |
        'mailReceive' | 'people' | 'settings' |
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
        if(type === 'settings') {
            return variant === 'notSelected' ? settings.src : settingsSelected.src
        }
    }

    const source = getSvgSource()
    console.log(source)

    return <SvgIconImg src={source} onClick={onClick}/>
}