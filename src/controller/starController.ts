import { RequestHandler } from "express";
import http from "../api/http";

export const getStarsHandler: RequestHandler = async (req, res) => {
  await http.fetchStars();

  res.json({ status: 200, message: "200 OK" });
};

export const getStarHandler: RequestHandler = async (req, res) => {
  await http.fetchStarByhHrNo();

  res.json({ status: 200, message: "200 OK" });
};
