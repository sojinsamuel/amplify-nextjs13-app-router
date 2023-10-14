package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	_ "github.com/lib/pq"
)

type MyEvent struct {
	Name string `json:"name"`
}

type Blog struct {
	ID          int
	Title       string
	Description string
	Date        string
}

func selectBlogs() (blogs []Blog, err error) {
	db, err := sql.Open("postgres", "postgresql://")
	if err != nil {
		log.Fatalln(err)
	}
	defer db.Close()

	cmd := `SELECT id, title, description, date FROM blogs`
	rows, err := db.Query(cmd)
	if err != nil {
		log.Fatalln(err)
	}
	defer rows.Close()

	// var blogs []Blog
	for rows.Next() {
		var blog Blog
		err = rows.Scan(
			&blog.ID,
			&blog.Title,
			&blog.Description,
			&blog.Date,
		)
		if err != nil {
			log.Fatalln(err)
		}
		blogs = append(blogs, blog)
	}

	return blogs, err

}

func HandleRequest(ctx context.Context) (events.APIGatewayProxyResponse, error) {
	blogs, _ := selectBlogs()

	for _, blog := range blogs {
		fmt.Println(blog.ID, blog.Title, blog.Description, blog.Date)
	}

	jsonData, err := json.Marshal(blogs)
	if err != nil {
		return events.APIGatewayProxyResponse{StatusCode: 404}, err
	}
	fmt.Println(jsonData)
	// json.HTMLEscape(&buf, body)

	// resp := events.APIGatewayProxyResponse{
	// 	StatusCode:      200,
	// 	IsBase64Encoded: false,
	// 	Body:            string(jsonData),
	// 	Headers: map[string]string{
	// 		"Content-Type":                 "application/json",
	// 		"X-MyCompany-Func-Reply":       "hello-handler",
	// 		"Access-Control-Allow-Origin":  "*",
	// 		"Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
	// 		"Access-Control-Allow-Headers": "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization",
	// 	},
	// }

	// return resp, nil

	return events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       string(jsonData),
	}, nil
	// return "Hello!", nil
}

func main() {
	lambda.Start(HandleRequest)
}
