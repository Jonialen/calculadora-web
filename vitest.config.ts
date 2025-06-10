import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Configura jsdom como entorno de pruebas
  },
});
