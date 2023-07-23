# NGINX site config
# Lives in /etc/nginx/sites-available/example.com

server {
        server_name example.com 217.160.65.27;

        root /home/example/example.com/;
        
        index index.html;

        location / {
		root /home/example/example.com/front/;
        }
}

server {
	server_name www.example.com;

	return 301 $scheme://example.com$request_uri;
}