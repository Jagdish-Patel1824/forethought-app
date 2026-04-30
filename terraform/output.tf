output "instance_id" {
  value = aws_instance.NodeJS-server.id
}

output "public_ip" {
  value = aws_instance.NodeJS-server.public_ip
}