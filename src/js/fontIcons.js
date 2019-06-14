// Select Icons to import from fontAwesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

library.add(faCheck, faBars)
dom.watch()
