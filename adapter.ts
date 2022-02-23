import type { Address, Agent, Expression, PublicSharing, LanguageContext, HolochainLanguageDelegate, ExpressionAdapter, AgentService } from "@perspect3vism/ad4m";
import { DNA_NICK } from "./dna";

export default class ExpressionAdapterImpl implements ExpressionAdapter {
  #DNA: HolochainLanguageDelegate;
  #agent: AgentService;
  putAdapter: PublicSharing

  constructor(context: LanguageContext) {
    this.#DNA = context.Holochain as HolochainLanguageDelegate;
    this.#agent = context.agent;
    this.putAdapter = new Sharing(context)
  }

  async get(mewAddress: Address): Promise<Expression> {
    const fullMewWithContext = await this.#DNA.call(
      DNA_NICK,
      "mews",
      "get_feed_mew_and_context",
      mewAddress
    );

    return {
      author: 'unknown',
      timestamp: 'unknown',
      data: fullMewWithContext,
      proof: {
        key: 'none',
        signature: 'none'
      }
    }
  };
}

class Sharing implements PublicSharing {
  #DNA: HolochainLanguageDelegate;
  #agent: AgentService;

  constructor(context: LanguageContext) {
    this.#DNA = context.Holochain as HolochainLanguageDelegate;
    this.#agent = context.agent; 
  }

  async createPublic(mewObject: object): Promise<Address> {
    // if(!mewObject["mew"]) throw "Not a Mew object"
    // //@ts-ignore
    // const mewString = mewObject.mew

    const address = await this.#DNA.call(
      DNA_NICK,
      "mews",
      "create_mew",
      mewObject
    );

    return address
  }
}