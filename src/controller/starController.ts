import { RequestHandler } from "express";
import http from "../api/http";
import { convertStarXmlToJson, convertStarsXmlToJson } from "../lib/converter";

export const getStarsHandler: RequestHandler = async (req, res) => {
  const response = await http.fetchStars();
  const stars = convertStarsXmlToJson(response.data);

  res.json(stars);
};

export const getStarHandler: RequestHandler = async (req, res) => {
  const response = await http.fetchStarByhHrNo(Number(req.params.id));
  const star = convertStarXmlToJson(response.data);

  res.json(star);
};
