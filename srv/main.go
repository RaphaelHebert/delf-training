package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	// Create new Fiber instance
	app := fiber.New()

	// serve Single Page application on "/"
	// assume static file at dist folder
	app.Static("/", "../DailyDices-FE/dist")

	app.Get("/*", func(ctx *fiber.Ctx) error {
		return ctx.SendFile("../DailyDices-FE/dist/index.html")
	})

	// Start server on http://localhost:3000
	log.Fatal(app.Listen(":8081"))
}