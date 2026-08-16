const request=require("supertest");
const app=require("../server");

describe("Cloud CI/CD Tests",()=>{

test("Home endpoint",async()=>{
const res=await request(app).get("/");
expect(res.statusCode).toBe(200);
});

test("Hello endpoint",async()=>{
const res=await request(app).get("/hello");
expect(res.statusCode).toBe(200);
expect(res.text).toBe("Hello from Cloud CI/CD!");
});

test("Health endpoint",async()=>{
const res=await request(app).get("/health");
expect(res.statusCode).toBe(200);
expect(res.body.status).toBe("healthy");
});

});