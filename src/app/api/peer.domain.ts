export interface Peer {
  supporter: boolean;
  rs_v4: boolean;
  rs_v6: boolean;
  asn: number;
  name: string;
  url: string;
  speed: Speed[];
}

export interface Speed {
  speed: number;
  amount: number;
}

