package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", Hello)
	http.ListenAndServe(":80", nil)
	fmt.Println("Server rodando...")
}

func Hello(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("<h1>Hello Full Cycle</h1>"))
}