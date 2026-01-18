#!/usr/bin/env python3
"""
Simple HTTP Server for CV Website
Serves static files and handles Formspree integration
"""

import http.server
import socketserver
import webbrowser
import os
from urllib.parse import urlparse, parse_qs

class CVHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Serve static files
        super().do_GET()
    
    def do_POST(self):
        # Handle form submissions (though Formspree will handle the actual email sending)
        if self.path == '/contact':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            # Send response
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            response = '{"success": true, "message": "Form submitted successfully"}'
            self.wfile.write(response.encode())
        else:
            super().do_GET()

def start_server(port=8000):
    """Start the HTTP server"""
    try:
        with socketserver.TCPServer(("", port), CVHandler) as httpd:
            print(f"🚀 CV Website Server Started!")
            print(f"📱 Local: http://localhost:{port}")
            print(f"🌐 Network: http://0.0.0.0:{port}")
            print(f"📧 Email: Formspree integration active")
            print(f"⏹️  Press Ctrl+C to stop")
            print("-" * 50)
            
            # Open browser automatically
            webbrowser.open(f'http://localhost:{port}')
            
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except OSError as e:
        if e.errno == 10048:  # Port already in use
            print(f"❌ Port {port} is already in use. Trying port {port + 1}")
            start_server(port + 1)
        else:
            print(f"❌ Error starting server: {e}")

if __name__ == "__main__":
    start_server()



