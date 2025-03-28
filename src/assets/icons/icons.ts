import { aliases, md } from 'vuetify/iconsets/md'

import likeIcon from '@/assets/icons/likeIcon.svg'
import addIcon from '@/assets/icons/addIcon.svg'
import CareLeft from '@/assets/icons/CaretLeft.svg'
import CareRight from '@/assets/icons/CaretRight.svg'
import cancelIcon from '@/assets/icons/cancelIcon.svg'

export const myAliases = {
  ...aliases,
  likeIcon,
  addIcon,
  CareLeft,
  CareRight,
  cancelIcon,
}

export const iconSets = { md } as Record<string, any>
