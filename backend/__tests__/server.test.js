const request = require("supertest");
const app = require("../server");
const db = require("../db/connection");

describe("GET /api/joke", () => {
  it("should return a joke object with setup and punchline", async () => {
    const res = await request(app).get("/api/joke");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("setup");
    expect(res.body).toHaveProperty("punchline");
  });

  it("should return a joke object with id and type", async () => {
    const res = await request(app).get("/api/joke");

    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("type");
  });

  it("should return status 200", async () => {
    const res = await request(app).get("/api/joke");
    expect(res.statusCode).toBe(200);
  });

  it("should return 404 for unknown route", async () => {
    const res = await request(app).get("/api/not-a-real-endpoint");
    expect(res.statusCode).toBe(404);
  });

  it("GET /api should return 404 with custom message", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ msg: "Not found" });
  });
});

afterAll(async () => {
  await db.end();
});
