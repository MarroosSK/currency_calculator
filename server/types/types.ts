export interface CurrencyI {
  currency: string;
  rate: string;
}

export interface CubeI {
  Cube: {
    Cube: {
      Cube: CurrencyI[];
    };
    time: string;
  };
}

export interface SenderI {
  name: {
    __prefix: string;
    __text: string;
  };
  __prefix: string;
}

export interface EnvelopeI {
  subject: {
    __prefix: string;
    __text: string;
  };
  Sender: SenderI;
  Cube: CubeI;
  __prefix: string;
}

export interface DocumentI {
  Envelope: EnvelopeI;
  xmlns_gesmes: string;
  xmlns: string;
  __prefix: string;
}
