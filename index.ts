import type { Address, Agent, Language, LanguageContext, HolochainLanguageDelegate, Interaction } from "@perspect3vism/ad4m";
import ExpressionAdapter from "./adapter";
//import Icon from "./build/Icon.js";
//import ConstructorIcon from "./build/ConstructorIcon.js";
//import { UI } from "./expressionUI";
import { DNA, DNA_NICK } from "./dna";

/*
function iconFor(expression: Address): string {
  return Icon;
}

function constructorIcon(): string {
  return ConstructorIcon;
}
*/

function interactions(expression: Address): Interaction[] {
  return [];
}

export const name = "clutter";

export default async function create(context: LanguageContext): Promise<Language> {
  const Holochain = context.Holochain as HolochainLanguageDelegate;
  await Holochain.registerDNAs([{ file: DNA, nick: DNA_NICK }]);

  const expressionAdapter = new ExpressionAdapter(context);
  //const expressionUI = new UI();

  return {
    name,
    expressionAdapter,
    //iconFor,
    //constructorIcon,
    interactions,
    //expressionUI,
  } as Language;
}
