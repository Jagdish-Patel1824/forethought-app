resource "aws_instance" "NodeJS-server" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = "devops-final"

 tags = {
    Roles      = var.roles

  }
}