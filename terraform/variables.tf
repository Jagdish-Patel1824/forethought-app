variable "ami_id" {
  description = "AMI ID for EC2"
  default     = "ami-0ec10929233384c7f"
}

variable "instance_type" {
  default = "t3.medium"
}

variable "aws_region" {
  default = "us-east-1"
}

variable "roles" {
  default = "node-app"
}