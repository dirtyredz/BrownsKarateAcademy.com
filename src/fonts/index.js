import YozakuraJPLightTTF from "./YozakuraJP-light-webfont.ttf"
import YozakuraJPLightWOFF from "./YozakuraJP-light-webfont.woff"
import YozakuraJPLightWOFF2 from "./YozakuraJP-light-webfont.woff2"
import YozakuraJPLightOTF from "./YozakuraJP-light.otf"

import YozakuraJPRegularWOFF from "./YozakuraJP-regular-webfont.woff"
import YozakuraJPRegularWOFF2 from "./YozakuraJP-regular-webfont.woff2"
import YozakuraJPRegularOTF from "./YozakuraJP-regular.otf"

import ShojumaruWOFF from "./Shojumaru.woff"
import ShojumaruWOFF2 from "./Shojumaru.woff2"
import ShojumaruTTF from "./Shojumaru.ttf"

const YozakuraJP = {
  Light: {
    TTF: YozakuraJPLightTTF,
    WOFF: YozakuraJPLightWOFF,
    WOFF2: YozakuraJPLightWOFF2,
    OTF: YozakuraJPLightOTF,
  },
  Regular: {
    WOFF: YozakuraJPRegularWOFF,
    WOFF2: YozakuraJPRegularWOFF2,
    OTF: YozakuraJPRegularOTF,
  }
}

const Shojumaru = {
  Regular: {
    WOFF: ShojumaruWOFF,
    WOFF2: ShojumaruWOFF2,
    TTF: ShojumaruTTF,
  }
}

export { YozakuraJP, Shojumaru }
