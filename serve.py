import http.server, os
os.chdir("/Users/luisernesto/Desktop/claude-tutorial")
handler = http.server.SimpleHTTPRequestHandler
httpd = http.server.HTTPServer(("", 4001), handler)
httpd.serve_forever()
