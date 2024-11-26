import {  Router } from "express";
import Question from "../models/Question.js"

console.log("here", Question)

const router = Router();


router.post("/", async (request, response) => {
  try {
    const newQuestion = new Question(request.body);

    const data = await newQuestion.save();

    response.json(data);
  } catch (error) {

    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});


router.get("/", async (request, response) => {
  try {

    const query = request.query;

    const data = await Question.find(query);

    response.json(data);
  } catch (error) {

    console.log(error);

    return response.status(500).json(error.errors);
  }
});



router.get("/:id", async (request, response) => {
  try {
    const data = await Question.findById(request.params.id);

    response.json(data);
  } catch (error) {

    console.log(error);

    return response.status(500).json(error.errors);
  }
});


router.delete("/:id", async (request, response) => {
  try {
    const data = await Question.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch (error) {

    console.log(error);

    return response.status(500).json(error.errors);
  }
});


router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Question.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          question:question.body
        }
      },
      {
        new: true,
        runValidators: true
      }
    );

    response.json(data);
  } catch (error) {

    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});


export default router;
