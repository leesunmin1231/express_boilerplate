export async function router(app) {
  app.get("/", async (req, res) => {
    res.sendFile("index.html");
  });

  app.post("/", async (req, res) => {
    res.sendFile("index.html");
  });
}
