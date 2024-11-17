import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3030/scoops", () => {
    return HttpResponse.json([
      {
        name: "Chocolate",
        imagePath: "/images/chocolate.png",
      },
      {
        name: "Vanilla",
        imagePath: "/images/vanilla.png",
      },
    ]);
  }),
  http.get("http://localhost:3030/toppings", () => {
    return HttpResponse.json([
      {
        name: "Cherries",
        imagePath: "/images/cherries.png",
      },
      {
        name: "M&Ms",
        imagePath: "/images/m-and-ms.png",
      },
      {
        name: "Hot fudge",
        imagePath: "/images/hot-fudge.png",
      },
    ]);
  }),

  http.get(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/todos`, () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Pobieranie",
      },
      { id: 2, name: "Śpiewanie" },
      {
        id: 3,
        name: "Gorączka",
      },
    ]);
  }),
];
