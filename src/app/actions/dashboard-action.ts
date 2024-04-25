
// Program view start
export const PROGRAM_VIEW_IMPACT_LIST_REQUEST_PIE = "program view list request pie";
export const PROGRAM_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR = "program view list request group bar";
export const PROGRAM_VIEW_SOCIAL_LIST_REQUEST_PIE = "program view social list request pie";
export const PROGRAM_VIEW_SOCIAL_LIST_REQUEST_GROUP_BAR = "program view social list request group bar";
export const PROGRAM_VIEW_SOCIAL_LIST_REQUEST_TIME_LINE = "program view social list request timeline";
export const PROGRAM_VIEW_SOCIAL_LIST_REQUEST_CARD = "program view social list request card";
export const PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_PIE = "program view environmental list request pie";
export const PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_DONUT = "program view environmental list request donut";
export const PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_TIME_LINE = "program view environmental list request timeline";
export const PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_GROUP_BAR = "program view environmental list request group bar";
export const PROGRAM_VIEW_IMPACT_LIST_REQUEST_CARD = "program view impact list request card";
export const PROGRAM_VIEW_IMPACT_LIST_REQUEST_IPSA = "program view impact list request ipsa";
export const COUNTRY_LIST_REQUEST                  = "country list request ";


export const PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_PIE = "program view success request pie";
export const PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR = "program success request group bar";
export const PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_PIE = "program view social success request pie";
export const PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_GROUP_BAR = "program view social success request group bar";
export const PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_TIME_LINE = "program view social success request timeline";
export const PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_CARD = "program view social success request card";
export const PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_PIE = "program view environmental success request pie";
export const PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_DONUT = "program view environmental success request donut";
export const PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_TIME_LINE = "program view environmental success request timeline";
export const PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_GROUP_BAR = "program view environmental success request group bar";
export const PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_CARD = "program view impact success request card";
export const PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_IPSA = "program view impact success request ipsa";
export const COUNTRY_SUCCESS_REQUEST                  = "country success request "; 

export const PROGRAM_VIEW_IMPACT_FAILED_REQUEST_PIE = "program view failed request pie";
export const PROGRAM_VIEW_IMPACT_FAILED_REQUEST_GROUP_BAR = "program view failed request group bar";
export const PROGRAM_VIEW_SOCIAL_FAILED_REQUEST_PIE = "program view social failed request pie";
export const PROGRAM_VIEW_SOCIAL_FAILED_REQUEST_GROUP_BAR = "program view social failed request group bar";
export const PROGRAM_VIEW_SOCIAL_FAILED_REQUEST_TIME_LINE = "program view social failed request timeline";
export const PROGRAM_VIEW_SOCIAL_FAILED_REQUEST_CARD = "program view social failed request card";
export const PROGRAM_VIEW_ENVIRONMENTAL_FAILED_REQUEST_PIE = "program view environmental failed request pie";
export const PROGRAM_VIEW_ENVIRONMENTAL_FAILED_REQUEST_DONUT = "program view environmental failed request donut";
export const PROGRAM_VIEW_ENVIRONMENTAL_FAILED_REQUEST_TIME_LINE = "program view environmental failed request timeline";
export const PROGRAM_VIEW_ENVIRONMENTAL_FAILED_REQUEST_GROUP_BAR = "program view environmental failed request group bar";
export const PROGRAM_VIEW_IMPACT_FAILED_REQUEST_CARD = "program view impact failed request card";
export const PROGRAM_VIEW_IMPACT_FAILED_REQUEST_IPSA = "program view impact failed request ipsa";
export const COUNTRY_FAILED_REQUEST                  = "country failed request";

export class ProgramViewImpactListRequestActionPie {
    readonly type = PROGRAM_VIEW_IMPACT_LIST_REQUEST_PIE;
  }
export class ProgramViewImpactListRequestActionGroupBar {
    readonly type = PROGRAM_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR;
  }

  export class ProgramViewSocialListRequestActionGroupBar {
    readonly type = PROGRAM_VIEW_SOCIAL_LIST_REQUEST_GROUP_BAR;
  }
  export class ProgramViewSocialListRequestActionPie {
    readonly type = PROGRAM_VIEW_SOCIAL_LIST_REQUEST_PIE;
  }
  export class ProgramViewImpactListRequestActionCard {
    readonly type = PROGRAM_VIEW_IMPACT_LIST_REQUEST_CARD;
  }
  export class ProgramViewImpactListRequestActionIpsa {
    readonly type = PROGRAM_VIEW_IMPACT_LIST_REQUEST_IPSA;
  }
  export class ProgramViewSocialListRequestActionTimeLine {
    readonly type = PROGRAM_VIEW_SOCIAL_LIST_REQUEST_TIME_LINE;
  }
  export class ProgramViewSocialListRequestActionCard {
    readonly type = PROGRAM_VIEW_SOCIAL_LIST_REQUEST_CARD;
  }

  export class ProgramViewEnvironmentalListRequestActionPie {
    readonly type = PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_PIE;
  }
  export class ProgramViewEnvironmentalListRequestActionTimeLine {
    readonly type = PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_TIME_LINE;
  }
  export class ProgramViewEnvironmentalListRequestActionDonut {
    readonly type = PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_DONUT;
  }

  export class ProgramViewEnvironmentalListRequestActionGroupBar {
    readonly type = PROGRAM_VIEW_ENVIRONMENTAL_LIST_REQUEST_GROUP_BAR;
  }

  export class CountryListRequestAction {
    readonly type = COUNTRY_LIST_REQUEST;
  }

  export class CountrySuccessRequestAction{
    readonly type = COUNTRY_SUCCESS_REQUEST;
    constructor(public payload?: { data: any }) {
    }
  }

  export class ProgramViewImpactSuccessRequestActionPie{
    readonly type = PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_PIE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class ProgramViewImpactSuccessRequestActionGroupBar{
    readonly type = PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR;
    constructor(public payload?: { data: any }) {
    }
  }

  export class ProgramViewImpactSuccessRequestActionCard{
    readonly type = PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_CARD;
    constructor(public payload?: { data: any }) {
    }
  }
  
  export class ProgramViewImpactSuccessRequestActionIpsa{
    readonly type = PROGRAM_VIEW_IMPACT_SUCCESS_REQUEST_IPSA;
    constructor(public payload?: { data: any }) {
    }
  }

  export class ProgramViewSocialSuccessRequestActionPie{
    readonly type = PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_PIE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class ProgramViewSocialSuccessRequestActionGroupBar{
    readonly type = PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_GROUP_BAR
    constructor(public payload?: { data: any }) {
    }
  }

  export class ProgramViewSocialSuccessRequestActionTimeLine{
    readonly type = PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_TIME_LINE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class ProgramViewSocialSuccessRequestActionCard{
    readonly type = PROGRAM_VIEW_SOCIAL_SUCCESS_REQUEST_CARD;
    constructor(public payload?: { data: any }) {
    }
  }

  export class ProgramViewEnvironmentalSuccessRequestActionPie{
    readonly type = PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_PIE
    constructor(public payload?: { data: any }) {
    }
  }

  export class ProgramViewEnvironmentalSuccessRequestActionTimeLine{
    readonly type = PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_TIME_LINE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class ProgramViewEnvironmentalSuccessRequestActionDonut{
    readonly type = PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_DONUT;
    constructor(public payload?: { data: any }) {
    }
  }
  export class ProgramViewEnvironmentalSuccessRequestActionGroupBar{
    readonly type = PROGRAM_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_GROUP_BAR;
    constructor(public payload?: { data: any }) {
    }
  }

  // program view end

  
// country view start

export const COUNTRY_VIEW_IMPACT_LIST_REQUEST_PIE = "country view list request pie";
export const COUNTRY_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR = "country view list request group bar";
export const COUNTRY_VIEW_SOCIAL_LIST_REQUEST_PIE = "country view social list request pie";
export const COUNTRY_VIEW_SOCIAL_LIST_REQUEST_GROUP_BAR = "country view social list request group bar";
export const COUNTRY_VIEW_SOCIAL_LIST_REQUEST_TIME_LINE = "country view social list request timeline";
export const COUNTRY_VIEW_SOCIAL_LIST_REQUEST_CARD = "country view social list request card";
export const COUNTRY_VIEW_ENVIRONMENTAL_LIST_REQUEST_PIE = "country view environmental list request pie";
export const COUNTRY_VIEW_ENVIRONMENTAL_LIST_REQUEST_DONUT = "country view environmental list request donut";
export const COUNTRY_VIEW_ENVIRONMENTAL_LIST_REQUEST_TIME_LINE = "country view environmental list request timeline";

export const COUNTRY_VIEW_IMPACT_SUCCESS_REQUEST_PIE = "country view success request pie";
export const COUNTRY_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR = "country success request group bar";
export const COUNTRY_VIEW_SOCIAL_SUCCESS_REQUEST_PIE = "country view social success request pie";
export const COUNTRY_VIEW_SOCIAL_SUCCESS_REQUEST_GROUP_BAR = "country view social success request group bar";
export const COUNTRY_VIEW_SOCIAL_SUCCESS_REQUEST_TIME_LINE = "country view social success request timeline";
export const COUNTRY_VIEW_SOCIAL_SUCCESS_REQUEST_CARD = "country view social success request card";
export const COUNTRY_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_PIE = "country view environmental success request pie";
export const COUNTRY_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_DONUT = "country view environmental success request donut";
export const COUNTRY_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_TIME_LINE = "country view environmental success request timeline";

export const COUNTRY_VIEW_IMPACT_FAILED_REQUEST_PIE = "country view failed request pie";
export const COUNTRY_VIEW_IMPACT_FAILED_REQUEST_GROUP_BAR = "country view failed request group bar";
export const COUNTRY_VIEW_SOCIAL_FAILED_REQUEST_PIE = "country view social failed request pie";
export const COUNTRY_VIEW_SOCIAL_FAILED_REQUEST_GROUP_BAR = "country view social failed request group bar";
export const COUNTRY_VIEW_SOCIAL_FAILED_REQUEST_TIME_LINE = "country view social failed request timeline";
export const COUNTRY_VIEW_SOCIAL_FAILED_REQUEST_CARD = "country view social failed request card";
export const COUNTRY_VIEW_ENVIRONMENTAL_FAILED_REQUEST_PIE = "country view environmental failed request pie";
export const COUNTRY_VIEW_ENVIRONMENTAL_FAILED_REQUEST_DONUT = "country view environmental failed request donut";
export const COUNTRY_VIEW_ENVIRONMENTAL_FAILED_REQUEST_TIME_LINE = "country view environmental failed request timeline";



export class CountryViewImpactListRequestActionPie {
    readonly type = COUNTRY_VIEW_IMPACT_LIST_REQUEST_PIE;
  }
export class CountryViewImpactListRequestActionGroupBar {
    readonly type = COUNTRY_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR;
  }

  export class CountryViewSocialListRequestActionGroupBar {
    readonly type = COUNTRY_VIEW_SOCIAL_LIST_REQUEST_GROUP_BAR;
  }
  export class CountryViewSocialListRequestActionPie {
    readonly type = COUNTRY_VIEW_SOCIAL_LIST_REQUEST_PIE;
  }
  export class CountryViewSocialListRequestActionTimeLine {
    readonly type = COUNTRY_VIEW_SOCIAL_LIST_REQUEST_TIME_LINE;
  }
  export class CountryViewSocialListRequestActionCard {
    readonly type = COUNTRY_VIEW_SOCIAL_LIST_REQUEST_CARD;
  }


  export class CountryViewImpactSuccessRequestActionPie{
    readonly type = COUNTRY_VIEW_IMPACT_SUCCESS_REQUEST_PIE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class CountryViewImpactSuccessRequestActionGroupBar{
    readonly type = COUNTRY_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR;
    constructor(public payload?: { data: any }) {
    }
  }

  export class CountryViewSocialSuccessRequestActionPie{
    readonly type = COUNTRY_VIEW_SOCIAL_SUCCESS_REQUEST_PIE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class CountryViewSocialSuccessRequestActionGroupBar{
    readonly type = COUNTRY_VIEW_SOCIAL_SUCCESS_REQUEST_GROUP_BAR
    constructor(public payload?: { data: any }) {
    }
  }

  export class CountryViewSocialSuccessRequestActionTimeLine{
    readonly type = COUNTRY_VIEW_SOCIAL_SUCCESS_REQUEST_TIME_LINE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class CountryViewSocialSuccessRequestActionCard{
    readonly type = COUNTRY_VIEW_SOCIAL_SUCCESS_REQUEST_CARD;
    constructor(public payload?: { data: any }) {
    }
  }

  export class CountryViewEnvironmentalSuccessRequestActionPie{
    readonly type = COUNTRY_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_PIE
    constructor(public payload?: { data: any }) {
    }
  }

  export class CountryViewEnvironmentalSuccessRequestActionTimeLine{
    readonly type = COUNTRY_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_TIME_LINE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class CountryViewEnvironmentalSuccessRequestActionDonut{
    readonly type = COUNTRY_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_DONUT;
    constructor(public payload?: { data: any }) {
    }
  }

  // Country view end


  
// Ip view start

export const IP_VIEW_IMPACT_LIST_REQUEST_PIE = "ip view list request pie";
export const IP_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR = "ip view list request group bar";
export const IP_VIEW_SOCIAL_LIST_REQUEST_PIE = "ip view social list request pie";
export const IP_VIEW_SOCIAL_LIST_REQUEST_GROUP_BAR = "ip view social list request group bar";
export const IP_VIEW_SOCIAL_LIST_REQUEST_TIME_LINE = "ip view social list request timeline";
export const IP_VIEW_SOCIAL_LIST_REQUEST_CARD = "ip view social list request card";
export const IP_VIEW_ENVIRONMENTAL_LIST_REQUEST_PIE = "ip view environmental list request pie";
export const IP_VIEW_ENVIRONMENTAL_LIST_REQUEST_DONUT = "ip view environmental list request donut";
export const IP_VIEW_ENVIRONMENTAL_LIST_REQUEST_TIME_LINE = "ip view environmental list request timeline";

export const IP_VIEW_IMPACT_SUCCESS_REQUEST_PIE = "ip view success request pie";
export const IP_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR = "ip success request group bar";
export const IP_VIEW_SOCIAL_SUCCESS_REQUEST_PIE = "ip view social success request pie";
export const IP_VIEW_SOCIAL_SUCCESS_REQUEST_GROUP_BAR = "ip view social success request group bar";
export const IP_VIEW_SOCIAL_SUCCESS_REQUEST_TIME_LINE = "ip view social success request timeline";
export const IP_VIEW_SOCIAL_SUCCESS_REQUEST_CARD = "ip view social success request card";
export const IP_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_PIE = "ip view environmental success request pie";
export const IP_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_DONUT = "ip view environmental success request donut";
export const IP_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_TIME_LINE = "ip view environmental success request timeline";

export const IP_VIEW_IMPACT_FAILED_REQUEST_PIE = "ip view failed request pie";
export const IP_VIEW_IMPACT_FAILED_REQUEST_GROUP_BAR = "ip view failed request group bar";
export const IP_VIEW_SOCIAL_FAILED_REQUEST_PIE = "ip view social failed request pie";
export const IP_VIEW_SOCIAL_FAILED_REQUEST_GROUP_BAR = "ip view social failed request group bar";
export const IP_VIEW_SOCIAL_FAILED_REQUEST_TIME_LINE = "ip view social failed request timeline";
export const IP_VIEW_SOCIAL_FAILED_REQUEST_CARD = "ip view social failed request card";
export const IP_VIEW_ENVIRONMENTAL_FAILED_REQUEST_PIE = "ip view environmental failed request pie";
export const IP_VIEW_ENVIRONMENTAL_FAILED_REQUEST_DONUT = "ip view environmental failed request donut";
export const IP_VIEW_ENVIRONMENTAL_FAILED_REQUEST_TIME_LINE = "ip view environmental failed request timeline";

export class IpViewImpactListRequestActionPie {
    readonly type = IP_VIEW_IMPACT_LIST_REQUEST_PIE;
  }
export class IpViewImpactListRequestActionGroupBar {
    readonly type = IP_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR;
  }

  export class IpViewSocialListRequestActionGroupBar {
    readonly type = IP_VIEW_SOCIAL_LIST_REQUEST_GROUP_BAR;
  }
  export class IpViewSocialListRequestActionPie {
    readonly type = IP_VIEW_SOCIAL_LIST_REQUEST_PIE;
  }
  export class IpViewSocialListRequestActionTimeLine {
    readonly type = IP_VIEW_SOCIAL_LIST_REQUEST_TIME_LINE;
  }
  export class IpViewSocialListRequestActionCard {
    readonly type = IP_VIEW_SOCIAL_LIST_REQUEST_CARD;
  }


  export class IpViewImpactSuccessRequestActionPie{
    readonly type = IP_VIEW_IMPACT_SUCCESS_REQUEST_PIE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class IpViewImpactSuccessRequestActionGroupBar{
    readonly type = IP_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR;
    constructor(public payload?: { data: any }) {
    }
  }

  export class IpViewSocialSuccessRequestActionPie{
    readonly type = IP_VIEW_SOCIAL_SUCCESS_REQUEST_PIE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class IpViewSocialSuccessRequestActionGroupBar{
    readonly type = IP_VIEW_SOCIAL_SUCCESS_REQUEST_GROUP_BAR
    constructor(public payload?: { data: any }) {
    }
  }

  export class IpViewSocialSuccessRequestActionTimeLine{
    readonly type = IP_VIEW_SOCIAL_SUCCESS_REQUEST_TIME_LINE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class IpViewSocialSuccessRequestActionCard{
    readonly type = IP_VIEW_SOCIAL_SUCCESS_REQUEST_CARD;
    constructor(public payload?: { data: any }) {
    }
  }

  export class IpViewEnvironmentalSuccessRequestActionPie{
    readonly type = IP_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_PIE
    constructor(public payload?: { data: any }) {
    }
  }

  export class IpViewEnvironmentalSuccessRequestActionTimeLine{
    readonly type = IP_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_TIME_LINE;
    constructor(public payload?: { data: any }) {
    }
  }
  export class IpViewEnvironmentalSuccessRequestActionDonut{
    readonly type = IP_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_DONUT;
    constructor(public payload?: { data: any }) {
    }
  }

  // Ip view end

  
// factory view start

export const FACTORY_VIEW_IMPACT_LIST_REQUEST_PIE = "country view list request pie";
export const FACTORY_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR = "country view list request group bar";
export const FACTORY_VIEW_SOCIAL_LIST_REQUEST_PIE = "country view social list request pie";
export const FACTORY_VIEW_SOCIAL_LIST_REQUEST_GROUP_BAR = "country view social list request group bar";
export const FACTORY_VIEW_SOCIAL_LIST_REQUEST_TIME_LINE = "country view social list request timeline";
export const FACTORY_VIEW_SOCIAL_LIST_REQUEST_CARD = "country view social list request card";
export const FACTORY_VIEW_ENVIRONMENTAL_LIST_REQUEST_PIE = "country view environmental list request pie";
export const FACTORY_VIEW_ENVIRONMENTAL_LIST_REQUEST_DONUT = "country view environmental list request donut";
export const FACTORY_VIEW_ENVIRONMENTAL_LIST_REQUEST_TIME_LINE = "country view environmental list request timeline";

export const FACTORY_VIEW_IMPACT_SUCCESS_REQUEST_PIE = "country view success request pie";
export const FACTORY_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR = "country success request group bar";
export const FACTORY_VIEW_SOCIAL_SUCCESS_REQUEST_PIE = "country view social success request pie";
export const FACTORY_VIEW_SOCIAL_SUCCESS_REQUEST_GROUP_BAR = "country view social success request group bar";
export const FACTORY_VIEW_SOCIAL_SUCCESS_REQUEST_TIME_LINE = "country view social success request timeline";
export const FACTORY_VIEW_SOCIAL_SUCCESS_REQUEST_CARD = "country view social success request card";
export const FACTORY_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_PIE = "country view environmental success request pie";
export const FACTORY_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_DONUT = "country view environmental success request donut";
export const FACTORY_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_TIME_LINE = "country view environmental success request timeline";

export const FACTORY_VIEW_IMPACT_FAILED_REQUEST_PIE = "country view failed request pie";
export const FACTORY_VIEW_IMPACT_FAILED_REQUEST_GROUP_BAR = "country view failed request group bar";
export const FACTORY_VIEW_SOCIAL_FAILED_REQUEST_PIE = "country view social failed request pie";
export const FACTORY_VIEW_SOCIAL_FAILED_REQUEST_GROUP_BAR = "country view social failed request group bar";
export const FACTORY_VIEW_SOCIAL_FAILED_REQUEST_TIME_LINE = "country view social failed request timeline";
export const FACTORY_VIEW_SOCIAL_FAILED_REQUEST_CARD = "country view social failed request card";
export const FACTORY_VIEW_ENVIRONMENTAL_FAILED_REQUEST_PIE = "country view environmental failed request pie";
export const FACTORY_VIEW_ENVIRONMENTAL_FAILED_REQUEST_DONUT = "country view environmental failed request donut";
export const FACTORY_VIEW_ENVIRONMENTAL_FAILED_REQUEST_TIME_LINE = "country view environmental failed request timeline";




export class FactoryViewImpactListRequestActionPie {
  readonly type = FACTORY_VIEW_IMPACT_LIST_REQUEST_PIE;
}
export class FactoryViewImpactListRequestActionGroupBar {
  readonly type = FACTORY_VIEW_IMPACT_LIST_REQUEST_GROUP_BAR;
}

export class FactoryViewSocialListRequestActionGroupBar {
  readonly type = FACTORY_VIEW_SOCIAL_LIST_REQUEST_GROUP_BAR;
}
export class FactoryViewSocialListRequestActionPie {
  readonly type = FACTORY_VIEW_SOCIAL_LIST_REQUEST_PIE;
}
export class FactoryViewSocialListRequestActionTimeLine {
  readonly type = FACTORY_VIEW_SOCIAL_LIST_REQUEST_TIME_LINE;
}
export class FactoryViewSocialListRequestActionCard {
  readonly type = FACTORY_VIEW_SOCIAL_LIST_REQUEST_CARD;
}


export class FactoryViewImpactSuccessRequestActionPie{
  readonly type = FACTORY_VIEW_IMPACT_SUCCESS_REQUEST_PIE;
  constructor(public payload?: { data: any }) {
  }
}
export class FactoryViewImpactSuccessRequestActionGroupBar{
  readonly type = FACTORY_VIEW_IMPACT_SUCCESS_REQUEST_GROUP_BAR;
  constructor(public payload?: { data: any }) {
  }
}

export class FactoryViewSocialSuccessRequestActionPie{
  readonly type = FACTORY_VIEW_SOCIAL_SUCCESS_REQUEST_PIE;
  constructor(public payload?: { data: any }) {
  }
}
export class FactoryViewSocialSuccessRequestActionGroupBar{
  readonly type = FACTORY_VIEW_SOCIAL_SUCCESS_REQUEST_GROUP_BAR
  constructor(public payload?: { data: any }) {
  }
}

export class FactoryViewSocialSuccessRequestActionTimeLine{
  readonly type = FACTORY_VIEW_SOCIAL_SUCCESS_REQUEST_TIME_LINE;
  constructor(public payload?: { data: any }) {
  }
}
export class FactoryViewSocialSuccessRequestActionCard{
  readonly type = FACTORY_VIEW_SOCIAL_SUCCESS_REQUEST_CARD;
  constructor(public payload?: { data: any }) {
  }
}

export class FactoryViewEnvironmentalSuccessRequestActionPie{
  readonly type = FACTORY_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_PIE
  constructor(public payload?: { data: any }) {
  }
}

export class FactoryViewEnvironmentalSuccessRequestActionTimeLine{
  readonly type = FACTORY_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_TIME_LINE;
  constructor(public payload?: { data: any }) {
  }
}
export class FactoryViewEnvironmentalSuccessRequestActionDonut{
  readonly type = FACTORY_VIEW_ENVIRONMENTAL_SUCCESS_REQUEST_DONUT;
  constructor(public payload?: { data: any }) {
  }
}

  // Factory view end