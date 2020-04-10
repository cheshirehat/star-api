import * as parser from "xml2json";
import { Star, Stars } from "../model/type";

export const convertStarsXmlToJson = (xml: string): Stars => {
  return JSON.parse(parser.toJson(xml));
};

export const convertStarXmlToJson = (xml: string): Star => {
  return JSON.parse(parser.toJson(xml));
};
