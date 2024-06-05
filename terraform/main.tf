provider "aws" {
  region = var.region
}

resource "aws_instance" "example" {
  ami           = "ami-04b70fa74e45c3917"
  instance_type = "t2.micro"

  key_name = var.key_name # Sử dụng biến key_name

  security_groups = [aws_security_group.allow_http_and_ssh.name]

  tags = {
    Name = "MyDockerInstance"
  }

  user_data = <<-EOF
              #!/bin/bash
              sudo apt-get update -y
              sudo apt-get install -y docker.io
              sudo systemctl start docker
              sudo systemctl enable docker
              sudo usermod -aG docker ubuntu

              docker pull demo.goharbor.io/thstylish/portfolio:1.1.1
              docker run -d -p 80:80 demo.goharbor.io/thstylish/portfolio:1.1.1
              EOF
}

resource "aws_security_group" "allow_http_and_ssh" {
  name        = "allow_http_and_ssh"
  description = "Allow HTTP and SSH inbound traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

output "instance_public_ip" {
  value = aws_instance.example.public_ip
}
