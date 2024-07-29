package main

import "github.com/gin-gonic/gin"

func main() {
    // Initialize the Gin router
    router := gin.Default()

    // Define a route that responds with "Hello, World!" to GET requests to the root URL
    router.GET("/", func(c *gin.Context) {
        c.String(200, "Hello, Worlds!")
    })

    // Run the Gin server on port 8080
    router.Run(":8080")
}
